import React, { useState } from "react";
import styles from "../../styles/myProjects.module.scss";
import { MyProjectsList } from "./myProjectsList";
import Image from "next/image";
import { Button } from "react-bootstrap";
import ProjectModal from "./detailsProject";

const reversedProjectsList = MyProjectsList.reverse();

function MyProjects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  function openModal(project) {
    setSelectedProject(project);
    setShowModal(true);
  }

  function closeModal() {
    setShowModal(false);
  }

  return (
    <div className={styles.myProjectsArea} id="myProjectsArea">
      <div className="separationEnsemble">
        <div className="separationbar"></div>
        <h2>Mes projets</h2>
        <div className="separationbar"></div>
      </div>

      <div className={styles.myProjectsContainer}>
        {reversedProjectsList.map((data, index) => (
          <div key={index} data-aos="fade-up">
            <div className={styles.myProjectIndividualContainer}>
              <div>
                <Image
                  src={data.img}
                  alt={data.imgTag}
                  title={data.imgTag}
                  width={500}
                  height={500}
                  className={styles.myProjectsPicture}
                  key={index}
                />

                <div className={styles.projectGithubButtons}>
                  <a href={data.github} target="blank">
                    <h4>Voir le Github</h4>
                  </a>
                  <a href={data.link} target="blank">
                    <h4>Voir le Projet</h4>
                  </a>
                  <Button onClick={() => openModal(data)}>
                    <h4>Détails</h4>
                  </Button>
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

      <ProjectModal
        selectedProject={selectedProject}
        showModal={showModal}
        closeModal={closeModal}
        title={selectedProject ? selectedProject.title : ""}
        imageUrl={selectedProject ? selectedProject.img : ""}
        imageGif={selectedProject ? selectedProject.gif : ""}
        stacks={selectedProject ? selectedProject.stacks : ""}
      />
    </div>
  );
}

export default MyProjects;
