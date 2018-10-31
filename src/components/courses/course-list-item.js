import React from 'react';


export default function CourseListItem(props) {
  return (
    <li>
      <img src="" alt="course thumbnail"/>
      <hr/>
      <p className="title">{props.title}</p>
      <p className="author">{props.author}</p>
      <p className="price">{props.price}</p>
    </li>
  )


}
