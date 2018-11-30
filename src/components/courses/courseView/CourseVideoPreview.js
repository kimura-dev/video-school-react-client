import React from 'react';
import { Link } from 'react-router-dom';
import './CourseVideoPreview.css';



function isLessonIdNotInWatchedLessons(lesson_id, watchedLessons){
  if(watchedLessons && watchedLessons.includes instanceof Function){
    //this returns the lesson id's not included in the watchedLesson array
    return !watchedLessons.includes(lesson_id);
  }
  return false;
}

//lesson is objects , watchedLessons is id's
function firstUnwatchedLesson(lessons, watchedLessons){
  return lessons.find(lesson => isLessonIdNotInWatchedLessons(lesson._id, watchedLessons));
}

export default function CourseVideoPreview(props) {

  let previewMessage = '';
  let linkTo;
  let linkText;
  let actionBtn;

  // if(!props.course || !props.course.lessons || !props.course.lessons.length) {
  //    let lessons = props.course
  // }

  if(props.courseRole === 'student'){
    if(!props.course || !props.course.lessons || !props.course.lessons.length){
      previewMessage = 'No lessons to watch';
    }
    else if(!props.watchedLessons || !props.watchedLessons.length) {
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
  } else if(props.courseRole === 'author'){
    linkTo = `/edit-course/${props.course._id}`;
    linkText = 'Edit'
    previewMessage = `Edit ${props.course.title}`;
  } else {
    linkText = 'Purchase';
    previewMessage = `Preview ${props.course.title} below`
  }

  if(linkTo) {
    actionBtn =  <Link 
                  to={linkTo}>
                  <button className="bg-warning mt-3 mb-3 btn-link-txt">
                    {linkText}
                  </button>
                </Link>
  } else if(linkText) {
    actionBtn =  <button onClick={props.purchaseCourse} className="bg-warning mt-3 mb-3 btn-link-txt">
                    {linkText}
                  </button>
  }

  return (
    <div class="card w-50">
      <div class="card-body course-video-preview">
        <h2 class="card-title">{props.course.title}</h2>
        <img className="list-img" src={require('../../../img/course-img.jpg')} />
        {/* <a href="#" className="video" data-video={props.videoUrl}/> */}
        {actionBtn}
        <p class="card-text mb-3">{previewMessage}</p>
        <a href="#" class="btn btn-warning">
          <i class="fas fa-play-circle"></i>
        </a>
      </div>
    </div>
    
  )
}
