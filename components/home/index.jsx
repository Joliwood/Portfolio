import React from 'react';
import Image from 'next/image';
import GithubLogo from '../svg/githubLogo';
import LinkedinLogo from '../svg/linkedinLogo';
import styles from '../../styles/home.module.scss';

function Home() {
  return (
    <div className={styles.homeArea} id="homeArea">
      <div className={styles.homeDescriptionContainer}>
        <div className={styles.homeDescription}>
          <h1>Guillaume Jolibois</h1>
          <h2>Développeur Full Stack</h2>
          <p>
            Je suis un développeur passionné par les nouvelles technologies, baignant dans ce
            milieu depuis longtemps. Autonome, motivé et adaptable, je suis capatble de manier
            et de m'adapter à votre framework / librairie.
            <br />
            <br />
            J'ai une forte appétence pour le clean
            code, les structures base de données, l'optimisation et enfin l'expérience utilisateur
            UX.
          </p>
          <div className={styles.homeLogosLinks}>
            <a
              href="https://www.linkedin.com/in/guillaume-jolibois-430426119/"
              target="blank"
            >
              <LinkedinLogo />
            </a>
            <a href="https://github.com/Joliwood" target="blank">
              <GithubLogo />
            </a>
          </div>
        </div>
      </div>

      <div className={styles.homeLine} />

      <Image
        src="/images/profilePicture.png"
        width={500}
        height={500}
        alt="profile"
        title="profile"
        className={`${styles.homeProfilePicture} ${styles.unselectable}`}
        priority
      />
    </div>
  );
}

export default Home;
