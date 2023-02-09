import React from "react";
import {
  frontCompetence,
  technoCompetence,
  toolsCompetence,
  backCompetence,
} from "./listedCompetence";

function Competences() {
  return (
    <div>
      <div>
        <div></div>
        <h2>Compétences</h2>
        <div></div>
      </div>

      <div>
        <div>
          <div>
            {frontCompetence.map((item) => (
              <div key={item.name}>
                {item.svg ? item.svg : <img src={item.img} alt={item.name} />}
                <h4>{item.name}</h4>
              </div>
            ))}
            <div>{/* séparation CSS */}</div>
            <h3>Front End</h3>
          </div>

          <div>
            {backCompetence.map((item) => (
              <div key={item.name}>
                {item.svg ? item.svg : <img src={item.img} alt={item.name} />}
                <h4>{item.name}</h4>
              </div>
            ))}
            <div>{/* séparation CSS */}</div>
            <h3>Back End</h3>
          </div>
        </div>

        <div>
          <div>
            {technoCompetence.map((item) => (
              <div key={item.name}>
                {item.svg ? item.svg : <img src={item.img} alt={item.name} />}
                <h4>{item.name}</h4>
              </div>
            ))}
            <div>{/* séparation CSS */}</div>
            <h3>Les technos que j'ai travaillé</h3>
          </div>

          <div>
            {toolsCompetence.map((item) => (
              <div key={item.name}>
                {item.svg ? item.svg : <img src={item.img} alt={item.name} />}
                <h4>{item.name}</h4>
              </div>
            ))}
            <div>{/* séparation CSS */}</div>
            <h3>Les outils que j'ai utilisé</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competences;
