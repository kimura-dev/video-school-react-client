import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import CourseListItem from '../courses/CourseListItem';
import { getAuthoredCourses, getPurchasedCourses } from '../../actions/courseActions';
// import DashCourseControls from './DashCourseControls.js';


class DashCoursePreviewList extends Component {
  constructor(props){
    super(props)

    this.state = {
      loading: true,
      shouldUpdate: true
    }
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
    // This is a React prop I am assigning, NOT a Redux prop
    const  courseRole  = this.props.courseRole || 'student';


    // This is where authoredCourses and purchasedCourses gets populated
    if(courseRole === 'teacher') {
      courses = this.props.courses.authoredCourses.map(course => {
        return (
          // <DashCourseControls/>
         
          <CourseListItem course={course} courseRole="teacher"/>
        )
      })
      title = 'Authored Courses'
      noCourses = (<p>You have not yet created any courses.</p>)
      linkBtn = (<Link to="/course-form" className="btn btn-lg btn-success mr-2">
                  Create A Course
                </Link>)
    } else {
      courses = this.props.courses.purchasedCourses.map( course => {
        return (
          <CourseListItem course={course} courseRole="student"/>
        )
      })
      title = 'Purchased Courses'
      noCourses = (<p>You have not yet purchased any courses.</p>)
      linkBtn = (<Link to="/course-catalog" className="btn btn-lg btn-success">
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
        <h3>{title}</h3>
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
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  courses: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth, // .auth comes from my root reducer
  courses: state.courses,
  errors: state.errors
});

export default connect(mapStateToProps, {getAuthoredCourses, getPurchasedCourses })(
  DashCoursePreviewList
);

