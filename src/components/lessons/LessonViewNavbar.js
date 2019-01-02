import React from 'react';
import { Link } from 'react-router-dom';
import './LessonViewNavbar.css';

export default function LessonViewNavbar(props) {
  return (
    <div className="LessonViewNavbar bg-info">
      <button onClick={props.toggleMenu} className="openBtn">
        <i className="fa-list"></i>
      </button>
      <Link to='/dashboard' className="dashBtn text-light mr-4">Go to Dashboard</Link> 
    </div>
  )
}
