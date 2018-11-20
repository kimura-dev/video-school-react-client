import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCourse } from '../../../actions/courseActions';
import CourseVideoPreview from './CourseVideoPreview';
import CourseData from './CourseData';
import CourseLessonsList from '../CourseLessonList';


class CourseView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // username: '',
      // password: '',
      // errors: {}
    };

  }

  componentDidMount() {
    if(this.props.match.params){
      this.props.getCourse(this.props.match.params.id);
    }   
  }

  onLessonClick(e) {
    const lessonId = e.target.getAttribute('href').replace('#','')
  }


  // allCourse, selectedCourse off courses
  // auth.courses, auth.username off auth

  render() {
    console.log(this.props);


    let videoUrl = ''

    if(!this.props.courses.selectedCourse || !this.props.match.params){
      return (
        <div>Course Not Found</div>
      )
    }

    if(this.props.lessons.selectedLesson){
       videoUrl = this.props.lessons.selectedLesson.videoUrl;
    } 

    console.log(this.props.lessons.selectedLesson)

    return (
      <section className="course-description-section">
        <div className="container">
          <CourseVideoPreview 
            videoUrl={videoUrl} 
          />

          <CourseData 
            watchedLessons={this.props.auth.watchedLessons}  
            course={this.props.courses.selectedCourse} 
          />

          <CourseLessonsList  
            watchedLessons={this.props.auth.watchedLessons} 
            lessons={this.props.courses.selectedCourse.lessons}
          />
        </div>
      </section>
    )
  }
}

CourseView.propTypes = {
  getCourse: PropTypes.func.isRequired,
  courses: PropTypes.object.isRequired  
}

const mapStateToProps = (state) => ({
  courses: state.courses,
  auth: state.auth,
  lessons: state.lessons
});

// {getCourse} is mapDispatchToProps
export default connect(mapStateToProps, { getCourse })(withRouter(CourseView));