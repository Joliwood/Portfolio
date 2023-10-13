import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Image from 'next/image';
import styles from '../../../styles/myProjects.module.scss';

function DetailsProject({
  stacks,
  imageUrl,
  selectedProject,
  showModal,
  closeModal,
  imageGif,
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
        src={imageGif || imageUrl}
        alt={selectedProject.title}
        title={selectedProject.title}
        width={500}
        height={500}
        unoptimized
      />

      <div className={styles.detailsProjectSeparationLine}>
        {selectedProject.descriptions.map((description) => (
          <p key={description}>{description}</p>
        ))}
      </div>

      <h4>Récapitulatif des compétences utilisées pour ce projet : </h4>
      <div
        className={`${styles.detailsProjectStacksContainer} ${styles.detailsProjectSeparationLine}`}
      >
        {stacks.map((stack) => (
          <div key={stack.id}>
            <Image
              src={`/images/competence/${stack}Logo.png`}
              alt={stack}
              title={stack}
              width={35}
              height={35}
              unoptimized
            />
            <p>{stack}</p>
          </div>
        ))}
      </div>
      <div className={styles.detailsProjectLinksContainer}>
        {selectedProject.github && (
          selectedProject.github === 'Non disponible'
            ? (<h4>Github privé</h4>)
            : (
              <a href={selectedProject.github} target="blank">
                <h4>Voir le Github</h4>
              </a>
            )
        )}
        {selectedProject.githubs && (
          selectedProject.githubs.map((github) => (
            <a href={github.link} target="blank" key={github.title}>
              <h4>{github.title}</h4>
            </a>
          ))
        )}
        <a href={selectedProject.link} target="blank">
          <h4>Voir le Projet</h4>
        </a>
        <button
          type="button"
          onClick={closeModal}
        >
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
