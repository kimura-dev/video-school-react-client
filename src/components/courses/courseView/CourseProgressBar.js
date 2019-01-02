import React from 'react'

function determineProgressOnCourse(course, user) {
  // Want to check in the course to see how many lessons total are in the course
  // I need to determine a number amount 0-100 % and make the progress become that percentage
  // Then I need to check the users watchedLessons array 
  // Somehow need to check the watchedLessons array against the lessons in the course

  // return progress;
}

export default function CourseProgressBar(props) {

  const { watchedLessons} = props;

  return (
    <div className="progress">
      <div className="progress-bar bg-warning" role="progressbar" aria-valuenow="70"
      aria-valuemin="0" aria-valuemax="100"> 
      {/* style={`width: ${progress}`} */}

          {watchedLessons}
      </div>
    </div>
  )
}
