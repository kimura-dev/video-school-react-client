import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { expandLessonList, collapseLessonList } from '../../../actions/uiActions';
import CourseLessonList from '../courseView/CourseLessonList';
import Spinner from '../../common/Spinner';
import './CourseLessonMenu.css';


class CourseLessonMenu extends Component {
  render() {

    let classNames = 'CourseLessonMenu sideBar';
    let list = <Spinner/>;

    if(this.props.course){
      list = <CourseLessonList  
              watchedLessons={this.props.watchedLessons} 
              lessons={this.props.course.lessons}
              mode='menu'
              />
      
    }

    if (this.props.expanded) {
      classNames += ' expanded';
    }

    return (
      <div id="mySidebar" className={classNames}>
        <div>
          <a href="javascript:void(0)" class="closebtn" onClick={this.props.collapseLessonList}>&times;</a>
        </div>
        {list}
      </div>

    )
  }
}

CourseLessonMenu.propTypes = {
  expandLessonList: PropTypes.func.isRequired,
  collapseLessonList: PropTypes.func.isRequired,
  expanded: PropTypes.bool,
  watchedLessons: PropTypes.object.isRequired,
  selectedLesson: PropTypes.object.isRequired,
  course: PropTypes.object.isRequired  
}

const mapStateToProps = (state) => ({
  watchedLessons: state.auth.user.user.watchedLessons,
  course: state.courses.selectedCourse,
  selectedLesson: state.lessons.selectedLesson,
  expanded: state.ui.lessonListExpanded
});


export default connect(mapStateToProps, { expandLessonList, collapseLessonList })(CourseLessonMenu);