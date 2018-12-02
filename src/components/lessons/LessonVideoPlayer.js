import React from 'react';
import './LessonVideoPlayer.css';

export default function LessonVideoPlayer(props) {
  const {videoUrl} = props;

  return (
    // <div id="LessonVideoPlayer">
    //   <div class="col-md-12 m-auto">
    //     <div class="embed-responsive embed-responsive-21by9">
    //       <iframe class="embed-responsive-item" src={videoUrl} allowfullscreen></iframe>
    //     </div>
    //   </div>
    // </div>

    <div class="resp-container">
      <iframe class="resp-iframe" src={videoUrl} gesture="media"  allow="encrypted-media" allowfullscreen></iframe>
    </div>
  )
}

{/* <iframe width="956" height="538" src="https://www.youtube.com/embed/DYu-D4B69Bs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
