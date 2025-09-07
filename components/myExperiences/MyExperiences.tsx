import React, { useRef, useState } from "react";
import Image from "next/image";

import { myExperiencesData } from "../data";

import { animationsStyles, myExperiencesStyles } from "#styles";
import { SimpleArray } from "#svg";
import { dateCalculator } from "#utils";

const MyExperiences = () => {
  const [stacksVisibility, setStacksVisibility] = useState(
    Array(myExperiencesData.length).fill(false)
  );
  const [stacks, setStacks] = useState(
    Array(myExperiencesData.length).fill(false)
  );
  const [rotatedStates, setRotatedStates] = useState(
    Array(myExperiencesData.length).fill(false)
  );

  const itemRefs = useRef([]);

  const handleToggleStacks = (index: number) => {
    const updatedStacks = [...stacks];
    updatedStacks[index] = !updatedStacks[index];
    setStacks(updatedStacks);

    const updatedStacksVisibility = [...stacksVisibility];
    updatedStacksVisibility[index] = !updatedStacksVisibility[index];
    setStacksVisibility(updatedStacksVisibility);

    setRotatedStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <div
      className={myExperiencesStyles.myExperiencesArea}
      id="myExperienceArea"
    >
      <div className="separationEnsemble">
        <div className="separationbar" />
        <h2>Mon parcours</h2>
        <div className="separationbar" />
      </div>

      <div className={myExperiencesStyles.myExperiencesContainer}>
        {myExperiencesData.map((experience, index) => (
          <div
            className={myExperiencesStyles.myExperiencesBlockContainer}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            key={experience.title}
          >
            <div
              className={myExperiencesStyles.myExperiencesDescriptionContainer}
            >
              <div className={myExperiencesStyles.myExperiencesTitleEnsemble}>
                <h3 className={myExperiencesStyles.myExperiencesTitle}>
                  {experience.title}
                </h3>
              </div>

              <p>
                Début : {experience.dateStartMonth}/{experience.dateStartYear}
                {experience.dateEndMonth === "now" ||
                experience.dateEndYear === "now"
                  ? " - En cours "
                  : ` - Fin ${experience.dateEndMonth}/${experience.dateEndYear}`}
                (
                {dateCalculator(
                  experience.dateStartMonth,
                  experience.dateStartYear,
                  experience.dateEndMonth,
                  experience.dateEndYear
                )}
                )
              </p>

              {experience.descriptions.map((description) => (
                <p key={description}>{description}</p>
              ))}

              <div className={myExperiencesStyles.myExperiencesLinksContainer}>
                {experience.projectCreated.map((project) => (
                  <a href={project.link} target="blank" key={project.title}>
                    <button
                      type="button"
                      className={myExperiencesStyles.myExperiencesLinkButton}
                    >
                      <h4
                        className={
                          myExperiencesStyles.myExperiencesLinkButtonText
                        }
                      >
                        {project.title}
                      </h4>
                    </button>
                  </a>
                ))}
              </div>

              <button
                type="button"
                className={myExperiencesStyles.stacksToggler}
                onClick={() => handleToggleStacks(index)}
              >
                <div
                  className={
                    rotatedStates[index] ? animationsStyles.rotate90deg : ""
                  }
                >
                  <SimpleArray />
                </div>
                <p style={{ marginLeft: "5px" }}>
                  {stacksVisibility[index] ? "Cacher" : "Voir"} les stacks
                </p>
              </button>
            </div>
            <div
              className={`${
                myExperiencesStyles.myExperiencesCompetencesContainer
              } ${stacks[index] ? myExperiencesStyles.fadeInAnimation : ""}`}
              style={stacks[index] ? { display: "flex" } : { display: "none" }}
              ref={(ref) => {
                itemRefs.current[index] = ref as never;
              }}
            >
              {experience.stacks.map((stack) => (
                <Image
                  src={`/images/competence/${stack.toLowerCase()}Logo.png`}
                  alt={stack}
                  title={stack}
                  width={35}
                  height={35}
                  key={stack}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyExperiences;
