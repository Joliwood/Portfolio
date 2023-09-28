import React from 'react';
import Image from 'next/image';
import GithubLogo from '../svg/githubLogo';
import LinkedinLogo from '../svg/linkedinLogo';
import ProfilePicture from '../../public/images/profilePicture.png';
import styles from '../../styles/home.module.scss';

function Home() {
  return (
    <div className={styles.homeArea} id="homeArea">
      <div className={styles.homeDescriptionContainer}>
        <div className={styles.homeDescription}>
          <h1>Guillaume Jolibois</h1>
          <h2>Développeur Javascript</h2>
          <p>
            Autodidacte de 28 ans, avec une appetence pour le design et
            l’ergonomie. Je souhaite mettre mes compétences aux services des
            entreprises. Disponible en région parisienne.
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
        src={ProfilePicture}
        alt="profile"
        title="profile"
        className={`${styles.homeProfilePicture} ${styles.unselectable}`}
        priority
      />
    </div>
  );
}

export default Home;
