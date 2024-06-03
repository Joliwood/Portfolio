import React from 'react';

import {
  backCompetences,
  frontCompetences,
  technoCompetences,
  toolsCompetences,
} from './CompetencesData';
import CompetencesStack from './CompetencesStacks';

import { competencesStyles, animationsStyles } from '#styles';

const Competences = () => {
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
            <CompetencesStack competences={frontCompetences} />
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
            <CompetencesStack competences={backCompetences} />
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
            <CompetencesStack competences={technoCompetences} />
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
            <CompetencesStack competences={toolsCompetences} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Competences;
