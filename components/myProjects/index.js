import React from "react";
import styles from "../../styles/myProjects.module.scss";
import stylesExperiences from "../../styles/myExperiences.module.scss";
import { MyProjectsList } from "./myProjectsList";
import Image from "next/image";
import GithubLogo from "../svg/githubLogo";

function MyProjects() {
  return (
    <div className={styles.myProjectsArea} id="myProjectsArea">
      <div className="separationEnsemble">
        <div className="separationbar"></div>
        <h2>Mes projets</h2>
        <div className="separationbar"></div>
      </div>

      <div className={styles.myProjectsContainer}>
        {MyProjectsList.reverse().map((data, index) => (
          <div key={index} data-aos="fade-up">
            <div className={styles.myProjectIndividualContainer}>
              <div>
                <Image
                  src={data.img}
                  alt={data.imgTag}
                  title={data.imgTag}
                  className={styles.myProjectsPicture}
                />

                <div className={styles.projectGithubButtons}>
                  <a href={data.github} target="blank">
                    <h4>Voir le Github</h4>
                  </a>
                  <a href={data.link} target="blank">
                    <h4>Voir le Projet</h4>
                  </a>
                </div>
              </div>
              <div>
                <h3 className={styles.myProjectsTitle}>{data.title}</h3>
                <div className={styles.myProjectStacksContainer}>
                  {data.stacks.map((stack, stackIndex) => (
                    <Image
                      src={"/images/competence/" + stack + "Logo.png"}
                      alt={stack}
                      title={stack}
                      width={35}
                      height={35}
                      key={stackIndex}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProjects;
