import React from 'react'

export default function CourseVideoPreview(props) {
  return (
    <div className="preview-video-section">
        <div className="row">
          <div className="col">
            <a href="#" class="video" data-video={props.videoUrl}>
              <i class="fas fa-play"></i>
              <p>Continue where you left off on course.title!</p>
              <p>Begin watching course.title now!</p>
            </a>
          </div>
        </div>
      </div>
  )
}
