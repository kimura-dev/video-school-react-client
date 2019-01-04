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
       index={index}
       {...this.props} />
    )
  });

  let ulClasses = "d-flex flex-column bd-highlight";

  if(this.props.mode === 'menu'){
    ulClasses += ' list-group'
  }
  
    return (
      <div className="CourseLessonList">
        <h2 className="lesson-item-title mt-3">Lessons</h2>
        <ul className={ulClasses}>
          {lessons}
        </ul>
      </div> 
    )
  }
}

export default CourseLessonList;