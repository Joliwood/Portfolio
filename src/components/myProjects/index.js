import React from "react";
import "./styles.css";
import NetflixProject from "../images/projects/netflixProject.png";

function MyProjects() {
  return (
    <div className="myProjectsArea" id="myProjectsArea">
      <div className="competencesSeparationEnsemble">
        <div className="competencesSeparationbar"></div>
        <h2>My Projects</h2>
        <div className="competencesSeparationbar"></div>
      </div>

      <div className="myProjectsContainer">
        <div className="myProjectIndividualContainer">
          <a
            href="https://storied-biscochitos-463f24.netlify.app/"
            className="myProjectsProjectImgLink"
            target="blank"
          >
            <img
              src={NetflixProject}
              alt="Netflix project"
              className="myProjectsPicture"
            />
          </a>
          <a
            href="https://storied-biscochitos-463f24.netlify.app/"
            className="myProjectsProjectTitleLink"
            target="blank"
          >
            <h3 className="myProjectsTitle">
              Netflix Clone - React.js + API + Netlify
            </h3>
          </a>
        </div>

        <div className="myProjectIndividualContainer">
          <a
            href="https://storied-biscochitos-463f24.netlify.app/"
            className="myProjectsProjectImgLink"
            target="blank"
          >
            <img
              src={NetflixProject}
              alt="Netflix project"
              className="myProjectsPicture"
            />
          </a>
          <a
            href="https://storied-biscochitos-463f24.netlify.app/"
            className="myProjectsProjectTitleLink"
            target="blank"
          >
            <h3 className="myProjectsTitle">
              Spotify Clone - React.js + API + Netlify
            </h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MyProjects;
