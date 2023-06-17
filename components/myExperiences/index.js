import React from "react";
import styles from "../../styles/myExperiences.module.scss";

function MyExperiences() {
  return (
    <div className={styles.myExperiencesArea}>
      <div className="separationEnsemble">
        <div className="separationbar"></div>
        <h2>Mon parcours</h2>
        <div className="separationbar"></div>
      </div>

      <div className={styles.myExperiencesContainer}>
        <div
          className={styles.myExperiencesBlockContainer}
          data-aos="fade-right"
        >
          <div className={styles.myExperiencesDescriptionContainer}>
            <div className={styles.myExperiencesTitleEnsemble}>
              <h3 className={styles.myExperiencesTitle}>
                Formation en autodidacte
              </h3>
              <p className={styles.myExperiencesText}>
                &nbsp;- Nov 2021 à aujourd’hui
              </p>
            </div>

            <p>Supports utilisés : Freecodecamp, Graphikart, Codacademy </p>

            <div className={styles.myExperiencesLinksContainer}>
              <p className={styles.myExperiencesText}>Projects créés :</p>
              <a href="https://gj-netlix-clone.netlify.app/" target="blank">
                <button className={styles.myExperiencesLinkButton}>
                  <h4 className={styles.myExperiencesLinkButtonText}>
                    Clone Netflix
                  </h4>
                </button>
              </a>

              <a
                href="https://storied-biscochitos-463f24.netlify.app/"
                target="blank"
              >
                <button className={styles.myExperiencesLinkButton}>
                  <h4 className={styles.myExperiencesLinkButtonText}>
                    Clone Spotify
                  </h4>
                </button>
              </a>
            </div>
          </div>

          <div className={styles.myExperiencesCompetencesContainer}>
            <div className={styles.myExperiencesCompetence}>
              <p>Html / css</p>
            </div>

            <div className={styles.myExperiencesCompetence}>
              <p>Javascript</p>
            </div>

            <div className={styles.myExperiencesCompetence}>
              <p>React</p>
            </div>
          </div>
        </div>

        <div
          className={styles.myExperiencesBlockContainer}
          data-aos="fade-left"
        >
          <div className={styles.myExperiencesDescriptionContainer}>
            <div className={styles.myExperiencesTitleEnsemble}>
              <p className={styles.myExperiencesText}>
                06/2022 à aujourd’hui -&nbsp;
              </p>
              <h3 className={styles.myExperiencesTitle}>
                Développeur web front end junior
              </h3>
            </div>

            <h3 className={styles.myExperiencesTitle}>Agartha - Freelance</h3>
            <p>
              Création site A à Z en react, méthode agile, traducteur EN / FR
            </p>

            <div className={styles.myExperiencesLinksContainer}>
              <a href="https://www.agartha.ch/" target="blank">
                <button className={styles.myExperiencesLinkButton}>
                  <h4 className={styles.myExperiencesLinkButtonText}>
                    Lien du site
                  </h4>
                </button>
              </a>
            </div>
          </div>

          <div className={styles.myExperiencesCompetencesContainer}>
            <div className={styles.myExperiencesCompetence}>
              <p>Html / css</p>
            </div>

            <div className={styles.myExperiencesCompetence}>
              <p>Javascript</p>
            </div>

            <div className={styles.myExperiencesCompetence}>
              <p>React</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyExperiences;
