import React from 'react';
import { Link } from 'react-router-dom';

const DashCourseControls = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-course" className="btn btn-light">
        <i className="fas fa-user-circle text-info mr-1" /> Edit Course
      </Link>
      <Link to="/delete-course" className="btn btn-light">
        <i className="fab fa-black-tie text-info mr-1" />
        Delete Course
      </Link>
      {/* <Link to="" className="btn btn-light">
        <i className="fas fa-graduation-cap text-info mr-1" />
        Delete Course
      </Link> */}
    </div>
  );
};

export default DashCourseControls;
