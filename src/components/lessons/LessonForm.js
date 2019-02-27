import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addCourseLesson, updateNewLesson } from '../../actions/courseLessonActions';
import TextFieldGroup  from '../common/TextFieldGroup';
import TextAreaFieldGroup  from '../common/TextAreaFieldGroup';

class LessonForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({errors:nextProps.errors})
    }
  }

  onChange(e) {
    this.props.updateNewLesson({[e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();
    const newLesson = {
      title: this.props.newLesson.title,
      description: this.props.newLesson.description,
      videoUrl: this.props.newLesson.videoUrl
    } 
    this.props.addCourseLesson(newLesson, this.props.history);
  }

  render() {

    return (
      <div className="lesson-form">
        <div className="container">
          <button onClick={this.props.history.goBack} className="btn btn-light">
              Go Back
          </button>
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Create A Lesson</h1>
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup 
                  placeholder="Title"
                  name='title'
                  type="text"
                  value={this.props.newLesson.title}
                  onChange={this.onChange}
                />
                <TextAreaFieldGroup 
                  placeholder="Description"
                  name='description'
                  type="text"
                  value={this.props.newLesson.description}
                  onChange={this.onChange}
                />
                <TextFieldGroup 
                  placeholder="Video Url"
                  name='videoUrl'
                  type="text"
                  value={this.props.newLesson.videoUrl}
                  onChange={this.onChange}
                />
                <input type="submit" className="btn btn-success btn-block mt-4 mb-4 p-3" />
              </form>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

LessonForm.propTypes = {
  addCourseLesson: PropTypes.func.isRequired,
  updateNewLesson: PropTypes.func.isRequired,
  newLesson: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  newLesson: state.courses.newLesson,
  selectedCourse: state.courses.selectedCourse
});

export default connect(mapStateToProps, { addCourseLesson, updateNewLesson })(withRouter(LessonForm));