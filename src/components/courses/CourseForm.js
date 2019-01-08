import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { createCourse, updateNewCourse } from '../../actions/courseActions';
import TextFieldGroup  from '../common/TextFieldGroup';
import TextAreaFieldGroup  from '../common/TextAreaFieldGroup';
import CourseLessonList from './courseView/CourseLessonList';
import './CourseForm.css';
 
class CourseForm extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  // will test for properties
  // If we recieve new props and errors is included
  // componentWillReceiveProps(nextProps) {
  //   if(nextProps.errors) {
  //     this.setState({errors: nextProps.errors})
  //   }
  // }

  onChange(e) {
    this.props.updateNewCourse({[e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();
    const newCourse = {
      title: this.props.newCourse.title,
      description: this.props.newCourse.description,
      price: this.props.newCourse.price,
      lessons: this.props.newCourse.lessons
    }
    this.props.createCourse(newCourse, this.props.history);
  }

  render() {
    const { errors } = this.props; 
    
    return (
      <section className="course-form">
        <div className="container">
          <button onClick={this.props.history.goBack} className="btn btn-light">
              Go Back
          </button>
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center mt-4 mb-4">Create Course</h1>
              {/* <p className="lead text-center">Supply course details below</p> */}
              <form onSubmit={this.onSubmit}> 
                <TextFieldGroup 
                  placeholder="Title"
                  name='title'
                  type="text"
                  value={this.props.newCourse.title}
                  onChange={this.onChange}
                  error={errors.title}
                />
                <TextAreaFieldGroup 
                  placeholder="Description"
                  name='description'
                  type="text"
                  value={this.props.newCourse.description}
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
                    value={this.props.newCourse.price}
                    onChange={this.onChange}
                  />
                  {/* <small className="form-text text-muted">{info}</small> */}
                  {/* <div className="invalid-feedback">{errors}</div> */}
                </div>
                <Link to="/lesson-form" className="btn btn-lg btn-success mt-3 font-weight-bold">
                  Add Lesson
                </Link>
                <CourseLessonList  lessons={this.props.newCourse.lessons} courseRole={'author'}/>
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
  updateNewCourse: PropTypes.func.isRequired,
  newCourse: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  newCourse: state.courses.newCourse,
  errors: state.errors // this.props.errors
});

export default connect(mapStateToProps, { createCourse, updateNewCourse })(withRouter(CourseForm));