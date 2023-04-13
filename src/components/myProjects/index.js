import React from "react";
import "./styles.css";
import { MyProjectsList } from "./myProjectsList";

function MyProjects() {
  return (
    <div className="myProjectsArea" id="myProjectsArea">
      <div className="competencesSeparationEnsemble">
        <div className="competencesSeparationbar"></div>
        <h2>My Projects</h2>
        <div className="competencesSeparationbar"></div>
      </div>

      <div className="myProjectsContainer">
        {MyProjectsList.map((data, index) => (
          <a href={data.link} target="blank">
            <div className="myProjectIndividualContainer" key={index}>
              <img
                src={data.img}
                alt={data.imgTag}
                className="myProjectsPicture"
              />
              <h3 className="myProjectsTitle">{data.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default MyProjects;
