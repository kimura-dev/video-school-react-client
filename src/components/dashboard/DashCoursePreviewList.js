import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CourseListItem from '../courses/CourseListItem';
import { getAuthoredCourses, getPurchasedCourses, setCourseLoaded } from '../../actions/courseActions';
import './DashCoursePreviewList.css'

class DashCoursePreviewList extends Component {
  constructor(props){
    super(props)

    this.state = {
      loading: true,
      shouldUpdate: true
    }
  }

  componentDidMount() {
    this.setState({ shouldUpdate: true });
    this.props.setCourseLoaded(false);
  }

  componentDidUpdate(oldProps) {

    if(this.state.shouldUpdate && this.props.auth.isAuthenticated){
      this.setState({
        shouldUpdate: false
      }) 
      this.props.getAuthoredCourses(this.props.auth.user.user.username)
      this.props.getPurchasedCourses(this.props.auth.user.user.username)
    }  
  }

  render() {

    let courses = '';
    let title = '';
    let noCourses = '';
    let linkBtn = '';
    let icon = ''
    
    const  courseRole  = this.props.courseRole || 'student';

    if(courseRole === 'teacher') {
      courses = this.props.courses.authoredCourses.map(course => {
        return (
         
          <CourseListItem 
            course={course} 
            courseRole="teacher"
            // deleteCourse={(e) => this.props.deleteCourse(this.props.courses.selectedCourse._id)}
            />
        )
      })
      icon = (<i class="fa fa-user-md mr-3 text-dark author-icon"/>)
      title = 'Authored Courses'
      noCourses = (<p className="mb-4">You have not yet created any courses.</p>)
      linkBtn = (<Link to="/course-form" className="btn btn-lg btn-success mr-2 mt-2 mb-4">
                  Create A Course
                </Link>)
    } else {

      icon = (<i class="fa fa-book mr-3 purchased-icon text-white"></i>)
    
      courses = this.props.courses.purchasedCourses.map( course => {
        return (
          <CourseListItem course={course} courseRole="student"/>
        )
      })
      // An icon for purchased courses <i class="fa fa-eye"></i>
      title = 'Purchased Courses'
      noCourses = (<p>You have not yet purchased any courses.</p>)
      linkBtn = (<Link to="/course-catalog" className="btn btn-lg btn-success mt-2 mb-4">
                  Course Catalog
                </Link>)
    }

    if (courses.length === 0){
      return (
        <div className="DashCoursePreviewList">
          <h3>{title}</h3>
          {noCourses}
          {linkBtn}
        </div>
      )
    }

    return (
      <div className="DashCoursePreviewList">
        <h3 className="mb-4">{icon}{title}</h3>
        <ul className="d-flex flex-column bd-highlight mb-3">
          {courses}
        </ul>
      </div>
    )
  }
}

DashCoursePreviewList.propTypes = {
  getAuthoredCourses: PropTypes.func.isRequired,
  getPurchasedCourses: PropTypes.func.isRequired,
  setCourseLoaded: PropTypes.func.isRequired,
  // deleteCourses: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  courses: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth, 
  courses: state.courses,
  errors: state.errors
});

export default connect(mapStateToProps, { getAuthoredCourses, getPurchasedCourses, setCourseLoaded })(
  DashCoursePreviewList
);

