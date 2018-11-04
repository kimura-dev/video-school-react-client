import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getAuthoredCourses } from '../../actions/courseActions';
import { getPurchasedCourses } from '../../actions/courseActions';
import Spinner from '../common/Spinner';
import CourseDashActions from './courseDashActions';

class Dashboard extends Component {

  componentDidMount() {
    this.props.getAuthoredCourses();
    // TODO: Want to mount purchased courses as well
  }

  render() {
    // const { errors } = this.state.errors; 
    const { user } = this.props.auth;
    const { authoredCourses, loading } = this.props.courses;

    let dashboardContent;

    if(authoredCourses === null || loading) {
      // dashboardContent = <Spinner />;
      dashboardContent = <div>Loading...</div>;

    } else {
      // Check if logged in user has courses data
      if(Object.keys(authoredCourses).length > 0) {
        dashboardContent = (
          <div>
            <h2>Welcome {user.username}</h2>
            <CourseDashActions />
          </div>
        );
      } else {
        // User is logged in but has no courses
        dashboardContent = (
          <div>
            <p className="lead text-muted">Welcome {user.name}</p>
            <p>You have not yet purchased or created any courses.</p>
            <Link to="/" className="btn btn-lg btn-info">
              Create A Course
            </Link>
            <Link to="/purchase/token" className="btn btn-lg btn-info">
              Purchase A Course
            </Link>
          </div>
        );
      }
    }

    return (
      <div className="dashboard">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4">Dashboard</h1>
              {dashboardContent}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

// Set all properties on this component here.
Dashboard.propTypes = {
  getAuthoredCourses: PropTypes.func.isRequired,
  getPurchasedCourses: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, { getAuthoredCourses, getPurchasedCourses })(
  Dashboard
);