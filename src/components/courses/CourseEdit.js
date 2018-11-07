import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
// import classnames from 'classnames';
import { connect } from 'react-redux';
import { getCourse, editCourse } from '../../actions/courseActions';
import TextFieldGroup  from '../common/TextFieldGroup';
import TextAreaFieldGroup  from '../common/TextAreaFieldGroup';
import isEmpty from '../../validation/is-empty';

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
    this.props.getCourse();
  }

  
  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({errors:nextProps.errors})
    }

    // Checking for the current course. Then if there is a course we supply the component with the course info
    if(nextProps.courses.course) {
      const course = nextProps.courses.course;
  
      // If a course field doesnt exist we set to empty string
      course.title = !isEmpty(course.title) ? course.title : '';
      course.description = !isEmpty(course.description) ? course.description : '';
      course.price = !isEmpty(course.price) ? course.price : '';
      course.lessons = !isEmpty(course.lessons) ? course.lessons : [];

      // Set component fields state
      this.setState({
        title: course.title,
        description: course.description,
        price: course.price,
        lessons: course.lessons
      })
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();
    const newCourse = {
      title: this.state.title,
      description: this.state.description,
      price: this.state.price,
      lessons: this.state.lessons
    }
    // this.props.history allows you to redirect from an action, this is used with "withRouter"
    this.props.editCourse(newCourse, this.props.history);
  }


  render() {
    // const { errors } = this.state.errors; 

    return (
      <div className="course-form">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link>
              <h1 className="display-4 text-center">Edit Course</h1>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup 
                  placeholder="Title"
                  name='title'
                  type="text"
                  value={this.state.title}
                  onChange={this.onChange}
                  // error={errors.username}
                />
                <TextAreaFieldGroup 
                  placeholder="Description"
                  name='description'
                  type="text"
                  value={this.state.description}
                  onChange={this.onChange}
                  // error={errors.username}
                />
                <TextFieldGroup 
                  placeholder="Price"
                  name='price'
                  type="text"
                  value={this.state.price}
                  onChange={this.onChange}
                  // error={errors.username}
                />
                <Link to="/lesson-form" className="btn btn-lg btn-success">
                  Add Lesson
                </Link>
                <input type="submit" className="btn btn-success btn-block mt-4" />
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
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth, // .auth comes from my root reducer
  errors: state.errors,
  courses: state.courses
  //now we can say this.props.auth
});

export default connect(mapStateToProps, { editCourse , getCourse })(withRouter(CourseForm));