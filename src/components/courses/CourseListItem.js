import React from 'react';
import { Link } from 'react-router-dom';


export default function CourseListItem(props) {
  // console.log(props.courseRole) good
  const {course, courseRole} = props;
  // Student View
  return (
    <li className="p-2 bd-highlight bg-secondary">{course.title}
      <Link to={`/course/${course._id}`} className="btn btn-lg btn-success ml-2">
        View
      </Link>
    </li>
  )


}

 // <li className="p-2 bd-highlight bg-info" >{course.title}</li>