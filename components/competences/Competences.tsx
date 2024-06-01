import React, { useMemo } from 'react';
import Image from 'next/image';

import {
  backCompetences,
  frontCompetences,
  technoCompetences,
  toolsCompetences,
} from './CompetencesList';

import { competencesStyles, animationsStyles } from '#styles';

const Competences = () => {
  const technoCompetencesJSX = useMemo(() => {
    return technoCompetences.map((technoCompetence) => (
      <div key={technoCompetence.name}>
        {technoCompetence.svg ? (
          <div className={competencesStyles.competenceLogoContainer}>
            {technoCompetence.svg}
          </div>
        ) : (
          <div className={competencesStyles.competenceLogoContainer}>
            <Image
              width={100}
              height={100}
              src={technoCompetence.img ?? ''}
              alt={technoCompetence.name}
              title={technoCompetence.name}
            />
          </div>
        )}
        <h4 className={competencesStyles.competenceTitle}>{technoCompetence.name}</h4>
      </div>
    ));
  }, []);

  return (
    <div className={competencesStyles.competencesArea} id="competencesArea">
      <div className="separationEnsemble">
        <div className="separationbar" />
        <h2>Compétences</h2>
        <div className="separationbar" />
      </div>

      <div className={competencesStyles.competencesContainer}>
        <div
          className={competencesStyles.apparitionContainer}
          data-aos="fade-up"
          data-aos-offset="100"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <div className={competencesStyles.individualCompetenceBlock}>
            <h3 className={competencesStyles.ensembleCompetencesTitle}>Front End</h3>
            <div>
              {frontCompetences.map((frontCompetence) => (
                <div key={frontCompetence.name}>
                  {frontCompetence.svg ? (
                    <div className={competencesStyles.competenceLogoContainer}>
                      {frontCompetence.svg}
                    </div>
                  ) : (
                    <div className={competencesStyles.competenceLogoContainer}>
                      <Image
                        width={100}
                        height={100}
                        src={frontCompetence.img ?? ''}
                        alt={frontCompetence.name}
                        title={frontCompetence.name}
                      />
                    </div>
                  )}
                  <h4 className={competencesStyles.competenceTitle}>{frontCompetence.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={competencesStyles.apparitionContainer}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="150"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <div
            className={animationsStyles.sectionsLineConnection}
            data-aos="lineGrowing"
            data-aos-offset="150"
            data-aos-delay="500"
            data-aos-duration="1000"
          />
          <div className={competencesStyles.individualCompetenceBlock}>
            <h3 className={competencesStyles.ensembleCompetencesTitle}>Back End</h3>
            <div>
              {backCompetences.map((backCompetence) => (
                <div key={backCompetence.name}>
                  {backCompetence.svg ? (
                    <div className={competencesStyles.competenceLogoContainer}>
                      {backCompetence.svg}
                    </div>
                  ) : (
                    <div className={competencesStyles.competenceLogoContainer}>
                      <Image
                        width={100}
                        height={100}
                        src={backCompetence.img ?? ''}
                        alt={backCompetence.name}
                        title={backCompetence.name}
                      />
                    </div>
                  )}
                  <h4 className={competencesStyles.competenceTitle}>{backCompetence.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={competencesStyles.apparitionContainer}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="150"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <div
            className={animationsStyles.sectionsLineConnection}
            data-aos="lineGrowing"
            data-aos-offset="150"
            data-aos-delay="500"
            data-aos-duration="1000"
          />
          <div className={competencesStyles.individualCompetenceBlock}>
            <h3 className={competencesStyles.ensembleCompetencesTitle}>
              Les technos que j&apos;ai travaillé
            </h3>
            <div>
              {technoCompetencesJSX}
            </div>
          </div>
        </div>

        <div
          className={competencesStyles.apparitionContainer}
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-offset="150"
          data-aos-duration="500"
          data-aos-easing="ease-in-out"
        >
          <div
            className={animationsStyles.sectionsLineConnection}
            data-aos="lineGrowing"
            data-aos-offset="150"
            data-aos-delay="500"
            data-aos-duration="1000"
          />
          <div className={competencesStyles.individualCompetenceBlock}>
            <h3 className={competencesStyles.ensembleCompetencesTitle}>
              Les outils que j&apos;ai utilisé
            </h3>
            <div>
              {toolsCompetences.map((toolCompetence) => (
                <div key={toolCompetence.name}>
                  {toolCompetence.svg ? (
                    <div className={competencesStyles.competenceLogoContainer}>
                      {toolCompetence.svg}
                    </div>
                  ) : (
                    <div className={competencesStyles.competenceLogoContainer}>
                      <Image
                        width={100}
                        height={100}
                        src={toolCompetence.img ?? ''}
                        alt={toolCompetence.name}
                        title={toolCompetence.name}
                      />
                    </div>
                  )}
                  <h4 className={competencesStyles.competenceTitle}>{toolCompetence.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competences;
