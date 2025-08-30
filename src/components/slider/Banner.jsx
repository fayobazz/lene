import React from 'react';
import styles from './Banner.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.slider} style={{ '--quantity': 10 }}>
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className={styles.item}
            style={{ '--position': index + 1 }}
          >
            <img src={`/images/dragon_${index + 1}.png`} alt={`Dragon ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <h1 data-content="LOGO DESIGNS">LOGO DESIGNS</h1>
        <div className={styles.author}>
          <h2>Some of the logos we designed for our clients</h2>
          <p><b>Having a beautiful logo means</b></p>
          <p>Your customers associate your company with quality. </p>
        </div>
        <div className={styles.model}></div>
      </div>
    </div>
  );
};

export default Banner;