import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { expandLessonList, collapseLessonList } from '../../../actions/uiActions';
import CourseLessonList from '../courseView/CourseLessonList';

class CourseLessonMenu extends Component {
  render() {
    return (
      <CourseLessonList  
      watchedLessons={this.props.watchedLessons} 
      lessons={this.props.course.lessons}
      />
    )
  }
}

CourseLessonMenu.propTypes = {
  expandLessonList: PropTypes.func.isRequired,
  collapseLessonList: PropTypes.func.isRequired,
  watchedLessons: PropTypes.object.isRequired,
  selectedLesson: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired  
}

const mapStateToProps = (state) => ({
  watchedLessons: state.auth.user.user.watchedLessons,
  course: state.courses.selectedCourse,
  selectedLesson: state.lessons.selectedLesson
});


export default connect(mapStateToProps, { expandLessonList, collapseLessonList })(CourseLessonMenu);