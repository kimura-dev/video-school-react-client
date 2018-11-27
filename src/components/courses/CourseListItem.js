import React from 'react';
import { Link } from 'react-router-dom';


export default function CourseListItem(props) {
  const {course, courseRole} = props;
  // View of courses on Dashboard on initial loggin in of the user
  // Possible Todo: Would like to write a conditional that changes the background color depending on authored or purchased course
  if(courseRole === 'teacher'){
   return <li className="bd-highlight bg-info shadow p-3 mb-3 rounded text-white course-list-item">{course.title}
    <Link to={`/course/${course._id}`} className="btn btn-lg btn-success ml-5 float-right">
      View
    </Link>
    <Link to={`/edit-course/${course._id}`} className="btn btn-success">
      Edit
    </Link>
  </li>
  }
  return (
    <li className="bd-highlight bg-warning shadow p-3 mb-3 rounded course-list-item">{course.title}
      <Link to={`/course/${course._id}`} className="btn btn-lg btn-success ml-5 float-right">
        View
      </Link>
    </li>
  )


}