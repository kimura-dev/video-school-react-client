import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Landing.css';


class Landing extends Component {

  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
      this.props.history.push('/dashboard')
    }
  }

  render() {
    return (
        <div className="landing">
          <div className="dark-overlay landing-inner text-light">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  <h1 className="display-3 mt-5 mb-4 text-uppercase font-weight-bold">Video School</h1>
                  <p className="lead">Welcome, Video School is a place  where teachers and students can exchange they're knowledge by creating, disturbuting and viewing one anothers online video courses. You can create a course for distrubution or purchase a course for your own viewing purposes. Whether your on a quest for knowledge or you seek to spread it, Video School, is the online video tutorial site for you!</p>
                  {/* <p className="lead">Create or Purchase a course to begin Video School. Start your online video teaching and learning today.</p> */}
                  <hr />
                  <Link to="/register" className="btn btn-lg btn-success mr-2">Sign Up</Link>
                  <Link to="/login" className="btn btn-lg btn-light">Login</Link>
                  <Link to="/demo" className="btn btn-lg btn-light demo-btn">Demo</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

Landing.propTypes = {
  auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Landing);