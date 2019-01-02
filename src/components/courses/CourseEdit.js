import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import { connect } from 'react-redux';
// import { Field, reduxForm } from 'redux-form';
import { getCourse, editCourse, setCourseLoaded, selectedCourseFieldChange } from '../../actions/courseActions';
import CourseLessonList from './courseView/CourseLessonList';
import TextFieldGroup  from '../common/TextFieldGroup';
import TextAreaFieldGroup  from '../common/TextAreaFieldGroup';
import isEmpty from '../../validation/is-empty';
import Spinner from '../common/Spinner';


class CourseForm extends Component {
  constructor(props) {
    super();
    this.state = {
      title: '',
      description: '',
      price: '',
      lessons: [],
      errors: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  // When component loads this runs and looks for the current course
  componentDidMount() {
    console.log('Mounting');
    // console.log({selectedCourse: this.props.courses.selectedCourse});

    // Prevent getCourse if we know we are already editing a course
    if(this.props.match.params.id && !this.props.courses.loaded){ 
      this.props.getCourse(this.props.match.params.id);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    // Checking for the current course. Then if there is a course we supply the component with the course info


    if (this.props.courses && this.props.courses.selectedCourse && !this.props.courses.loaded){
        if(!prevProps.selectedCourse || this.props.courses.selectedCourse._id !== prevProps.selectedCourse._id) {
          console.log('Updating');

          this.props.setCourseLoaded(true);

          const course = this.props.courses.selectedCourse;

          if(this.props.courses.selectedCourse._id !== this.state._id){
            console.log('Initializng form editor');
            // If a course field doesnt exist we set to empty string
            course._id = !isEmpty(course._id) ? course._id : '';
            course.title = !isEmpty(course.title) ? course.title : '';
            course.description = !isEmpty(course.description) ? course.description : '';
            course.price = !isEmpty(course.price) ? course.price : '';
            
          }
      
          course.lessons = !isEmpty(course.lessons) ? course.lessons : [];

          // Set component fields state
          this.setState({
            _id: course._id,
            title: course.title,
            description: course.description,
            price: course.price,
            lessons: course.lessons
          })
      }
    }
  }

  onChange(e) {
    this.props.selectedCourseFieldChange(e.target.name, e.target.value);
    // this.setState({ [e.target.name]: e.target.value })
   
  }

  onSubmit(e) {
    e.preventDefault();
    const editCourse = this.props.courses.selectedCourse;
   
    this.props.editCourse(editCourse, this.props.history);
  }


  render() {
    // const { errors } = this.state.errors; 
    // let course = this.props.courses.selectedCourse;

    // if(!course){
    //   return  <Spinner />
    //    return (
    //      <div>Course Not Found</div>
    //    )
    //  }
 

    let state = this.props.courses.selectedCourse;

    if(this.props.courses.loading) {
      return <Spinner />
    } else if(!state) {
      return <div>Course not found...</div>
    }

    return (
      <div className="course-form">
      {/* <Spinner /> */}
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Edit {state.title}</h1>
              <form onSubmit={this.onSubmit}>
                <h3>Title</h3>
                <TextFieldGroup 
                  placeholder="Title"
                  name='title'
                  type="text"
                  value={state.title}
                  onChange={this.onChange}
                  // error={errors.username}
                />
                <h3>Description</h3>
                <TextAreaFieldGroup 
                  placeholder="Description"
                  name='description'
                  type="text"
                  value={state.description}
                  onChange={this.onChange}
                  // error={errors.username}
                />
                 <div className="form-group">
                  <h3>Price</h3>
                    <input
                      type="number"
                      className='form-control form-control-lg'
                      placeholder="0"
                      name="price"
                      value={state.price}
                      onChange={this.onChange}
                    />
                  </div>
                {/* <TextFieldGroup 
                  placeholder="Price"
                  name='price'
                  type="text"
                  value={state.price}
                  onChange={this.onChange}
                  // error={errors.username}
                /> */}
                <Link to="/lesson-form" className="btn btn-lg btn-success">
                  Add Lesson
                </Link>
                <div>
                  <CourseLessonList 
                    lessons={ this.props.courses.selectedCourse ?  this.props.courses.selectedCourse.lessons : [] }
                    courseRole={'author'}
                    />
                </div>
                <input type="submit" className="btn btn-success btn-block mt-4 mb-3 p-3" />
              </form>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

CourseForm.propTypes = {
  editCourse: PropTypes.func.isRequired,
  getCourse: PropTypes.func.isRequired,
  setCourseLoaded: PropTypes.func.isRequired,
  selectedCourseFieldChange: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  courses: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth, // .auth comes from my root reducer
  errors: state.errors,
  courses: state.courses
  //now we can say this.props.auth
});

export default connect(mapStateToProps, { editCourse , getCourse, setCourseLoaded, selectedCourseFieldChange })(withRouter(CourseForm));