import React from "react";
import { Heading } from "../Heading/Heading";
import styles from "./Tech.module.css";

const Proficient = () => {
  return (
    <div className={styles.tech}>
      <div className={styles.tech__content}>
        <Heading>Proficiencies</Heading>
        <div className={styles.tech__techSkills}>
          <div className={styles.tech__skill}>
            <img src="./icons/front-end.png" alt="icons" />
            <p>Frontend</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Proficient };
