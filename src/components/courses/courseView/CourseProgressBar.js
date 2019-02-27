import React from 'react'


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
