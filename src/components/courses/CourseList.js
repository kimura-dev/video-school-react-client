import React, {Component} from 'react';
import CourseListItem from './CourseListItem';

class CourseList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      courses: [{
        username: 'Charles',
        title: 'Test',
        description: 'new test',
        price: 5
      }]
    }
  }
  render() {
    const CourseListItems = this.state.courses.map((course) => (
      <CourseListItem  {...course} />
    ))

    return (
      <div className="course-preview-section" >
      <ul>
        { CourseListItems }
      </ul>
    </div>
    );
  }
}

export default CourseList;