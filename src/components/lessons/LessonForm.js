import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createLesson } from '../../actions/lessonActions';
import TextFieldGroup  from '../common/TextFieldGroup';
import TextAreaFieldGroup  from '../common/TextAreaFieldGroup';

class LessonForm extends Component {
  constructor(props) {
    super();
    this.state = {
      title: '',
      description: '',
      videoUrl: '',
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
    const newLesson = {
      title: this.state.title,
      description: this.state.description,
      videoUrl: this.state.videoUrl
    }
    // this.props.history allows you to redirect from an action, this is used with "withRouter"
    this.props.createLesson(newLesson, this.props.history);
  }


  render() {
    // const { errors } = this.state.errors; 

    return (
      <div className="lesson-form">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create A Lesson</h1>
              {/* <p className="lead text-center">Supply course details below</p> */}
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
                  placeholder="Video Url"
                  name='videoUrl'
                  type="text"
                  value={this.state.videoUrl}
                  onChange={this.onChange}
                  // error={errors.username}
                />
                <input type="submit" className="btn btn-success btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

LessonForm.propTypes = {
  createLesson: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { createLesson })(withRouter(LessonForm));