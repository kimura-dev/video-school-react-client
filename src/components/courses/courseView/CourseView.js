import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCourse } from '../../../actions/courseActions';
// import { getLesson } from '../../../actions/lessonActions';
import CourseVideoPreview from './CourseVideoPreview';
import CourseData from './CourseData';
import CourseLessonList from './CourseLessonList';


class CourseView extends Component {
  constructor(props) {

    super(props);
    this.state = {
     
    };

  }

  componentDidMount() {
    if(this.props.match.params){
      this.props.getCourse(this.props.match.params.id);
    }   
  }

  onLessonClick(e) {
    const lessonId = e.target.getAttribute('href').replace('#','')
    // this.props.getLesson(lessonId);
  }


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

    return (
      <section className="course-description-section">
        <div className="container">
          <CourseVideoPreview 
            videoUrl={videoUrl} 
            title={this.props.courses.selectedCourse.title}
            watchedLessons={this.props.auth.watchedLessons} 
          />

          <CourseData 
            watchedLessons={this.props.auth.watchedLessons}  
            course={this.props.courses.selectedCourse} 
          />

          <CourseLessonList  
            watchedLessons={this.props.auth.watchedLessons} 
            lessons={this.props.courses.selectedCourse.lessons}
            // onLessonClick={this.onLessonClick}
          />
        </div>
      </section>
    )
  }
}

CourseView.propTypes = {
  getCourse: PropTypes.func.isRequired,
  // getLesson: PropTypes.func.isRequired,
  courses: PropTypes.object.isRequired  
}

const mapStateToProps = (state) => ({
  courses: state.courses,
  auth: state.auth,
  lessons: state.lessons
});


export default connect(mapStateToProps, { getCourse })(withRouter(CourseView));