import React, { useMemo, type JSX } from "react";
import Image from "next/image";

import { type CompetenceType } from "#types";
import { competencesStyles, animationsStyles } from "#styles";
import { Tooltip } from "#components";

type Props = {
  competences: CompetenceType[];
};

const CompetencesStack = (props: Props): JSX.Element => {
  const { competences } = props;

  const competencesList = useMemo(() => {
    return competences.map((competence) => {
      const containerClass = `
        ${competencesStyles.competenceLogoContainer}
        ${
          competence.isFavoriteStack
            ? animationsStyles.favoriteCompetenceItem
            : ""
        }
      `.trim();

      const renderLogo = () => {
        if (competence.svg) {
          return <div className={containerClass}>{competence.svg}</div>;
        }

        return (
          <div className={containerClass}>
            <Image
              width={100}
              height={100}
              src={competence.img ?? ""}
              alt={competence.name}
              title={competence.name}
            />
          </div>
        );
      };

      return (
        <div key={competence.name}>
          {competence.isFavoriteStack ? (
            <Tooltip
              text="Fait partie de ma stack de prédilection"
              position="bottom"
            >
              {renderLogo()}
            </Tooltip>
          ) : (
            renderLogo()
          )}
          <h4 className={competencesStyles.competenceTitle}>
            {competence.name}
          </h4>
        </div>
      );
    });
  }, [competences]);

  return <div>{competencesList}</div>;
};

export default CompetencesStack;
