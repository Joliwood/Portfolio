import React from "react";
import {
  frontCompetence,
  technoCompetence,
  toolsCompetence,
  backCompetence,
} from "./listedCompetence";
import styles from "../../styles/competences.module.css";
import stylesAnimations from "../../styles/animations.module.css";
import Image from "next/image";

function Competences() {
  return (
    <div className={styles.competencesArea} id="competencesArea">
      <div className="separationEnsemble">
        <div className="separationbar"></div>
        <h2>Compétences</h2>
        <div className="separationbar"></div>
      </div>

      <div className={styles.competencesContainer}>
        <div
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <div className={styles.individualCompetenceBlock}>
            <h3 className={styles.ensembleCompetencesTitle}>Front End</h3>
            <div>
              {frontCompetence.map((item) => (
                <div key={item.name}>
                  {item.svg ? (
                    <div className={styles.competenceLogoContainer}>
                      {item.svg}
                    </div>
                  ) : (
                    <div className={styles.competenceLogoContainer}>
                      <Image src={item.img} alt={item.name} title={item.name} />
                    </div>
                  )}
                  <h4 className={styles.competenceTitle}>{item.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={styles.apparitionContainer}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="150"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <div
            className={stylesAnimations.sectionsLineConnection}
            data-aos="lineGrowing"
            data-aos-offset="150"
            data-aos-delay="500"
            data-aos-duration="1000"
          ></div>
          <div className={styles.individualCompetenceBlock}>
            <h3 className={styles.ensembleCompetencesTitle}>Back End</h3>
            <div>
              {backCompetence.map((item) => (
                <div key={item.name}>
                  {item.svg ? (
                    <div className={styles.competenceLogoContainer}>
                      {item.svg}
                    </div>
                  ) : (
                    <div className={styles.competenceLogoContainer}>
                      <Image src={item.img} alt={item.name} title={item.name} />
                    </div>
                  )}
                  <h4 className={styles.competenceTitle}>{item.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={styles.apparitionContainer}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="150"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <div
            className={stylesAnimations.sectionsLineConnection}
            data-aos="lineGrowing"
            data-aos-offset="150"
            data-aos-delay="500"
            data-aos-duration="1000"
          ></div>
          <div className={styles.individualCompetenceBlock}>
            <h3 className={styles.ensembleCompetencesTitle}>
              Les technos que j&apos;ai travaillé
            </h3>
            <div>
              {technoCompetence.map((item) => (
                <div key={item.name}>
                  {item.svg ? (
                    <div className={styles.competenceLogoContainer}>
                      {item.svg}
                    </div>
                  ) : (
                    <div className={styles.competenceLogoContainer}>
                      <Image src={item.img} alt={item.name} title={item.name} />
                    </div>
                  )}
                  <h4 className={styles.competenceTitle}>{item.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={styles.apparitionContainer}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="150"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <div
            className={stylesAnimations.sectionsLineConnection}
            data-aos="lineGrowing"
            data-aos-offset="150"
            data-aos-delay="500"
            data-aos-duration="1000"
          ></div>
          <div className={styles.individualCompetenceBlock}>
            <h3 className={styles.ensembleCompetencesTitle}>
              Les outils que j&apos;ai utilisé
            </h3>
            <div>
              {toolsCompetence.map((item) => (
                <div key={item.name}>
                  {item.svg ? (
                    <div className={styles.competenceLogoContainer}>
                      {item.svg}
                    </div>
                  ) : (
                    <div className={styles.competenceLogoContainer}>
                      <Image src={item.img} alt={item.name} title={item.name} />
                    </div>
                  )}
                  <h4 className={styles.competenceTitle}>{item.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competences;
