import React from 'react';
import { Link } from 'react-router-dom';

export default function LessonViewNavbar(props) {
  return (
    <div>
      <button onclick={props.toggleMenu}>
        BB
      </button>
      <Link to='/dashboard'>Go to Dashboard</Link> 
    </div>
  )
}
