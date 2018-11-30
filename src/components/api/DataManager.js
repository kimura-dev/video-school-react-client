import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getAllCourses } from '../../actions/courseActions';
import {refreshUserLogin, refreshUserData} from '../../actions/authActions';

class DataManager extends Component {
  // On App Load
  componentDidMount() {
    this.props.getAllCourses();
    // this.props.refreshUserLogin(this.props.history);
    this.props.refreshUserData(this.props.auth.user.user.username);

  } 

  // componentDidUpdate () {
  //   this.updatedAuthoredCourse();
  //   this.updatedPurchasedCourse();
  // }
  
 

  render(){
    return(
      null
    )
  }

  
}

DataManager.propTypes = {
  getAllCourses: PropTypes.func.isRequired,
  refreshUserLogin: PropTypes.func.isRequired,
  refreshUserData: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  courses : state.courses,
  auth: state.auth
});

// const mapStateToProps = (state) => ({
//   courses : state.courses.allCourses,
//   user: state.auth
// });

export default connect(mapStateToProps, { getAllCourses, refreshUserLogin, refreshUserData })(DataManager);