import React from 'react';
import { Link } from 'react-router-dom';
import './LessonViewNavbar.css';

export default function LessonViewNavbar(props) {
  return (
    <div className="LessonViewNavbar bg-info">
      <button onClick={props.toggleMenu} className="openBtn">
        Open
      </button>
      <Link to='/dashboard' classname="dashBtn text-light">Go to Dashboard</Link> 
    </div>
  )
}
