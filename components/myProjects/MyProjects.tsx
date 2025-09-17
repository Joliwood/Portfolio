import React, { useMemo, useState } from "react";
import Image from "next/image";
import { Button } from "react-bootstrap";

import { MyProjectsData } from "../data";

import DetailsProject from "./DetailsProject";
import ProjectLink from "./ProjectButtonLink";

import { myProjectsStyles } from "#styles";
import { type ProjectType } from "#types";
import Tooltip from "#components/Tooltip";

const reversedProjectsList = MyProjectsData.reverse();

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );
  const [showModal, setShowModal] = useState(false);

  const openModal = (project: ProjectType) => {
    setSelectedProject(project);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const projectModalJSX = useMemo(() => {
    if (selectedProject == null) {
      return null;
    }

    return (
      <DetailsProject
        closeModal={closeModal}
        imageUrl={selectedProject.gif ?? selectedProject.img}
        selectedProject={selectedProject}
        showModal={showModal}
      />
    );
  }, [selectedProject, showModal]);

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
            <div
              className={myProjectsStyles.myProjectIndividualContainer}
              style={{ position: "relative", overflow: "hidden" }}
            >
              {data.state === "DEPRECATED" && (
                <div className={myProjectsStyles.deprecatedBanner}>
                  <span className={myProjectsStyles.deprecatedText}>
                    Déprécié
                  </span>
                </div>
              )}

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
                  {data.github &&
                    (data.github === "Non disponible" ? (
                      <h4 className="disabledButton">Github privé</h4>
                    ) : (
                      <a href={data.github} target="blank">
                        <h4>Voir le Github</h4>
                      </a>
                    ))}
                  {data.githubs &&
                    data.githubs.map((github) =>
                      github.link === "Non disponible" ? (
                        <h4 className="disabledButton">Github privé</h4>
                      ) : (
                        <a href={github.link} target="blank" key={github.title}>
                          <h4>{github.title}</h4>
                        </a>
                      )
                    )}
                  <ProjectLink selectedProject={data} />
                  <Button onClick={() => openModal(data)}>
                    <h4>Détails</h4>
                  </Button>
                </div>
              </div>
              <div>
                <h3 className={myProjectsStyles.myProjectsTitle}>
                  {data.title}
                </h3>
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

      {projectModalJSX}
    </div>
  );
};

export default MyProjects;
