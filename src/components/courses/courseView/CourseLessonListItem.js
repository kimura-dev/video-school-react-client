import React from 'react'
import { Link } from 'react-router-dom';

export default function CourseLessonListItem(props) {
  const {lesson, courseRole} = props;

  if(courseRole === 'author') {
    return (
        <li className="bd-highlight bg-success shadow p-3 mb-3 rounded course-list-item" >{lesson.title}
          <button 
              onClick={props.onDeleteLesson}
              className="btn btn-danger m-2">
              Delete
          </button>
          <Link to={`/edit-lesson/${lesson.id}`} className="btn btn-success">
            Edit
          </Link>
        </li>
      )
  }

  if(courseRole === 'student'){
    return (
      <li className="bd-highlight bg-success shadow p-3 mb-3 rounded course-list-item">
        <Link to={`/lesson/${lesson._id}`} onClick={this.props.onLessonClick}>
          {lesson.title}
        </Link>
        {/* <a href={`#${lesson._id}`} onClick={this.props.onLessonClick} >
          {lesson.title}
        </a> */}
      </li>
    )
  }

  // default view
  return (
    <li className="mb-2 p-4 bd-highlight bg-success course-list-item">
      {lesson.title}
      {/* truncate function todo */}
    </li>
  )
  
}

