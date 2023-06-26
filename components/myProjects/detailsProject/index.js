import React from "react";
import { Button, Modal } from "react-bootstrap";
import styles from "../../../styles/myProjects.module.scss";
import Image from "next/image";

function DetailsProject({
  stacks,
  overview,
  selectedProject,
  showModal,
  closeModal,
}) {
  if (!selectedProject) {
    return null;
  }

  return (
    <Modal
      className={styles.detailsProjectContainer}
      show={showModal}
      onHide={closeModal}
    >
      <h3>{selectedProject.title}</h3>
      <Image
        src={overview ? overview : selectedProject.img}
        // src="https://github.com/Joliwood/Netflix-clone/raw/374c55b499f9ded606d10550f6e22f2c7f5bcaea/netflix-clone.gif"
        alt={selectedProject.title}
        title={selectedProject.title}
        width={500}
        height={500}
      />
      <p className={styles.detailsProjectSeparationLine}>
        {selectedProject.description}
      </p>
      <h4>Récapitulatif des compétences utilisées pour ce projet : </h4>
      <div
        className={`${styles.detailsProjectStacksContainer} ${styles.detailsProjectSeparationLine}`}
      >
        {stacks.map((stack, stackIndex) => (
          <div key={stackIndex}>
            <Image
              src={"/images/competence/" + stack + "Logo.png"}
              alt={stack}
              title={stack}
              width={35}
              height={35}
            />
            <p>{stack}</p>
          </div>
        ))}
      </div>
      <div className={styles.detailsProjectLinksContainer}>
        <a href={selectedProject.github} target="blank">
          <h4>Voir le Github</h4>
        </a>
        <a href={selectedProject.link} target="blank">
          <h4>Voir le Projet</h4>
        </a>
        <button onClick={closeModal}>
          <h4>Retourner aux projets</h4>
        </button>
      </div>
      <Button
        className={styles.detailsProjectCloseModalButton}
        onClick={closeModal}
      >
        X
      </Button>
    </Modal>
  );
}

export default DetailsProject;
