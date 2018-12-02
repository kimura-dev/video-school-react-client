import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './CourseCatalog.css';

function truncate(str, no_words) {
  return str.split(" ").splice(0,40).join(" ");
}

 class CourseCatalog extends Component {
   
  render() {
    const allCourses = this.props.courses.allCourses;

    return (
      <main className="course-catalog-section"> 
          <div className="catalog-container">
            <div className="catalog-search-box">
              <h1 className="catalog-title display-3 pt-5">Welcome!</h1>
              {/* <p className="catalog-text p-3">Video School is a place, where teachers and students alike can buy and sell online video courses. Teachers looking to spread their acquired knowledge in an online video format or students who perfer learning through online tutorials can get there needs .   </p> */}
              <p className="catalog-text p-3">Search Video School below for all the latest courses.</p>
              <form className="form-inline mr-auto pb-3">
                <input type="text" className="form-control ml-2 " placeholder="Search for a Course"/>
                <button className="btn btn-outline-success">Search</button>
            </form>
          </div>

        </div>
        <section className="catalog-course-list">
        <h1 className="course-list-title">Catalog</h1>

        <div class="catalog">  
        {
          allCourses.map(course => {
            return (
                    <div className="course-catalog-list-item">
                      <div className="inner-list-item">
                        <h2 className="list-item-title">{course.title}</h2>
                          <img className="list-img" src={require('../../../img/course-img.jpg')} />
                        <p className="list-item-description">{truncate(course.description,40)}</p> 
                        <Link to={`/course/${course._id}`} className="btn btn-success">
                          View Course »
                        </Link>
                      </div>
                      
                    </div> 
            )
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