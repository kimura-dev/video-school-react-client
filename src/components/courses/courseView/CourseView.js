import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCourse } from '../../../actions/courseActions';
import  getCourseRole  from '../../common/getCourseRole';
import { purchaseCourse } from '../../../actions/authActions';
import CourseVideoPreview from './CourseVideoPreview';
import CourseData from './CourseData';
import CourseLessonList from './CourseLessonList';
import Spinner from '../../common/Spinner';
import './CourseView.css';

// function getCourseRole(user, course) { 
//   if(course && user && course.username === user.username) {
//     return 'author';
//   } else if(course && user && course._id && user.courses && 
//             user.courses.find instanceof Function && 
//             user.courses.find(c => c && c === course._id || c._id === course._id) ) 
//             {
//     return 'student';
//   }
//   return 'guest';
// }

class CourseView extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    let urlString = this.props.match.params;
    let courseId = this.props.match.params.id;

    if(urlString){
      this.props.getCourse(courseId);
    }   
  }

  // onLessonClick(e) {
  //   const lessonId = e.target.getAttribute('href').replace('#','')
  // }

  render() {
    let videoUrl = '';
    let courseRole = '';
    let watchedLessons= this.props.auth.user.user.watchedLessons;
    let course = this.props.courses.selectedCourse;

    if(!course || !this.props.match.params){
     return  <Spinner />
      return (
        <div>Course Not Found</div>
      )
    }

    courseRole = getCourseRole(this.props.auth.user.user, course);

    if(this.props.lessons.selectedLesson){
       videoUrl = this.props.lessons.selectedLesson.videoUrl;
    } 



    return (
    
      <section className="course-description-section">
        <div className="container">
          <button onClick={this.props.history.goBack} className="btn btn-light">
              Go Back
          </button>
        
          <CourseVideoPreview 
            videoUrl={videoUrl} 
            course={course}
            watchedLessons={watchedLessons} 
            courseRole={courseRole}
            purchaseCourse={(e) => this.props.purchaseCourse(course._id)}
          />

          <CourseData 
            watchedLessons={watchedLessons}  
            course={course} 
            user={this.props.auth.user}
          />

          <CourseLessonList  
            watchedLessons={watchedLessons} 
            lessons={course.lessons}
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
  courses: PropTypes.object.isRequired  
}

const mapStateToProps = (state) => ({
  courses: state.courses,
  auth: state.auth,
  lessons: state.lessons
});


export default connect(mapStateToProps, { getCourse, purchaseCourse })(withRouter(CourseView));