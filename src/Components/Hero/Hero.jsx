import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <div className={styles.left}>
        <h1 className={styles.name}>
          Hi I'm <br /> PRINCE SINGH
        </h1>
        <p className={styles.designation}>FRONT END WEB DEVELOPER 💻</p>
        <p className={styles.shortDesc}>
          An enthusiastic Front End Web Developer with a strong set of technical
          as well as non-technical skills and a dedication towards creating
          useful and interactive web applications.
        </p>
        <a
          href='https://bit.ly/3kyjXS3'
          target='_blank'
          rel='noopener noreferrer'
        >
          <p className={styles.resumeBtn}>Resume</p>
        </a>
      </div>
      <div className={styles.right}>
        <img
          src='./images/psingh.png'
          alt='ProfileImage'
          className={styles.ProfileImage}
        />
      </div>
    </div>
  );
};

export { Hero };
