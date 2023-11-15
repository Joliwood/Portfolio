import React from 'react';
import Image from 'next/image';
import {
  frontCompetences,
  technoCompetences,
  toolsCompetences,
  backCompetences,
} from './listedCompetence';
import styles from '../../styles/competences.module.scss';
import stylesAnimations from '../../styles/animations.module.scss';

function Competences() {
  return (
    <div className={styles.competencesArea} id="competencesArea">
      <div className="separationEnsemble">
        <div className="separationbar" />
        <h2>Compétences</h2>
        <div className="separationbar" />
      </div>

      <div className={styles.competencesContainer}>
        <div
          className={styles.apparitionContainer}
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <div className={styles.individualCompetenceBlock}>
            <h3 className={styles.ensembleCompetencesTitle}>Front End</h3>
            <div>
              {frontCompetences.map((frontCompetence) => (
                <div key={frontCompetence.name}>
                  {frontCompetence.svg ? (
                    <div className={styles.competenceLogoContainer}>
                      {frontCompetence.svg}
                    </div>
                  ) : (
                    <div className={styles.competenceLogoContainer}>
                      <Image
                        width={100}
                        height={100}
                        src={frontCompetence.img}
                        alt={frontCompetence.name}
                        title={frontCompetence.name}
                      />
                    </div>
                  )}
                  <h4 className={styles.competenceTitle}>{frontCompetence.name}</h4>
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
          />
          <div className={styles.individualCompetenceBlock}>
            <h3 className={styles.ensembleCompetencesTitle}>Back End</h3>
            <div>
              {backCompetences.map((backCompetence) => (
                <div key={backCompetence.name}>
                  {backCompetence.svg ? (
                    <div className={styles.competenceLogoContainer}>
                      {backCompetence.svg}
                    </div>
                  ) : (
                    <div className={styles.competenceLogoContainer}>
                      <Image
                        width={100}
                        height={100}
                        src={backCompetence.img}
                        alt={backCompetence.name}
                        title={backCompetence.name}
                      />
                    </div>
                  )}
                  <h4 className={styles.competenceTitle}>{backCompetence.name}</h4>
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
          />
          <div className={styles.individualCompetenceBlock}>
            <h3 className={styles.ensembleCompetencesTitle}>
              Les technos que j&apos;ai travaillé
            </h3>
            <div>
              {technoCompetences.map((technoCompetence) => (
                <div key={technoCompetence.name}>
                  {technoCompetence.svg ? (
                    <div className={styles.competenceLogoContainer}>
                      {technoCompetence.svg}
                    </div>
                  ) : (
                    <div className={styles.competenceLogoContainer}>
                      <Image
                        width={100}
                        height={100}
                        src={technoCompetence.img}
                        alt={technoCompetence.name}
                        title={technoCompetence.name}
                      />
                    </div>
                  )}
                  <h4 className={styles.competenceTitle}>{technoCompetence.name}</h4>
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
          />
          <div className={styles.individualCompetenceBlock}>
            <h3 className={styles.ensembleCompetencesTitle}>
              Les outils que j&apos;ai utilisé
            </h3>
            <div>
              {toolsCompetences.map((toolCompetence) => (
                <div key={toolCompetence.name}>
                  {toolCompetence.svg ? (
                    <div className={styles.competenceLogoContainer}>
                      {toolCompetence.svg}
                    </div>
                  ) : (
                    <div className={styles.competenceLogoContainer}>
                      <Image
                        width={100}
                        height={100}
                        src={toolCompetence.img}
                        alt={toolCompetence.name}
                        title={toolCompetence.name}
                      />
                    </div>
                  )}
                  <h4 className={styles.competenceTitle}>{toolCompetence.name}</h4>
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
