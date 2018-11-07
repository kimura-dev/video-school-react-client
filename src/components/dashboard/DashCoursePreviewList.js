import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import DashCourseControls from './DashCourseControls.js';


class DashCoursePreviewList extends Component {
  render() {

    // const { user } = this.props.auth;
    // const { courses, loading } = this.props;
    let courses = '';
    let title = '';
    let noCourses = '';
    let linkBtn = '';
    // This is a React prop I am assigning, NOT a Redux prop
    const  courseRole  = this.props.courseRole || 'student';


    if(courseRole === 'teacher') {
      courses = this.props.courses.authoredCourses.map(course => {
        return (
          // <DashCourseControls/>
          <li className="p-2 bd-highlight bg-info" >{course.title}</li>
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
          <li className="p-2 bd-highlight bg-secondary">{course.title}</li>
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
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  courses: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth, // .auth comes from my root reducer
  courses: state.courses,
  errors: state.errors
});

export default connect(mapStateToProps, { })(
  DashCoursePreviewList
);

