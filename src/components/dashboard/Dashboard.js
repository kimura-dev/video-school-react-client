import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setCurrentCourse } from '../../actions/courseActions';
import Spinner from '../common/Spinner';
import DashCoursePreviewList from './DashCoursePreviewList';
import './Dashboard.css';

class Dashboard extends Component {

  componentWillMount(){
    
    this.props.setCurrentCourse(null);
  }

  render() {
    const user  = this.props.auth.user;
    const { authoredCourses, purchasedCourses } = this.props.courses;
    
    return (
      <div className="Dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 id="dashboard-header" className="display-4">Dashboard</h1>
              <Link to="/course-form" className="btn btn-success mr-2 font-weight-bold">
                Create New Course
              </Link>
              <h2>Welcome {user.user.username}</h2>
              <Spinner />
              <DashCoursePreviewList  courseRole='teacher' courses={authoredCourses}/>
              <DashCoursePreviewList  courseRole='student'  courses={purchasedCourses} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  setCurrentCourse: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  courses: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth, // .auth comes from my root reducer
  courses: state.courses,
  errors: state.errors
});

export default connect(mapStateToProps, { setCurrentCourse })(
  Dashboard
);