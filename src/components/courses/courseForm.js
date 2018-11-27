import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Need withRouter to use history
import { withRouter } from 'react-router-dom';
// import classnames from 'classnames';
import { connect } from 'react-redux';
import { createCourse, updateNewCourse } from '../../actions/courseActions';
import TextFieldGroup  from '../common/TextFieldGroup';
import TextAreaFieldGroup  from '../common/TextAreaFieldGroup';
// import NumberFieldGroup  from '../common/NumberFieldGroup';
import CourseLessonList from './courseView/CourseLessonList';
import './CourseForm.css';

class CourseForm extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

  }

  // will test for properties
  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({errors:nextProps.errors})
    }
  }

  onChange(e) {
    // this.setState({ [e.target.name]: e.target.value })
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
    // this.props.history allows you to redirect from an action, this is used with "withRouter"
    this.props.createCourse(newCourse, this.props.history);
  }


  render() {
    // const { errors } = this.state.errors; 

    return (
      <div className="course-form">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center mt-4 mb-4">Create Your Course</h1>
              {/* <p className="lead text-center">Supply course details below</p> */}
              <form onSubmit={this.onSubmit}> 
                <TextFieldGroup 
                  placeholder="Title"
                  name='title'
                  type="text"
                  value={this.props.newCourse.title}
                  onChange={this.onChange}
                  // error={errors.username}
                />
                <TextAreaFieldGroup 
                  placeholder="Description"
                  name='description'
                  type="text"
                  value={this.props.newCourse.description}
                  onChange={this.onChange}
                  // error={errors.username}
                />
                 <div className="form-group">
                  <input
                    type="number"
                    className='form-control form-control-lg'
                    placeholder="0"
                    name="price"
                    value={this.props.newCourse.price}
                    onChange={this.onChange}
                  />
                  {/* {info && <small className="form-text text-muted">{info}</small>}
                  {error && <div className="invalid-feedback">{error}</div>} */}
                </div>
                {/* <TextFieldGroup 
                  placeholder="Price"
                  name='price'
                  type="number"
                  value={this.props.newCourse.price}
                  onChange={this.onChange}
                  // error={errors.username}
                /> */}
                <Link to="/lesson-form" className="btn btn-lg btn-success mt-3">
                  Add Lesson
                </Link>
                <CourseLessonList  lessons={this.props.newCourse.lessons}/>
                <input type="submit" className="btn btn-success btn-block p-2 mt-5 mb-5" />
              </form>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

CourseForm.propTypes = {
  createCourse: PropTypes.func.isRequired, 
  updateNewCourse: PropTypes.func.isRequired,
  newCourse: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  newCourse: state.courses.newCourse
});

export default connect(mapStateToProps, { createCourse, updateNewCourse })(withRouter(CourseForm));