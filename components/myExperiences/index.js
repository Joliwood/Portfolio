import React, { Fragment, useRef, useState } from "react";
import styles from "../../styles/myExperiences.module.scss";
import stylesAnimations from "../../styles/animations.module.scss";
import { MyExperiencesList } from "./myExperiencesList";
import Image from "next/image";
import SimpleArray from "../svg/simpleArray";

function MyExperiences() {
  const dateCalculator = (
<<<<<<< Updated upstream:components/myExperiences/index.js
    date_start_month,
    date_start_year,
    date_end_month,
    date_end_year
  ) => {
    let date_start = new Date(date_start_year, date_start_month, 1);
    let date_end;

    if (date_end_month === "now" || date_end_year === "now") {
      date_end = new Date();
=======
    dateStartMonth,
    dateStartYear,
    dateEndMonth,
    dateEndYear,
  ) => {
    const dateStart = new Date(dateStartYear, dateStartMonth, 1);
    let dateEnd;

    if (dateEndMonth === 'now' || dateEndYear === 'now') {
      dateEnd = new Date();
>>>>>>> Stashed changes:components/myExperiences/index.jsx
    } else {
      dateEnd = new Date(dateEndYear, dateEndMonth, 1);
    }

<<<<<<< Updated upstream:components/myExperiences/index.js
    let date_diff = date_end.getTime() - date_start.getTime();
    let nb_days = Math.round(date_diff / (1000 * 60 * 60 * 24));
    let nb_months = Math.round(nb_days / 30);
    let nb_years = Math.floor(nb_months / 12);

    if (nb_years < 1) {
      return nb_months + " mois";
    } else if (date_end_month === "now" || date_end_year === "now") {
      let currentDate = new Date();
      let current_diff = currentDate.getTime() - date_start.getTime();
      let current_nb_days = Math.round(current_diff / (1000 * 60 * 60 * 24));
      let current_nb_months = Math.round(current_nb_days / 30);
      let current_nb_years = Math.floor(current_nb_months / 12);
      if (current_nb_months > 12) {
        current_nb_months = current_nb_months - current_nb_years * 12;
      }
      if (current_nb_months == 12) {
        return current_nb_years + " an";
      }
      return current_nb_years + " ans " + current_nb_months + " mois";
    }

    return nb_years + " ans " + nb_months + " mois";
=======
    const dateDiff = dateEnd.getTime() - dateStart.getTime();
    const nbDays = Math.round(dateDiff / (1000 * 60 * 60 * 24));
    const nbMonths = Math.round(nbDays / 30);
    const nbYears = Math.floor(nbMonths / 12);

    if (nbYears < 1) {
      return `${nbMonths} mois`;
    } if (dateEndMonth === 'now' || dateEndYear === 'now') {
      const currentDate = new Date();
      const currentDiff = currentDate.getTime() - dateStart.getTime();
      const currentNbDays = Math.round(currentDiff / (1000 * 60 * 60 * 24));
      let currentNbMonths = Math.round(currentNbDays / 30);
      const currentNbYears = Math.floor(currentNbMonths / 12);
      if (currentNbMonths > 12) {
        currentNbMonths -= currentNbYears * 12;
      }
      if (currentNbMonths === 12) {
        return `${currentNbYears} an`;
      }
      return `${currentNbYears} ans ${currentNbMonths} mois`;
    }

    return `${nbYears} ans ${nbMonths} mois`;
>>>>>>> Stashed changes:components/myExperiences/index.jsx
  };

  const [stacksVisibility, setStacksVisibility] = useState(
    Array(MyExperiencesList.length).fill(false)
  );
  const [stacks, setStacks] = useState(
    Array(MyExperiencesList.length).fill(false)
  );
  const [rotatedStates, setRotatedStates] = useState(
    Array(MyExperiencesList.length).fill(false)
  );

  const itemRefs = useRef([]);

  const handleToggleStacks = (index) => {
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
    <div className={styles.myExperiencesArea}>
      <div className="separationEnsemble">
        <div className="separationbar"></div>
        <h2>Mon parcours</h2>
        <div className="separationbar"></div>
      </div>

      <div className={styles.myExperiencesContainer}>
        {MyExperiencesList.map((experience, index) => (
          <div
            className={styles.myExperiencesBlockContainer}
<<<<<<< Updated upstream:components/myExperiences/index.js
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            key={index}
=======
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            key={experience.title}
>>>>>>> Stashed changes:components/myExperiences/index.jsx
          >
            <div className={styles.myExperiencesDescriptionContainer}>
              <div className={styles.myExperiencesTitleEnsemble}>
                <h3 className={styles.myExperiencesTitle}>{experience.title}</h3>
              </div>

              <p>
<<<<<<< Updated upstream:components/myExperiences/index.js
                Début : {item.date_start_month}/{item.date_start_year}
                {item.date_end_month === "now" || item.date_end_year === "now"
                  ? " - En cours "
                  : " - Fin " + item.date_end_month + "/" + item.date_end_year}
                (
                {dateCalculator(
                  item.date_start_month,
                  item.date_start_year,
                  item.date_end_month,
                  item.date_end_year
=======
                Début :
                {' '}
                {experience.dateStartMonth}
                /
                {experience.dateStartYear}
                {experience.dateEndMonth === 'now' || experience.dateEndYear === 'now'
                  ? ' - En cours '
                  : ` - Fin ${experience.dateEndMonth}/${experience.dateEndYear}`}
                (
                {dateCalculator(
                  experience.dateStartMonth,
                  experience.dateStartYear,
                  experience.dateEndMonth,
                  experience.dateEndYear,
>>>>>>> Stashed changes:components/myExperiences/index.jsx
                )}
                )
              </p>

              <p>{experience.description}</p>

              <div className={styles.myExperiencesLinksContainer}>
<<<<<<< Updated upstream:components/myExperiences/index.js
                {item.project_created.map((item, index) => (
                  <a href={item.link} target="blank" key={index}>
                    <button className={styles.myExperiencesLinkButton}>
=======
                {experience.project_created.map((project) => (
                  <a href={project.link} target="blank" key={project.title}>
                    <button
                      type="button"
                      className={styles.myExperiencesLinkButton}
                    >
>>>>>>> Stashed changes:components/myExperiences/index.jsx
                      <h4 className={styles.myExperiencesLinkButtonText}>
                        {project.title}
                      </h4>
                    </button>
                  </a>
                ))}
              </div>

              <button
                type="button"
                className={styles.stacksToggler}
                onClick={() => handleToggleStacks(index)}
              >
                <div
                  className={
                    rotatedStates[index] ? stylesAnimations.rotate90deg : ""
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
              className={`${styles.myExperiencesCompetencesContainer} ${
                stacks[index] ? styles.fadeInAnimation : ""
              }`}
<<<<<<< Updated upstream:components/myExperiences/index.js
              style={stacks[index] ? { display: "flex" } : { display: "none" }}
              ref={(ref) => (itemRefs.current[index] = ref)}
=======
              style={stacks[index] ? { display: 'flex' } : { display: 'none' }}
              ref={(ref) => { itemRefs.current[index] = ref; }}
>>>>>>> Stashed changes:components/myExperiences/index.jsx
            >
              {experience.stacks.map((stack) => (
                <Image
                  src={"/images/competence/" + stack + "Logo.png"}
                  alt={stack}
                  title={stack}
                  width={35}
                  height={35}
                  key={stack.value}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyExperiences;
