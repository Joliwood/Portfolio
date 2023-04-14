import React from "react";
import GithubLogo from "../svg/githubLogo";
import LinkedinLogo from "../svg/linkedinLogo";
import ProfilePicture from "../images/profilePicture.jpeg";
import "./styles.css";

function Home() {
  return (
    <div className="homeArea" id="homeArea">
      <div className="homeDescription">
        <h1>Guillaume Jolibois</h1>
        <h2>Développeur Javascript</h2>
        <p>
          Autodidacte de 28 ans, avec une appetence pour le design et
          l’ergonomie. Je souhaite mettre mes compétences aux services des
          entreprises. Disponible en région parisienne.
        </p>
        <div className="homeLogosLinks">
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

      <img
        src={ProfilePicture}
        alt="profile"
        title="profile"
        className="homeProfilePicture unselectable"
      />
    </div>
  );
}

export default Home;
