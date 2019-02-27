import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { expandLessonList, collapseLessonList } from '../../../actions/uiActions';
import getCourseRole from '../../common/getCourseRole';
import CourseLessonList from '../courseView/CourseLessonList';
import Spinner from '../../common/Spinner';
import './CourseLessonMenu.css';

class CourseLessonMenu extends Component {
  render() {
    if(!this.props.auth.user){
      return null;
    } 
    
    let courseRole = getCourseRole(this.props.auth.user.user, this.props.course);
    let classNames = 'CourseLessonMenu sidebar bg-info';
    let list = <Spinner/>;

    if(this.props.course){
      list = <CourseLessonList  
              lessons={this.props.course.lessons}
              courseRole={courseRole}
              mode='menu'
              />
    }

    if (this.props.expanded) {
      classNames += ' expanded';
    }

    return (
      <div id="mySidebar" className={classNames}>
        <div>
          <a href="javascript:void(0)" className="closebtn" onClick={this.props.collapseLessonList}>&times;</a>
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
  selectedLesson: PropTypes.object,
  course: PropTypes.object,
  auth: PropTypes.object.isRequired  
}

const mapStateToProps = (state) => ({
  course: state.courses.selectedCourse,
  auth: state.auth,
  selectedLesson: state.lessons.selectedLesson,
  expanded: state.ui.lessonListExpanded
});


export default connect(mapStateToProps, { expandLessonList, collapseLessonList })(CourseLessonMenu);