import React, { Component } from 'react'
import CourseLessonListItem from './CourseLessonListItem';

class CourseLessonList extends Component {
  render() {
    const lessons = this.props.lessons.map((lesson, index) => {  
    
    let watchedLessons = this.props.watchedLessons || [];
    
    let watchedLesson = watchedLessons.includes(lesson._id);
    
    return   (  
     <CourseLessonListItem  
       watchedLesson={watchedLesson} 
       lesson={lesson} 
       key={index} 
       {...this.props} />
    )
  });

  // Need to bring in setCurrentLesson ?? 

    return (
      <div className="CourseLessonItem">
        <h3>Lessons</h3>
        <ul className="d-flex flex-column bd-highlight mb-3">
          {lessons}
        </ul>
      </div> 
    )
  }
}

export default CourseLessonList;