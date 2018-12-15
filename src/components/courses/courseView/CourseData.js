import React from 'react';
import './CourseData.css';

// need to know about course and lessons watched
export default function CourseData(props) {
  const {course, watchedLessons} = props;

  return (
    <section className="course-data-section">
       <div class="container">
         <div class="mb-5 text-white">
           <h2 className="mt-3 text-dark font-weight-bold">Course Details</h2>
           <p className="lead text-dark">{course.description}</p>
           <div className="lead course-data">
            <p className="">Authored by {course.username}</p>
            <p className="">Created On: {course.date}</p>
            <p className="">This course was purchased {course.timesPurchased} times</p>     
           </div>      
           {/* <p>Course Progress Bar</p>  */}
         </div>
       </div>
     </section>
  )
}


