import React, { useState } from 'react';
import Image from 'next/image';
import { Button } from 'react-bootstrap';

import MyProjectsList from './MyProjectsList';
import ProjectModal from './DetailsProject';

import { myProjectsStyles } from '#styles';

const reversedProjectsList = MyProjectsList.reverse();

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const openModal = (project: any) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={myProjectsStyles.myProjectsArea} id="myProjectsArea">
      <div className="separationEnsemble">
        <div className="separationbar" />
        <h2>Mes projets</h2>
        <div className="separationbar" />
      </div>

      <div className={myProjectsStyles.myProjectsContainer}>
        {reversedProjectsList.map((data) => (
          <div key={data.title} data-aos="fade-up">
            <div className={myProjectsStyles.myProjectIndividualContainer}>
              <div>
                <Image
                  src={data.img}
                  alt={data.imgTag}
                  title={data.imgTag}
                  width={500}
                  height={500}
                  className={myProjectsStyles.myProjectsPicture}
                />

                <div className={myProjectsStyles.projectGithubButtons}>
                  {data.github && (
                    data.github === 'Non disponible'
                      ? (<h4>Github privé</h4>)
                      : (
                        <a href={data.github} target="blank">
                          <h4>Voir le Github</h4>
                        </a>
                      )
                  )}
                  {data.githubs && (
                    data.githubs.map((github) => (
                      <a href={github.link} target="blank" key={github.title}>
                        <h4>{github.title}</h4>
                      </a>
                    ))
                  )}
                  <a href={data.link} target="blank">
                    <h4>Voir le Projet</h4>
                  </a>
                  <Button onClick={() => openModal(data)}>
                    <h4>Détails</h4>
                  </Button>
                </div>
              </div>
              <div>
                <h3 className={myProjectsStyles.myProjectsTitle}>{data.title}</h3>
                <div className={myProjectsStyles.myProjectStacksContainer}>
                  {data.stacks.map((stack) => (
                    <Image
                      src={`/images/competence/${stack}Logo.png`}
                      alt={stack}
                      title={stack}
                      width={35}
                      height={35}
                      key={stack}
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
        // @ts-expect-error types to fix here
        title={selectedProject ? selectedProject.title : ''}
        // @ts-expect-error types to fix here
        imageUrl={selectedProject ? selectedProject.img : ''}
        // @ts-expect-error types to fix here
        imageGif={selectedProject ? selectedProject.gif : ''}
        // @ts-expect-error types to fix here
        stacks={selectedProject ? selectedProject.stacks : ''}
      />
    </div>
  );
};

export default MyProjects;
