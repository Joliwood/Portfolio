import React from 'react';
import Image from 'next/image';

import { homeStyles } from '#styles';
import { GithubLogo, LinkedinLogo } from '#svg';

const Home = () => {
  return (
    <div className={homeStyles.homeArea} id="homeArea">
      <div className={homeStyles.homeDescriptionContainer}>
        <div className={homeStyles.homeDescription}>
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
          <div className={homeStyles.homeLogosLinks}>
            <a
              href="https://www.linkedin.com/in/guillaume-jolibois-430426119/"
              target="blank"
              aria-label="Linkedin link"
            >
              <LinkedinLogo />
            </a>
            <a
              href="https://github.com/Joliwood"
              target="blank"
              aria-label="Github link"
            >
              <GithubLogo />
            </a>
          </div>
        </div>
      </div>

      <div className={homeStyles.homeLine} />

      <Image
        src="/images/profilePicture.png"
        width={500}
        height={500}
        alt="profile"
        title="profile"
        className={`${homeStyles.homeProfilePicture} ${homeStyles.unselectable}`}
        priority
      />
    </div>
  );
};

export default Home;
