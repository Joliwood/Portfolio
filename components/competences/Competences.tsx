import React from "react";

import {
  backCompetences,
  frontCompetences,
  languages,
  toolsCompetences,
} from "../data";

import CompetencesStack from "./CompetencesStacks";

import { competencesStyles, animationsStyles } from "#styles";

const competencesData = [
  {
    title: "Langages",
    competences: languages,
  },
  {
    title: "Front End",
    competences: frontCompetences,
  },
  {
    title: "Back End",
    competences: backCompetences,
  },
  {
    title: "Les outils que j'utilise",
    competences: toolsCompetences,
  },
];

const Competences = () => {
  return (
    <div className={competencesStyles.competencesArea} id="competencesArea">
      <div className="separationEnsemble">
        <div className="separationbar" />
        <h2>Compétences</h2>
        <div className="separationbar" />
      </div>

      <div className={competencesStyles.competencesContainer}>
        {competencesData.map((section, index) => (
          <div
            key={section.title}
            className={competencesStyles.apparitionContainer}
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-offset={index === 0 ? "100" : "150"}
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          >
            {index !== 0 && (
              <div
                className={animationsStyles.sectionsLineConnection}
                data-aos="lineGrowing"
                data-aos-offset="150"
                data-aos-delay="500"
                data-aos-duration="1000"
              />
            )}
            <div className={competencesStyles.individualCompetenceBlock}>
              <h3 className={competencesStyles.ensembleCompetencesTitle}>
                {section.title}
              </h3>
              <CompetencesStack competences={section.competences} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Competences;
