import React from 'react';
import { Heading } from '../Heading/Heading';
import styles from './Contact.module.css';
import { MdPhone, MdMail, MdLocationOn } from 'react-icons/md';

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contact}>
        <Heading>Contact</Heading>
        <div className={styles.content}>
          <div className={styles.left}>
            <h2>Get in touch</h2>
            <div className={styles.cont}>
              <p>
                <MdMail /> &nbsp; princek172@gmail.com
              </p>
              <p>
                {' '}
                <MdPhone /> &nbsp; +91-9738037886
              </p>
              <p>
                {' '}
                <MdLocationOn /> &nbsp; Ranchi, Jharkhand, India
              </p>
            </div>
            <div className={styles.socialLinks}>
              <a
                href='https://github.com/singhprince03'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='./icons/github-icon-1.svg'
                  alt='github'
                  height='50px'
                />
              </a>
              <a
                href='https://www.linkedin.com/in/singhprince30/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='./icons/linkedin-icon-2.svg'
                  alt='github'
                  height='50px'
                />
              </a>
              <a
                href='https://twitter.com/singh_prince30'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img src='./icons/twitter-6.svg' alt='github' height='50px' />
              </a>
            </div>
          </div>
          <div className={styles.right}>
            <img src='./icons/Contact_us.svg' alt='' height='350px' />
          </div>
        </div>
        <p className={styles.rights}>princesingh@2023</p>
      </div>
    </div>
  );
};

export { Contact };
