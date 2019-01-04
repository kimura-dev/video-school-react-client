import React from 'react';
import './LessonVideoPlayer.css';

export default function LessonVideoPlayer(props) {
  const {videoUrl} = props;

  return (
    <div className="resp-container">
      <iframe className="resp-iframe" src={videoUrl} gesture="media"  allow="encrypted-media" allowFullScreen title="Current Lesson Video"></iframe>
    </div>
  )
}
