import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// import classnames from 'classnames';
import { connect } from 'react-redux';
import { createCourse } from '../../actions/courseActions';
import TextFieldGroup  from '../common/TextFieldGroup';
import TextAreaGroup  from '../common/TextAreaGroup';

class courseForm extends Component {
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

  // will test for properties
  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({errors:nextProps.errors})
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
    this.props.createCourse(newCourse, this.props.history);
  }


  render() {
    // const { errors } = this.state.errors; 

    return (
      <div className="create-course">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create Your Course</h1>
              {/* <p className="lead text-center">Supply course details below</p> */}
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup 
                  placeholder="Course Title"
                  name='title'
                  type="text"
                  value={this.state.title}
                  onChange={this.onChange}
                  // error={errors.username}
                />
                <TextAreaGroup 
                  placeholder="Course Description"
                  name='description'
                  type="text"
                  value={this.state.description}
                  onChange={this.onChange}
                  // error={errors.username}
                />
                <TextFieldGroup 
                  placeholder="Course prcie"
                  name='price'
                  type="text"
                  value={this.state.price}
                  onChange={this.onChange}
                  // error={errors.username}
                />
                <input type="submit" className="btn btn-info btn-block mt-4" />
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
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth, // .auth comes from my root reducer
  errors: state.errors
  //now we can say this.props.auth
});

export default connect(mapStateToProps, { createCourse })(withRouter(courseForm));