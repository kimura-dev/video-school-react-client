import React from 'react'
import { Link } from 'react-router-dom';
import { deleteLesson } from '../../../actions/lessonActions';
import './CourseLessonListItem.css'

export default function CourseLessonListItem(props) {
  const {lesson, courseRole, mode} = props;

  let liClasses = "bd-highlight bg-warning shadow p-1 mb-3 rounded text-black lesson-list-item";
  
  if(props.mode === 'menu'){
     liClasses = "lesson-item list-group-item list-group-item-action text-black";
  }

  if(courseRole === 'author') {
    return (
        <li className={liClasses}>{lesson.title}
          <div className="btnBox">
            <button 
                onClick={deleteLesson(lesson._id)}
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
      <Link to={`/lesson/${lesson._id}`}>
        <li className="bd-highlight bg-warning shadow p-4 mb-3 rounded text-black lesson-list-item">
            {lesson.title}
        </li>
      </Link>
    )
  }

  // default view
  return (
    <li className={liClasses}>
      {lesson.title}
    </li>
  )
  
}

