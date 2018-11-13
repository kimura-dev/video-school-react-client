import React from 'react'
import { Link } from 'react-router-dom';

export default function CourseLessonListItem(props) {
  const {lesson} = props;

  return (
    <li className="p-2 bd-highlight bg-info" >{lesson.title}
      <button 
          onClick={props.onDeleteLesson}
          className="btn btn-danger m-2">
          Delete
      </button>
      <Link to="/edit-lesson" className="btn btn-success">
        Edit
      </Link>
    </li>
    // <tr>
    //      <td>{lesson.title}</td>
    //  </tr>
    // <tr className="course-lesson">
    //     <td>{lesson.title}</td>
    //     <td>{lesson.description}</td>
        
    //     <td>
    //       <button
    //         onClick={props.onDeleteLesson}
    //         className="btn btn-danger"
    //       >
    //         Delete
    //       </button>
    //     </td>
    //     <td>
    //       <button
    //         onClick={props.onDeleteLesson}
    //         className="btn btn-success"
    //       >
    //         Edit
    //       </button>
    //     </td>
    //   </tr>
    // <table>
    //   <tbody>
    //     <tr>
    //       <td>{lesson.title}</td>
    //     </tr>
    //   </tbody>
    // </table>
  )
}
