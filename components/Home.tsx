import React from "react";
import Image from "next/image";

import { homeStyles } from "#styles";
import { GithubLogo, LinkedinLogo } from "#svg";

const Home = () => {
  return (
    <section className={homeStyles.homeArea} id="homeArea" aria-label="Présentation">
      <div className={homeStyles.homeDescriptionContainer}>
        <div className={homeStyles.homeDescription}>
          <h1>Guillaume Jolibois</h1>
          <h2>Développeur Full Stack</h2>
          <p>
            Développeur Full-Stack / Backend (TypeScript & Rust) | Architecture
            & Clean Code
            <br />
            <br />
            J’ai une forte appétence pour le clean code, les structures base de
            données et l’expérience utilisateur UX.
            <br />
            <br />
            Mon objectif est de concevoir des applications robustes,
            prédictibles et scalables.
          </p>
          <div className={homeStyles.homeLogosLinks}>
            <a
              href="https://www.linkedin.com/in/guillaume-jolibois-430426119/"
              target="_blank"
              aria-label="Linkedin link"
              rel="noreferrer"
            >
              <LinkedinLogo />
            </a>
            <a
              href="https://github.com/Joliwood"
              target="_blank"
              aria-label="Github link"
              rel="noreferrer"
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
        alt="Photo de profil de Guillaume Jolibois, développeur Full Stack"
        title="profile"
        className={`${homeStyles.homeProfilePicture} ${homeStyles.unselectable}`}
        priority
      />
    </section>
  );
};

export default Home;
