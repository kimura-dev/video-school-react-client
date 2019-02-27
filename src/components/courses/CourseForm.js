import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCourse, updateSelectedCourse, setCurrentCourse } from '../../actions/courseActions';
import TextFieldGroup  from '../common/TextFieldGroup';
import TextAreaFieldGroup  from '../common/TextAreaFieldGroup';
import CourseLessonList from './courseView/CourseLessonList';
import Spinner from '../common/Spinner';
import './CourseForm.css';
 
class CourseForm extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  componentWillMount(){
    if(!this.props.selectedCourse){
      this.props.setCurrentCourse({
        lessons: []
      });
    }
  }

  onChange(e) {
    this.props.updateSelectedCourse({[e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();
    const selectedCourse = {
      title: this.props.selectedCourse.title,
      description: this.props.selectedCourse.description,
      price: this.props.selectedCourse.price,
      lessons: this.props.selectedCourse.lessons
    }
    this.props.createCourse(selectedCourse, this.props.history);
  }

  render() {
    const { errors } = this.props; 

    if(!this.props.selectedCourse) {
      return <Spinner />
    } 
    
    return (
      <section className="course-form">
        <div className="container">
          <button onClick={this.props.history.goBack} className="btn btn-light">
              Go Back
          </button>
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center mt-4 mb-4">Create Course</h1>
              <form onSubmit={this.onSubmit}> 
                <TextFieldGroup 
                  placeholder="Title"
                  name='title'
                  type="text"
                  value={this.props.selectedCourse.title}
                  onChange={this.onChange}
                  error={errors.title}
                />
                <TextAreaFieldGroup 
                  placeholder="Description"
                  name='description'
                  type="text"
                  value={this.props.selectedCourse.description}
                  onChange={this.onChange}
                  error={errors.description}
                />
                 <div className="form-group">
                 <h3>Set Course Price</h3>
                  <input
                    type="number"
                    className='form-control form-control-lg'
                    placeholder="0"
                    name="price"
                    value={this.props.selectedCourse.price}
                    onChange={this.onChange}
                  />
                </div>
                <Link to="/lesson-form" className="btn btn-lg btn-success mt-3 font-weight-bold">
                  Add Lesson
                </Link>
                <CourseLessonList  lessons={this.props.selectedCourse.lessons} courseRole={'author'}/>
                <input type="submit" className="btn btn-success btn-block p-2 mt-5 mb-5 font-weight-bold" />
              </form>
            </div>
          </div>
        </div>
    </section>
    )
  }
}

CourseForm.propTypes = {
  createCourse: PropTypes.func.isRequired, 
  updateSelectedCourse: PropTypes.func.isRequired,
  setCurrentCourse: PropTypes.func.isRequired,
  selectedCourse: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  selectedCourse: state.courses.selectedCourse,
  errors: state.errors 
});

export default connect(mapStateToProps, { createCourse, updateSelectedCourse, setCurrentCourse })(withRouter(CourseForm));