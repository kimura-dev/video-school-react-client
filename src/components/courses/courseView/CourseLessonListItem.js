import React from 'react'
import { Link } from 'react-router-dom';
import './CourseLessonListItem.css'

export default function CourseLessonListItem(props) {
  const {lesson, courseRole, mode} = props;
  let liClasses = "bd-highlight bg-warning shadow p-2 mb-3 rounded text-white lesson-list-item";
  if(props.mode === 'menu'){
    liClasses = "lesson-item list-group-item list-group-item-action";
  }

  if(courseRole === 'author') {
    return (
        <li className={liClasses} >{lesson.title}
          <div className="btnBox">
            <button 
                onClick={props.onDeleteLesson}
                className="btn btn-danger m-2">
                Delete
            </button>
            <Link to={`/edit-lesson/${lesson._id}`} className="btn btn-success m-2">
              Edit
            </Link>
          </div>
        </li>
      )
  }

  if(courseRole === 'student'){
    return (
      <li className={liClasses}>
        <Link to={`/lesson/${lesson._id}`} onClick={props.onLessonClick}>
          {lesson.title}
        </Link>
      </li>
    )
  }

  // default view
  return (
    <li className={liClasses}>
      {lesson.title}
      {/* truncate function todo */}
    </li>
  )
  
}

