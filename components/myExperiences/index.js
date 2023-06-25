import React, { Fragment, useRef, useState } from "react";
import styles from "../../styles/myExperiences.module.scss";
import stylesAnimations from "../../styles/animations.module.scss";
import { MyExperiencesList } from "./myExperiencesList";
import Image from "next/image";
import SimpleArray from "../svg/simpleArray";

function MyExperiences() {
  const dateCalculator = (
    date_start_month,
    date_start_year,
    date_end_month,
    date_end_year
  ) => {
    let date_start = new Date(date_start_year, date_start_month, 1);
    let date_end;

    if (date_end_month === "now" || date_end_year === "now") {
      date_end = new Date();
    } else {
      date_end = new Date(date_end_year, date_end_month, 1);
    }

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
  };

  const [showStacks, setShowStacks] = useState(false);
  const [stacks, setStacks] = useState(
    Array(MyExperiencesList.length).fill(false)
  );

  const itemRefs = useRef([]);

  const handleToggleStacks = (index) => {
    const updatedStacks = [...stacks];
    updatedStacks[index] = !updatedStacks[index];
    setStacks(updatedStacks);
    setShowStacks(!showStacks);
  };

  return (
    <div className={styles.myExperiencesArea}>
      <div className="separationEnsemble">
        <div className="separationbar"></div>
        <h2>Mon parcours</h2>
        <div className="separationbar"></div>
      </div>

      <div className={styles.myExperiencesContainer}>
        {MyExperiencesList.map((item, index) => (
          <div
            className={styles.myExperiencesBlockContainer}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
            key={index}
          >
            <div className={styles.myExperiencesDescriptionContainer}>
              <div className={styles.myExperiencesTitleEnsemble}>
                <h3 className={styles.myExperiencesTitle}>{item.title}</h3>
              </div>

              <p>
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
                )}
                )
              </p>

              <p>{item.description}</p>

              <div className={styles.myExperiencesLinksContainer}>
                {item.project_created.map((item, index) => (
                  <a href={item.link} target="blank" key={index}>
                    <button className={styles.myExperiencesLinkButton}>
                      <h4 className={styles.myExperiencesLinkButtonText}>
                        {item.title}
                      </h4>
                    </button>
                  </a>
                ))}
              </div>

              <div
                className={styles.stacksToggler}
                onClick={() => handleToggleStacks(index)}
              >
                <div className={showStacks ? stylesAnimations.rotate90deg : ""}>
                  <SimpleArray />
                </div>
                <p style={{ marginLeft: "5px" }}>
                  {showStacks ? "Cacher" : "Voir"} les stacks
                </p>
              </div>
            </div>
            <div
              className={`${styles.myExperiencesCompetencesContainer} ${
                stacks[index] ? styles.fadeInAnimation : ""
              }`}
              style={stacks[index] ? { display: "flex" } : { display: "none" }}
              ref={(ref) => (itemRefs.current[index] = ref)}
            >
              {item.stacks.map((stack, index) => (
                <Image
                  src={"/images/competence/" + stack + "Logo.png"}
                  alt={stack}
                  title={stack}
                  width={35}
                  height={35}
                  key={index}
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
