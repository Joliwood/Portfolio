import React from "react";
import styles from "../../styles/myProjects.module.css";
import stylesCompetences from "../../styles/competences.module.css";
import { MyProjectsList } from "./myProjectsList";
import Image from "next/image";

function MyProjects() {
  return (
    <div className={styles.myProjectsArea} id="myProjectsArea">
      <div className={stylesCompetences.competencesSeparationEnsemble}>
        <div className={stylesCompetences.competencesSeparationbar}></div>
        <h2>My Projects</h2>
        <div className={stylesCompetences.competencesSeparationbar}></div>
      </div>

      <div className={styles.myProjectsContainer}>
        {MyProjectsList.map((data, index) => (
          <a href={data.link} target="blank" key={index}>
            <div className={styles.myProjectIndividualContainer}>
              <Image
                src={data.img}
                alt={data.imgTag}
                title={data.imgTag}
                className={styles.myProjectsPicture}
              />
              <h3 className={styles.myProjectsTitle}>{data.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

export default MyProjects;
