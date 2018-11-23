import React from 'react';
import { Link } from 'react-router-dom';


export default function CourseListItem(props) {
  const {course, courseRole} = props;
  // View of courses on Dashboard on initial loggin in of the user
  // Possible Todo: Would like to write a conditional that changes the background color depending on authored or purchased course
  if(courseRole === 'teacher'){
   return <li className="mb-2 p-2 bd-highlight bg-info course-list-item">{course.title}
    <Link to={`/course/${course._id}`} className="btn btn-lg btn-success ml-5 float-right">
      View
    </Link>
  </li>
  }
  return (
    <li className="mb-2 p-2 bd-highlight bg-warning course-list-item">{course.title}
      <Link to={`/course/${course._id}`} className="btn btn-lg btn-success ml-5 float-right">
        View
      </Link>
    </li>
  )


}