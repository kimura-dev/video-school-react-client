import React from 'react';
import { Link } from 'react-router-dom';
import './CourseVideoPreview.css';

function isLessonIdNotInWatchedLessons(lesson_id, watchedLessons){
  if(watchedLessons && watchedLessons.includes instanceof Function){
    return !watchedLessons.includes(lesson_id);
  }
  return false;
}

//lesson is objects , watchedLessons is id's
function firstUnwatchedLesson(lessons, watchedLessons){
  return lessons.find(lesson => isLessonIdNotInWatchedLessons(lesson._id, watchedLessons));
}

export default function CourseVideoPreview(props) {
  // Trying to bring in watchedLessons to give user a different message depending 
  // on wether they have watched lessons on this course or not.

  let previewMessage = '';
  let linkTo;
  let linkText;

  if(props.courseRole === 'student'){
    if(!props.watchedLessons || !props.watchedLessons.length) {
      previewMessage = `Begin watching ${props.course.title} now!`
      linkTo = `/lesson/${props.course.lessons[0]._id}`;
      linkText = 'Watch';
    } else {
      let unwatchedLesson = firstUnwatchedLesson(props.course.lessons, props.watchedLesson );

      if(!unwatchedLesson){
        linkTo = `/lesson/${props.course.lessons[0]._id}`;
        linkText = 'Restart';
        previewMessage = 'Start course over';
      } else {
        linkTo = `/lesson/${unwatchedLesson._id}`;
        linkText = 'Watch'
        previewMessage = `Continue watching ${props.course.title} now!`
      }
    }
  } else if(props.courseRole === 'teacher'){
    linkTo = `/edit-course/${props.course._id}`;
    linkText = 'Edit'
    previewMessage = `Edit ${props.course.title}`;
  } else {
    linkTo = `/${props.course._id}/purchase/:token`;
    linkText = 'Purchase';
    previewMessage = `Preview ${props.course.title} below`
  }

  return (
    <div class="card w-50">
      <div class="card-body">
        <h2 class="card-title">{props.course.title}</h2>
        {/* <a href="#" className="video" data-video={props.videoUrl}/> */}
        <Link 
          to={linkTo}>
          <button className="bg-success p-1">
            {linkText}
          </button>
        </Link>
        <p class="card-text">{previewMessage}</p>
        <a href="#" class="btn btn-primary">
          <i class="fas fa-play-circle"></i>
        </a>
      </div>
    </div>
    
  )
}
