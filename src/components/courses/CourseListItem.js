import React from 'react';
import { Link } from 'react-router-dom';

 export default function CourseListItem(props) {
  const { course, courseRole } = props;
  
  if(courseRole === 'teacher'){
   return <li className="bd-highlight bg-dark shadow p-2 mb-3 rounded text-white course-list-item">
      <h3 className="mb-3 text-white">{course.title}</h3>
      <div className="float-right">
        <Link to={`/course/${course._id}`} className="btn btn-md btn-success display-inline m-2">
          VIEW
        </Link>
        <Link to={`/edit-course/${course._id}`} className="btn btn-md btn-info">
          EDIT
        </Link>
      </div>
  
  </li>
  }
  return (
    <li className="bd-highlight bg-warning shadow p-2 mb-3 rounded course-list-item">
      <h3 className="">{course.title}</h3>
      <Link to={`/course/${course._id}`} className="btn btn-md btn-success ml-5 float-right">
        VIEW
      </Link>
    </li>
  )


}