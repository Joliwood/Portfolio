import React from "react";
import styles from "../../styles/myProjects.module.css";
import { MyProjectsList } from "./myProjectsList";
import Image from "next/image";

function MyProjects() {
  return (
    <div className={styles.myProjectsArea} id="myProjectsArea">
      <div className="separationEnsemble">
        <div className="separationbar"></div>
        <h2>Mes projets</h2>
        <div className="separationbar"></div>
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
