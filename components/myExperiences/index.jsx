import React, { useRef, useState } from 'react';
import Image from 'next/image';
import styles from '../../styles/myExperiences.module.scss';
import stylesAnimations from '../../styles/animations.module.scss';
import MyExperiencesList from './myExperiencesList';
import SimpleArray from '../svg/simpleArray';

function MyExperiences() {
  const dateCalculator = (
    dateStartMonth,
    dateStartYear,
    dateEndMonth,
    dateEndYear,
  ) => {
    const dateStart = new Date(dateStartYear, dateStartMonth, 1);
    let dateEnd;

    if (dateEndMonth === 'now' || dateEndYear === 'now') {
      dateEnd = new Date();
    } else {
      dateEnd = new Date(dateEndYear, dateEndMonth, 1);
    }

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
  };

  const [stacksVisibility, setStacksVisibility] = useState(
    Array(MyExperiencesList.length).fill(false),
  );
  const [stacks, setStacks] = useState(
    Array(MyExperiencesList.length).fill(false),
  );
  const [rotatedStates, setRotatedStates] = useState(
    Array(MyExperiencesList.length).fill(false),
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
        <div className="separationbar" />
        <h2>Mon parcours</h2>
        <div className="separationbar" />
      </div>

      <div className={styles.myExperiencesContainer}>
        {MyExperiencesList.map((experience, index) => (
          <div
            className={styles.myExperiencesBlockContainer}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
            key={experience.title}
          >
            <div className={styles.myExperiencesDescriptionContainer}>
              <div className={styles.myExperiencesTitleEnsemble}>
                <h3 className={styles.myExperiencesTitle}>{experience.title}</h3>
              </div>

              <p>
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
                )}
                )
              </p>

              <p>{experience.description}</p>

              <div className={styles.myExperiencesLinksContainer}>
                {experience.projectCreated.map((project) => (
                  <a href={project.link} target="blank" key={project.title}>
                    <button
                      type="button"
                      className={styles.myExperiencesLinkButton}
                    >
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
                    rotatedStates[index] ? stylesAnimations.rotate90deg : ''
                  }
                >
                  <SimpleArray />
                </div>
                <p style={{ marginLeft: '5px' }}>
                  {stacksVisibility[index] ? 'Cacher' : 'Voir'}
                  {' '}
                  les stacks
                </p>
              </button>
            </div>
            <div
              className={`${styles.myExperiencesCompetencesContainer} ${stacks[index] ? styles.fadeInAnimation : ''
              }`}
              style={stacks[index] ? { display: 'flex' } : { display: 'none' }}
              ref={(ref) => { itemRefs.current[index] = ref; }}
            >
              {experience.stacks.map((stack) => (
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
        ))}
      </div>
    </div>
  );
}

export default MyExperiences;
