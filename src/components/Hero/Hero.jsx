import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Peter</h1>
        <p className={styles.description}>
          I'm a front-end Engineer with 3 years of experience using React. I love combining the worlds of logic and creative design to make eye-catching, accessible, and user-friendly websites and applications.</p>


<p className={styles.description}>I'm excited to make the leap and continue refining my skills with the right company
        </p>
        <a href="mailto:engopee@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
