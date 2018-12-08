import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { deleteCourse } from '../../actions/courseActions'


//  class CourseListItem extends Component {
//   render() {
//     return (
//       <div>
        
//       </div>
//     )
//   }
// }

 export default function CourseListItem(props) {
  const { course, courseRole } = props;
  // View of courses on Dashboard on initial loggin in of the user
  // Possible Todo: Would like to write a conditional that changes the background color depending on authored or purchased course
  if(courseRole === 'teacher'){
   return <li className="bd-highlight bg-dark shadow p-2 mb-3 rounded text-white course-list-item">
      <h3 className="mb-3 text-white">{course.title}</h3>
    <div className="float-right">
      <Link to={`/course/${course._id}`} className="btn btn-md btn-success display-inline m-2">
        VIEW
      </Link>
      <Link to={`/edit-course/${course._id}`} className="btn btn-md btn-info">
        EDIT
      </Link>
      {/* <Link to={`/course/${course._id}`} className="btn btn-md btn-danger m-2">
        DELETE
      </Link> */}
      <button className="btn btn-md btn-danger m-2">DELETE</button>
    </div>
  
  </li>
  }
  return (
    <li className="bd-highlight bg-warning shadow p-2 mb-3 rounded course-list-item">
      <h3 className="">{course.title}</h3>
      <Link to={`/course/${course._id}`} className="btn btn-md btn-success ml-5 float-right">
        VIEW
      </Link>
    </li>
  )


}

// CourseListItem.propTypes = {
//   deleteCourse: PropTypes.func.isRequired,
//   courses: PropTypes.object.isRequired
// }

// const mapStateToProps = (state) => ({

//   courses: state.courses
// });

// export default connect(mapStateToProps, { deleteCourse })(CourseListItem)