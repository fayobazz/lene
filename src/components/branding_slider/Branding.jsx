import React from 'react';
import styles from './Branding.module.css';

const Branding = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.slider} style={{ '--quantity': 6 }}>
        {[...Array(10)].map((_, index) => (
          <div
            key={index}
            className={styles.item}
            style={{ '--position': index + 1 }}
          >
            <img src={`/branding/dragon_${index + 1}.png`} alt={`Dragon ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className={styles.content}>
        <h1 data-content="BRANDING">BRANDING</h1>
        <div className={styles.author}>
          <h2>Full Branding</h2>
          <p><b>We create</b></p>
          <p>Digital identity for our clients</p>
        </div>
        <div className={styles.model}></div>
      </div>
    </div>
  );
};

export default Branding;