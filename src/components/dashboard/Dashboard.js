import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../common/Spinner';
import DashCoursePreviewList from './DashCoursePreviewList';

class Dashboard extends Component {

  render() {
    // const { errors } = this.state.errors; 
    const { user } = this.props.auth;

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              <Link to="/course-form" className="btn btn-lg btn-success mr-2">
                Create A Course
              </Link>
              <h2>Welcome {user.user.username}</h2>
              <DashCoursePreviewList  courseRole='teacher'/>
              <DashCoursePreviewList  courseRole='student'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Set all properties on this component here.
Dashboard.propTypes = {
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  courses: PropTypes.object.isRequired
}

// this.props.auth.user, etc
// this.props.courses.authoredCourses
const mapStateToProps = (state) => ({
  auth: state.auth, // .auth comes from my root reducer
  courses: state.courses,
  errors: state.errors
  //now we can say this.props.auth
});

export default connect(mapStateToProps, {})(
  Dashboard
);