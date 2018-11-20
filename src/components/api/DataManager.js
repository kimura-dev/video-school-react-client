import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { getAllCourses } from '../../actions/courseActions';

class DataManager extends Component {
  // On App Load
  componentDidMount() {
    console.log('data manager mounted')
    this.props.getAllCourses();
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
  getAllCourses: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  courses : state.courses,
  auth: state.auth
});

// const mapStateToProps = (state) => ({
//   courses : state.courses.allCourses,
//   user: state.auth
// });

export default connect(mapStateToProps, { getAllCourses })(DataManager);