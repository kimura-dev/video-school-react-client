import React from 'react';
import './CourseData.css';

// need to know about course and lessons watched
export default function CourseData(props) {
  const {course, watchedLessons, user} = props;
 
  return (
    <section className="course-data-section">
       <div class="container">
         <div class="mb-5 text-white">
           <h2 className="mt-3 text-dark font-weight-bold">{course.title} Course Overview</h2>
           <p className="lead text-primary">Price: ${course.price}</p>
           <p className="lead text-dark">{course.description}</p>
           <div className="lead course-data">
            <p className="">Authored by {user.user.firstName} {user.user.lastName}</p>
            <p className="">Created On: {course.date}</p>
            <p className="">This course was purchased {course.timesPurchased} times</p>     
           </div>      
           {/* <p>Course Progress Bar</p>  */}
         </div>
       </div>
     </section>
  )
}


