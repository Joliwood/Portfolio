import React from "react";
import {
  frontCompetence,
  technoCompetence,
  toolsCompetence,
  backCompetence,
} from "./listedCompetence";
import styles from "../../styles/competences.module.css";
import Image from "next/image";

function Competences() {
  return (
    <div className={styles.competencesArea} id="competencesArea">
      <div className={styles.competencesSeparationEnsemble}>
        <div className={styles.competencesSeparationbar}></div>
        <h2>Compétences</h2>
        <div className={styles.competencesSeparationbar}></div>
      </div>

      <div className={styles.competencesContainer}>
        <div className={styles.competencesLineConnection}></div>

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
  );
}

export default Competences;
