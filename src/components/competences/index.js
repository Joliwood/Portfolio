import React from "react";
import {
  frontCompetence,
  technoCompetence,
  toolsCompetence,
  backCompetence,
} from "./listedCompetence";
import "./styles.css";

function Competences() {
  return (
    <div className="competencesArea" id="competencesArea">
      <div className="competencesSeparationEnsemble">
        <div className="competencesSeparationbar"></div>
        <h2>Compétences</h2>
        <div className="competencesSeparationbar"></div>
      </div>

      <div className="competencesContainer">
        <div className="competencesLineConnection"></div>

        <div className="individualCompetenceBlock">
          <h3 className="ensembleCompetencesTitle">Front End</h3>
          <div>
            {frontCompetence.map((item) => (
              <div key={item.name}>
                {item.svg ? (
                  <div className="competenceLogoContainer">{item.svg}</div>
                ) : (
                  <div className="competenceLogoContainer">
                    <img src={item.img} alt={item.name} />
                  </div>
                )}
                <h4 className="competenceTitle">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="individualCompetenceBlock">
          <h3 className="ensembleCompetencesTitle">Back End</h3>
          <div>
            {backCompetence.map((item) => (
              <div key={item.name}>
                {item.svg ? (
                  <div className="competenceLogoContainer">{item.svg}</div>
                ) : (
                  <div className="competenceLogoContainer">
                    <img src={item.img} alt={item.name} />
                  </div>
                )}
                <h4 className="competenceTitle">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="individualCompetenceBlock">
          <h3 className="ensembleCompetencesTitle">
            Les technos que j'ai travaillé
          </h3>
          <div>
            {technoCompetence.map((item) => (
              <div key={item.name}>
                {item.svg ? (
                  <div className="competenceLogoContainer">{item.svg}</div>
                ) : (
                  <div className="competenceLogoContainer">
                    <img src={item.img} alt={item.name} />
                  </div>
                )}
                <h4 className="competenceTitle">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>

        <div className="individualCompetenceBlock">
          <h3 className="ensembleCompetencesTitle">
            Les outils que j'ai utilisé
          </h3>
          <div>
            {toolsCompetence.map((item) => (
              <div key={item.name}>
                {item.svg ? (
                  <div className="competenceLogoContainer">{item.svg}</div>
                ) : (
                  <div className="competenceLogoContainer">
                    <img src={item.img} alt={item.name} />
                  </div>
                )}
                <h4 className="competenceTitle">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competences;
