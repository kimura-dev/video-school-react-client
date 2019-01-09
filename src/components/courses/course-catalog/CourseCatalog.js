import React, { Component } from 'react';
import {Link} from 'react-router-dom';
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
              <p className="catalog-text p-3">Search Video School below for all the latest courses.</p>
              {/* <form className="form-inline mr-auto pb-3">
                <input type="text" className="form-control ml-2 " placeholder="Search for a Course"/>
                <button className="btn btn-outline-success">Search</button>
              </form> */}
            </div>
          </div>

          
        <section className="catalog-course-list">
        <h1 className="course-list-title">Catalog</h1>

        <div className="catalog">  
          <div className="container"> 
            <div className="catalog-course-item-container">
        {
          allCourses.map((course, index) => {
            return (
                    <div className="course-catalog-list-item col-4 mb-3">
                      <div className="inner-list-item">
                        <img className="list-img" src={require('../../../img/course-img.jpg')} alt="course thumbnail"/>
                        {/* <img className="list-img" src="https://source.unsplash.com/random/300x200" alt="course thumbnail"/> */}
                        <h2 className="list-item-title">{course.title}</h2>
                        <input type ='hidden' name ="course_id_hidden"  key={index} />
                        <p className="list-item-description">{truncate(course.description,40)}</p> 
                        <div classname="">
                          <Link to={`/course/${course._id}`} className="btn btn-success course-list-item-btn">
                            View Course »
                          </Link>
                        </div>
                       
                      </div>
                      
                    </div> 
            )
      }, )
        }
          </div>
          </div>
          </div>
        </section>
      </main>
    )
  }
}

const mapStateToProps = (state) => ({
  courses: state.courses
});


export default connect(mapStateToProps)(CourseCatalog);