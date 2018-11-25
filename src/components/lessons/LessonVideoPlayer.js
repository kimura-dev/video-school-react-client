import React from 'react'

export default function LessonVideoPlayer(props) {
  const {videoUrl} = props;

  return (
    <div id="LessonVideoPlayer">
      <div class="col-md-12 m-auto">
        <div class="embed-responsive embed-responsive-16by9">
          <iframe class="embed-responsive-item" src={videoUrl} allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}


// import React, { Component } from 'react'
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';

// class LessonVideoPlayer extends Component {
//   render() {
//     return (
//       <div id="LessonVideoPlayer">
//         <div class="col-md-12 m-auto">
//           <div class="embed-responsive embed-responsive-16by9">
//             <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// LessonVideoPlayer.propTypes = {
//   getLesson: PropTypes.func.isRequired,
// }

// const mapStateToProps = (state) => ({
//   lesson: state.lessons.selectedLesson
// });

// export default connect(mapStateToProps)(LessonVideoPlayer);

