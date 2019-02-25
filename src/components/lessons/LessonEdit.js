import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { editLesson, setCurrentLesson } from '../../actions/lessonActions';
import { addNewCourseLesson, addSelectedCourseLesson } from '../../actions/courseLessonActions';
import TextFieldGroup  from '../common/TextFieldGroup';
import TextAreaFieldGroup  from '../common/TextAreaFieldGroup';
import Spinner from '../common/Spinner';
import './LessonForm.css';


class LessonForm extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    // Edit New Course Mode
    if(this.props.selectedCourse){
      console.log('selectedCourse')
      let lesson = this.props.selectedCourse.lessons.find((course) => course._id === this.props.match.params.id );
      if(!lesson){
        console.log('seconde if')
        const paramId = this.props.match.params.id;
        const index = parseInt(paramId, 10);
        lesson = this.props.selectedCourse.lessons[index];
      }
      if(lesson){
        console.log('third if')

        this.props.setCurrentLesson(lesson);
      }

    } 
    // Edit a  lesson
    else {
      console.log('selectedCourse')
      let lesson = this.props.newCourse.lessons.find((course) => course._id === this.props.match.params.id );

      if(!lesson){
        lesson = this.props.newCourse.lessons[this.props.match.params.id];
      }
      if(lesson){
        this.props.setCurrentLesson(lesson);
      }
    }
  }

  onChange(e) {
    let newLesson = {
      ...this.props.lessons.selectedLesson
    }
    newLesson[e.target.name] = e.target.value;
    this.props.setCurrentLesson(newLesson);
  }

  onSubmit(e) {
    e.preventDefault();
    const newLesson = this.props.lessons.selectedLesson;

    this.props.editLesson(newLesson, this.props.history);
  }

  render() {
    // const { errors } = this.state.errors; 
    let state = this.props.lessons.selectedLesson;

    if(this.props.lessons.loading) {
      return <Spinner />
    } else if(!state) {
      return <div>Lesson not found...</div>
    }

    return (
      <div className="lesson-form">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              {/* <Link to="/dashboard" className="btn btn-light">
                Go Back
              </Link> */}
              <button onClick={this.props.history.goBack} className="btn btn-light">
                  Go Back
              </button>
              <h1 className="display-4 text-center">Edit Lesson</h1>
              {/* <p className="lead text-center">Supply lesson details below</p> */}
              <form onSubmit={this.onSubmit}>
                <TextFieldGroup 
                  placeholder="Title"
                  name='title'
                  type="text"
                  value={state.title}
                  onChange={this.onChange}
                />
                <TextAreaFieldGroup 
                  placeholder="Description"
                  name='description'
                  type="text"
                  value={state.description}
                  onChange={this.onChange}
                />
                <TextFieldGroup 
                  placeholder="Video Url"
                  name='videoUrl'
                  type="text"
                  value={state.videoUrl}
                  onChange={this.onChange}
                />
                <button type="submit" className="btn btn-success btn-block mt-4 mb-3 p-3">Submit</button>
              </form>
            </div>
          </div>
        </div>
    </div>
    )
  }
}

LessonForm.propTypes = {
  editLesson: PropTypes.func.isRequired,
  setCurrentLesson: PropTypes.func.isRequired,
  addSelectedCourseLesson: PropTypes.func.isRequired,
  addNewCourseLesson: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  lessons: state.lessons,
  selectedCourse : state.courses.selectedCourse,
  newCourse : state.courses.newCourse,
  errors: state.errors
});

export default connect(mapStateToProps, { editLesson, setCurrentLesson, addSelectedCourseLesson, addNewCourseLesson })(withRouter(LessonForm));