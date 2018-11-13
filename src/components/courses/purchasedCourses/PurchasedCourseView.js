import React from 'react'
import CourseVideoPreview from './CourseVideoPreview';
import CourseData from './CourseData';

export default function PurchasedCourseView() {
  return (
  <section className="course-description-section">
    <div className="container">
      <CourseVideoPreview />
      <CourseData />
      <courseLessons />
    </div>
  </section>

  )
}
