import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './CourseCatalog.css';


 class CourseCatalog extends Component {
   
  render() {
    const allCourses = this.props.courses.allCourses;

    return (
      <main class="course-catalog-section"> 
 
        <img class="course-catalog-img" src="img/course-catalog-img.jpg"/>
        <div class="ui placeholder segment">
          <div class="catalog-search-box">
            <h1 class="display-3">Hello, world!</h1>
            <p>This is a template for video school. It includes a large callout called a jumbotron and three supporting pieces of content. Use it as a starting point to create something more unique.</p>
          
            <form class="form-inline mr-auto">
              <input type="text" class="form-control mr-2" placeholder="Search for a Course"/>
              <button class="btn btn-outline-success">Search</button>
          </form>
        </div>

        </div>
        <section class="catalog-course-list">
        <div class="course-container">  
        {
          allCourses.map(course => {
            return (
                    <div class="course-list-item">
                      <h2>{course.title}</h2>
                        <img class="list-img" src="../../img/default-img.jpg" />
                      <p>{course.description}</p> 
                      <Link to={`/course/${course._id}`} className="btn btn-success">
                        View Course »
                      </Link>
                    </div> 
            )
        console.log(course)
      }, )
        }
          </div>
        </section>
      </main>
    )
  }
}

// CourseCatalog.propTypes = {

// }

const mapStateToProps = (state) => ({
  courses: state.courses
});


export default connect(mapStateToProps)(CourseCatalog);