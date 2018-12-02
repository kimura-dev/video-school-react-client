import React from 'react'

export default function CourseProgressBar() {
  return (
    <div class="progress">
      <div class="progress-bar bg-warning" role="progressbar" aria-valuenow="70"
      aria-valuemin="0" aria-valuemax="100">
        10%
      </div>
    </div>
  )
}
