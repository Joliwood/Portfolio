import React from 'react';

import { type ProjectType } from '#types';

type Props = {
  selectedProject: ProjectType;
};

const ProjectLink = (props: Props) => {
  const { selectedProject } = props;
  const { link: projectLink } = selectedProject;

  if (projectLink != null) {
    return (
      <a href={projectLink} target="blank">
        <h4>Voir le Projet</h4>
      </a>
    );
  }

  return (
    <h4 className="disabledButton">Projet local</h4>
  );
};

export default ProjectLink;
