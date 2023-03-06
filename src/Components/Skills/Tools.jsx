import React from 'react';
import { Heading } from '../Heading/Heading';
import styles from './Tech.module.css';

const Tools = () => {
  return (
    <div className={styles.tech}>
      <div className={styles.tech__content}>
        <Heading>Tools</Heading>
        <div className={styles.tech__techSkills}>
          <div className={styles.tech__skill}>
            <img src='./icons/visual-studio-code-1.svg' alt='icons' />
            <p>VS Code</p>
          </div>
          <div className={styles.tech__skill}>
            <img src='./icons/postman.svg' alt='icons' />
            <p>Postman</p>
          </div>
          <div className={styles.tech__skill}>
            <img src='./icons/netlify.svg' alt='icons' />
            <p>Netlify</p>
          </div>
          <div className={styles.tech__skill}>
            <img src='./icons/figma-1.svg' alt='icons' />
            <p>Figma</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Tools };
