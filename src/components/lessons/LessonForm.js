import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewCourseLesson, updateNewLesson, addSelectedCourseLesson } from '../../actions/courseLessonActions';
import TextFieldGroup  from '../common/TextFieldGroup';
import TextAreaFieldGroup  from '../common/TextAreaFieldGroup';

class LessonForm extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   title: '',
    //   description: '',
    //   videoUrl: '',
    //   errors: {}
    // };

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
    this.props.updateNewLesson({[e.target.name]: e.target.value })
  }

  onSubmit(e) {
    e.preventDefault();
    const newLesson = {
      // courseId: this.props.newCourse,
      title: this.props.newLesson.title,
      description: this.props.newLesson.description,
      videoUrl: this.props.newLesson.videoUrl
    }

    if(this.props.selectedLesson){
      this.props.addSelectedCourseLesson(newLesson, this.props.history);
    } else {
      this.props.addNewCourseLesson(newLesson, this.props.history);
    }
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
                  value={this.props.newLesson.title}
                  onChange={this.onChange}
                  // error={errors.username}
                />
                <TextAreaFieldGroup 
                  placeholder="Description"
                  name='description'
                  type="text"
                  value={this.props.newLesson.description}
                  onChange={this.onChange}
                  // error={errors.username}
                />
                <TextFieldGroup 
                  placeholder="Video Url"
                  name='videoUrl'
                  type="text"
                  value={this.props.newLesson.videoUrl}
                  onChange={this.onChange}
                  // error={errors.username}
                />
                <input type="submit" className="btn btn-success btn-block mt-4 mb-4 p-2" />
              </form>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

LessonForm.propTypes = {
  addNewCourseLesson: PropTypes.func.isRequired,
  addSelectedCourseLesson: PropTypes.func.isRequired,
  updateNewLesson: PropTypes.func.isRequired,
  newLesson: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  newLesson: state.courses.newLesson
});

export default connect(mapStateToProps, { addNewCourseLesson, updateNewLesson, addSelectedCourseLesson })(withRouter(LessonForm));