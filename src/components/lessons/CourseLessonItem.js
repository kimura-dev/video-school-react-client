import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CourseLessonItem extends Component {
  render() {
    let lessons = '';
    let title = '';

    lessons = this.props.lessons.map(lesson => {
      return (
        // <DashCourseControls/>
        <li className="p-2 bd-highlight bg-info" >{lesson.title}</li>
      )
    })

    title = this.props.lessons.title;


    return (
      <div className="DashLessonItem">
        <h3>{title}</h3>
        <ul className="d-flex flex-column bd-highlight mb-3">
          {lessons}
        </ul>
      </div>
    )
  }
}

CourseLessonItem.propTypes = { 
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  lessons: PropTypes.object.isRequired,
  courses: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth, // .auth comes from my root reducer
  lessons: state.lessons,
  courses: state.courses,
  errors: state.errors
});

export default connect(mapStateToProps)(CourseLessonItem);