import React, { Component } from 'react'
import CourseLessonListItem from './CourseLessonListItem';

class CourseLessonList extends Component {
  render() {

    const lessons = this.props.lessons.map((lesson, index) => {  
    let watchedLessons = this.props.watchedLessons || [];
    let watchedLesson = watchedLessons.includes(lesson._id);
    // let courseRole = watchedLessons.includes(lesson._id);

    
    return   (  
     <CourseLessonListItem  
       watchedLesson={watchedLesson} 
       lesson={lesson} 
       key={index} 
       {...this.props} />
    )
  });

    return (
      <div className="CourseLessonItem">
        <h2 className="lesson-item-title mt-3">Lessons</h2>
        <ul className="d-flex flex-column bd-highlight mb-4">
          {lessons}
        </ul>
      </div> 
    )
  }
}

export default CourseLessonList;