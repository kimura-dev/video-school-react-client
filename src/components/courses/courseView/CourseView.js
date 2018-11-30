import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCourse } from '../../../actions/courseActions';
import { purchaseCourse } from '../../../actions/authActions';
import CourseVideoPreview from './CourseVideoPreview';
import CourseData from './CourseData';
import CourseLessonList from './CourseLessonList';
import Spinner from '../../common/Spinner';
import './CourseView.css';

function getCourseRole(user, course) {
  if(course && user && course.username === user.username) {
    return 'author';
  } else if(course && user && course._id && user.courses && user.courses.find instanceof Function && user.courses.find(c => c === course._id) ) {
    return 'student';
  }
  return 'guest';
}

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
    
    let videoUrl = '';
    let courseRole = '';

    if(!this.props.courses.selectedCourse || !this.props.match.params){
     return  <Spinner />
      return (
        <div>Course Not Found</div>
      )
    }

    courseRole = getCourseRole(this.props.auth.user.user, this.props.courses.selectedCourse);

    if(this.props.lessons.selectedLesson){
       videoUrl = this.props.lessons.selectedLesson.videoUrl;
    } 



    return (
    
      <section className="course-description-section">
        <div className="container">
        
          <CourseVideoPreview 
            videoUrl={videoUrl} 
            course={this.props.courses.selectedCourse}
            watchedLessons={this.props.auth.user.user.watchedLessons} 
            courseRole={courseRole}
            purchaseCourse={(e) => this.props.purchaseCourse(this.props.courses.selectedCourse._id)}
          />

          <CourseData 
            watchedLessons={this.props.auth.user.user.watchedLessons}  
            course={this.props.courses.selectedCourse} 
          />

          <CourseLessonList  
            watchedLessons={this.props.auth.user.user.watchedLessons} 
            lessons={this.props.courses.selectedCourse.lessons}
            onLessonClick={this.onLessonClick}
            courseRole={courseRole}
          />
        </div>
      </section>
    )
  }
}

CourseView.propTypes = {
  getCourse: PropTypes.func.isRequired,
  purchaseCourse: PropTypes.func.isRequired,
  // getLesson: PropTypes.func.isRequired,
  courses: PropTypes.object.isRequired  
}

const mapStateToProps = (state) => ({
  courses: state.courses,
  auth: state.auth,
  lessons: state.lessons
});


export default connect(mapStateToProps, { getCourse, purchaseCourse })(withRouter(CourseView));