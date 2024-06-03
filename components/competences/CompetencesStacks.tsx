import React, { useMemo } from 'react';
import Image from 'next/image';

import { type CompetenceType } from '#types';
import { competencesStyles } from '#styles';

type Props = {
  competences: CompetenceType[];
};

const CompetencesStack = (props: Props): JSX.Element => {
  const { competences } = props;

  const competencesList = useMemo(() => {
    return competences.map((competence) => {
      if (competence.svg) {
        return (
          <div key={competence.name}>
            <div className={competencesStyles.competenceLogoContainer}>
              {competence.svg}
            </div>
            <h4 className={competencesStyles.competenceTitle}>{competence.name}</h4>
          </div>
        );
      }

      return (
        <div key={competence.name}>
          <div className={competencesStyles.competenceLogoContainer}>
            <Image
              width={100}
              height={100}
              src={competence.img ?? ''}
              alt={competence.name}
              title={competence.name}
            />
          </div>
          <h4 className={competencesStyles.competenceTitle}>{competence.name}</h4>
        </div>
      );
    });
  }, [competences]);

  return (
    <div>
      {competencesList}
    </div>
  );
};

export default CompetencesStack;
