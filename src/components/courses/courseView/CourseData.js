import React from 'react';

// need to know about course and lessons watched
export default function CourseData(props) {
  const {course, watchedLessons} = props;

  return (
    <section className="course-data-section">
       <div class="container">
         <div class="mb-3">
           <h2>{course.title}</h2>
           <p>{course.description}</p>      
           <p>{course.username}</p>
           <p>{course.date}</p>
           <p>{course.timesPurchased}</p>     
           {/* <p>Course Progress Bar</p>  */}
         </div>
       </div>
     </section>
  )
}


