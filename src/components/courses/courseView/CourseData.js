import React from 'react';

// need to know about course and lessons watched
export default function CourseData(props) {
  const {course, watchedLessons} = props;

  return (
    <section className="course-data-section">
       <div class="container">
         <div class="mb-5">
           <h2 className="mt-3">Course Details</h2>
           <p>{course.description}</p>      
           <p>Authored by {course.username}</p>
           <p>Created On: {course.date}</p>
           <p>This course was purchased {course.timesPurchased} times</p>     
           {/* <p>Course Progress Bar</p>  */}
         </div>
       </div>
     </section>
  )
}


