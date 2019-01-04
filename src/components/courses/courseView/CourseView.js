import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCourse } from '../../../actions/courseActions';
import  getCourseRole  from '../../common/getCourseRole';
import { purchaseCourse } from '../../../actions/authActions';
import CourseVideoPreview from './CourseVideoPreview';
import CourseData from './CourseData';
import CourseLessonList from './CourseLessonList';
import Spinner from '../../common/Spinner';
import './CourseView.css';

class CourseView extends Component {
  // constructor(props) {
  //   super(props);
  // }

  componentDidMount() {
    let urlString = this.props.match.params;
    let courseId = this.props.match.params.id;

    if(urlString){
      this.props.getCourse(courseId);
    }   
  }

  render() {
    let videoUrl = '';
    let courseRole = '';
    let watchedLessons= this.props.auth.user.user.watchedLessons;
    let course = this.props.courses.selectedCourse;

    if(this.props.courses.loading) {
      return <Spinner />
    } else if(!course) {
      return <div>Course not found...</div>
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