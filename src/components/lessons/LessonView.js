import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CourseLessonMenu from '../courses/courseLessons/CourseLessonMenu';
import { getLesson } from '../../actions/lessonActions';
import { toggleLessonList  as toggleMenu } from '../../actions/uiActions';
import LessonViewNavbar from './LessonViewNavbar';



 class LessonView extends Component {
   constructor(props) {
     super(props);
     this.state = {

     }
   }

   componentDidMount() {
    if(this.props.match.params){
      this.props.getLesson(this.props.match.params.id);
    }   
  }


  render() {
    return (
      <div className="LessonView">
        <LessonViewNavbar toggleMenu={this.props.toggleMenu}/>
        <CourseLessonMenu />
        {/* <LessonVideoPlayer /> */}
      </div>
     
    )
  }
}

LessonView.propTypes = {
  getLesson: PropTypes.func.isRequired,

}

const mapStateToProps = (state) => ({
  lesson: state.lessons.selectedLesson
});

export default connect(mapStateToProps, { getLesson, toggleMenu })(LessonView);