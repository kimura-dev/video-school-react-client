import React from 'react';
import './CourseData.css';
import friendlyDate from '../../common/friendlyDate';
// need to know about course and lessons watched

export default function CourseData(props) {
  const {course, watchedLessons, user} = props;
 
  let author = course.username;
  let currentUser = user.user.username;
  let student = user.user.courses.includes(course._id);
  let priceDisplay = course.price;
  let authorFullName = '';
  
  if( currentUser === author ){
    priceDisplay = <p className="lead text-primary">Current Price: ${priceDisplay}</p>;
  } else if( student ) {
    priceDisplay = '';
  } else {
    priceDisplay = <p className="lead text-primary">Price: ${priceDisplay}</p>;
  }



  if(!course.user.firstName || !course.user.lastName){
    authorFullName = author;
  } else if (course.user.firstName && course.user.lastName){
    authorFullName = (course.user.firstName +' '+ course.user.lastName)
  }
  
  return (
    
    <section className="course-data-section">
       <div className="container">
         <div className="mb-5 text-white">
           <h2 className="mt-3 text-dark font-weight-bold">{course.title}: Course Overview</h2>
           {priceDisplay}
           <p className="lead text-dark">{course.description}</p>
           <div className="lead course-data">
            {/* <p className="">Authored by {course.user.firstName} {course.user.lastName}</p> */}
            <p className="">Authored by {authorFullName}</p>
            <p className="">Created On: {friendlyDate(course.date)}</p>
            <p className="">This course was purchased {course.timesPurchased} times</p>     
           </div>      
           {/* <p>Course Progress Bar</p>  */}
         </div>
       </div>
     </section>
  )
}


