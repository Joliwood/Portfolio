import React from "react";
import GithubLogo from "../svg/githubLogo";
import LinkedinLogo from "../svg/linkedinLogo";
import ProfilePicture from "../images/profilePicture.jpeg";
import "./styles.css";

function Home() {
  return (
    <div className="homeArea">
      <div className="homeDescription">
        <h1>Guillaume Jolibois</h1>
        <h2>Développeur Front-End</h2>
        <p>
          Autodidacte de 27 ans, avec une appetence pour le design et
          l’ergonomie.
        </p>
        <div className="homeLogosLinks">
          <LinkedinLogo />
          <GithubLogo />
        </div>
      </div>

      <img
        src={ProfilePicture}
        alt="profile photo"
        className="homeProfilePicture unselectable"
      />
    </div>
  );
}

export default Home;
