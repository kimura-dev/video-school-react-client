import React from 'react'
import { Link } from 'react-router-dom';

export default function CourseLessonListItem(props) {
  const {lesson, courseRole} = props;

  if(courseRole === 'author') {
    return (
        <li className="mb-2 p-2 bd-highlight bg-warning course-list-item" >{lesson.title}
          <button 
              onClick={props.onDeleteLesson}
              className="btn btn-danger m-2">
              Delete
          </button>
          <Link to="/edit-lesson" className="btn btn-success">
            Edit
          </Link>
        </li>
      )
  }

  if(courseRole === 'student'){
    return (
      <li className="mb-2 p-2 bd-highlight bg-warning course-list-item">
        <a href={`#${lesson._id}`} onClick={this.props.onLessonClick} >
        {/* on the onclick should I call setCurrentLesson instead */}
          {lesson.title}
        </a>
      </li>
    )
  }

  // default view
  return (
    <li className="mb-2 p-4 bd-highlight bg-warning course-list-item">
      {lesson.title}
      {/* truncate function todo */}
    </li>
  )
  
}

