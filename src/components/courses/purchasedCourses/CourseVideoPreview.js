import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { coursePreviewUrl } from '../../../actions/courseActions';

class CourseVideoPreview extends Component {
  render() {
    return (
      <div className="preview-video-section">
        <div className="row">
          <div className="col">
            <a href="#" class="video" data-video="http://www.youtube.com/embbed/{favideoID}">
              <i class="fas fa-play"></i>
              <p>Continue where you left off on course.title!</p>
              <p>Begin watching course.title now!</p>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

CourseVideoPreview.propTypes = {
  coursePreviewUrl: PropTypes.func.isRequired,
  courses: PropTypes.object.isRequired  
}

const mapStateToProps = (state) => ({
  course: state.courses
});


export default connect(mapStateToProps, { coursePreviewUrl })(withRouter(CourseVideoPreview));