import React from "react";
import "./styles.css";

function MyExperiences() {
  return (
    <div className="myExperiencesArea">
      <div className="competencesSeparationEnsemble">
        <div className="competencesSeparationbar"></div>
        <h2>My Experiences</h2>
        <div className="competencesSeparationbar"></div>
      </div>

      <div className="myExperiencesContainer">
        <div className="myExperiencesBlockContainer">
          <div className="myExperiencesDescriptionContainer">
            <div className="myExperiencesTitleEnsemble">
              <h3 className="myExperiencesTitle">Formation en autodidacte</h3>
              <p className="myExperiencesText">&nbsp;- 11/2021 à aujourd’hui</p>
            </div>

            <p>Supports utilisés : Freecodecamp, Graphikart, Codacademy </p>

            <div className="myExperiencesLinksContainer">
              <p className="myExperiencesText">Projects créés :</p>
              <a href="https://gj-netlix-clone.netlify.app/" target="blank">
                <button className="myExperiencesLinkButton">
                  <h4 className="myExperiencesLinkButtonText">Clone Netflix</h4>
                </button>
              </a>

              <a
                href="https://storied-biscochitos-463f24.netlify.app/"
                target="blank"
              >
                <button className="myExperiencesLinkButton">
                  <h4 className="myExperiencesLinkButtonText">Clone Spotify</h4>
                </button>
              </a>
            </div>
          </div>

          <div className="myExperiencesCompetencesContainer">
            <div className="myExperiencesCompetence">
              <p>Html / css</p>
            </div>

            <div className="myExperiencesCompetence">
              <p>Javascript</p>
            </div>

            <div className="myExperiencesCompetence">
              <p>React</p>
            </div>
          </div>
        </div>

        <div className="myExperiencesBlockContainer">
          <div className="myExperiencesDescriptionContainer">
            <div className="myExperiencesTitleEnsemble">
              <p className="myExperiencesText">06/2022 à aujourd’hui -&nbsp;</p>
              <h3 className="myExperiencesTitle">
                Développeur web front end junior
              </h3>
            </div>

            <h3 className="myExperiencesTitle">Agartha - Freelance</h3>
            <p>
              Création site A à Z en react, méthode agile, traducteur EN / FR
            </p>

            <div className="myExperiencesLinksContainer">
              <a href="https://www.agartha.ch/" target="blank">
                <button className="myExperiencesLinkButton">
                  <h4 className="myExperiencesLinkButtonText">Lien du site</h4>
                </button>
              </a>
            </div>
          </div>

          <div className="myExperiencesCompetencesContainer">
            <div className="myExperiencesCompetence">
              <p>Html / css</p>
            </div>

            <div className="myExperiencesCompetence">
              <p>Javascript</p>
            </div>

            <div className="myExperiencesCompetence">
              <p>React</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyExperiences;
