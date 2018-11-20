import React from 'react';

// need to know about course and lessons watched
export default function CourseData(props) {
  const {course, watchedLessons} = props;

  return (
    <section className="course-data-section">
       <div class="container">
         <div class="mb-3">
           <h2></h2>
           <p>This will be the entire description of the course.</p>      
           <p>Author</p>
           <p>Course Creation Date</p>
           <p>This course has been purchased timesPurchased times</p>     
           {/* <p>Course Progress Bar</p>  */}
         </div>
       </div>
     </section>
  )
}


