import React from 'react';
import ReactPlayer from 'react-player';
import styles from './Web.module.css';

const videoSources = [
  '/websites/PAX3D.mp4',
  '/websites/zsh.mp4',
  '/websites/EDSA.mp4',
  '/websites/beza.mp4',
  '/websites/cono.mp4',
  '/websites/ed.mp4',
];

const VideoSlider = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.slider} style={{ '--quantity': videoSources.length, 'animation-duration': '60s' }}>
        {videoSources.map((src, index) => (
          <div key={index} className={styles.item} style={{ '--position': index + 1, 'width': '300px', 'height': '400px' }}>
            <ReactPlayer
              url={src}
              width="100%"
              height="100%"
              playing
              loop
              muted
            />
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <h1 data-content="WEBSITES">WEBSITES</h1>
        <div className={styles.author}>
          <h2>Website Development</h2>
          <p><b>Your Website</b></p>
          <p>is how you present your company to the world in this digital world.</p>
        </div>
        <div className={styles.model}></div>
      </div>
    </div>
  );
};

export default VideoSlider;
