import React, { useRef, useEffect, useState } from "react";
import {
  frontCompetence,
  technoCompetence,
  toolsCompetence,
  backCompetence,
} from "./listedCompetence";
import styles from "../../styles/competences.module.css";
import stylesAnimations from "../../styles/animations.module.css";
import Image from "next/image";

function Competences() {
  const refs = useRef([]);

  let bottomOfScreen = 0;
  // const [bottomOfScreen, setBottomOfScreen] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      bottomOfScreen = window.scrollY + window.innerHeight;
      // setBottomOfScreen(window.scrollY + window.innerHeight);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        // Récupération de la position y de chaque élément entry, mais sans contexte
        const rect = entry.target.getBoundingClientRect();

        // Ajout du contexte, donc par rapport au document
        const rectY = rect.top + window.pageYOffset;

        if (entry.isIntersecting) {
          entry.target.classList.add(stylesAnimations.active);
        } else if (bottomOfScreen < rectY) {
          entry.target.classList.remove(stylesAnimations.active);
        }

        // if (rect.top - rect.height / 2 + 100 < window.innerHeight) {
        //   entry.target.classList.add(stylesAnimations.active);
        // } else if (rect.top >= window.innerHeight) {
        //   entry.target.classList.remove(stylesAnimations.active);
        // }
      });
    };

    const observer = new IntersectionObserver(handleIntersection);

    refs.current.forEach((ref) => observer.observe(ref));

    return () => observer.disconnect();
  }, [refs]);

  const addRef = (ref) => {
    refs.current.push(ref);
  };

  return (
    <div className={styles.competencesArea} id="competencesArea">
      <div className="separationEnsemble">
        <div className="separationbar"></div>
        <h2>Compétences</h2>
        <div className="separationbar"></div>
      </div>

      <div className={styles.competencesContainer}>
        <div
          className={stylesAnimations.fadeInBlock}
          ref={(ref) => addRef(ref)}
        >
          <div className={styles.individualCompetenceBlock}>
            <h3 className={styles.ensembleCompetencesTitle}>Front End</h3>
            <div>
              {frontCompetence.map((item) => (
                <div key={item.name}>
                  {item.svg ? (
                    <div className={styles.competenceLogoContainer}>
                      {item.svg}
                    </div>
                  ) : (
                    <div className={styles.competenceLogoContainer}>
                      <Image src={item.img} alt={item.name} title={item.name} />
                    </div>
                  )}
                  <h4 className={styles.competenceTitle}>{item.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={stylesAnimations.fadeInBlock}
          ref={(ref) => addRef(ref)}
        >
          <div
            className={stylesAnimations.competencesLineConnection}
            ref={(ref) => addRef(ref)}
          ></div>
          <div className={styles.individualCompetenceBlock}>
            <h3 className={styles.ensembleCompetencesTitle}>Back End</h3>
            <div>
              {backCompetence.map((item) => (
                <div key={item.name}>
                  {item.svg ? (
                    <div className={styles.competenceLogoContainer}>
                      {item.svg}
                    </div>
                  ) : (
                    <div className={styles.competenceLogoContainer}>
                      <Image src={item.img} alt={item.name} title={item.name} />
                    </div>
                  )}
                  <h4 className={styles.competenceTitle}>{item.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={stylesAnimations.fadeInBlock}
          ref={(ref) => addRef(ref)}
        >
          <div
            className={stylesAnimations.competencesLineConnection}
            ref={(ref) => addRef(ref)}
          ></div>
          <div className={styles.individualCompetenceBlock}>
            <h3 className={styles.ensembleCompetencesTitle}>
              Les technos que j&apos;ai travaillé
            </h3>
            <div>
              {technoCompetence.map((item) => (
                <div key={item.name}>
                  {item.svg ? (
                    <div className={styles.competenceLogoContainer}>
                      {item.svg}
                    </div>
                  ) : (
                    <div className={styles.competenceLogoContainer}>
                      <Image src={item.img} alt={item.name} title={item.name} />
                    </div>
                  )}
                  <h4 className={styles.competenceTitle}>{item.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          className={stylesAnimations.fadeInBlock}
          ref={(ref) => addRef(ref)}
        >
          <div
            className={stylesAnimations.competencesLineConnection}
            ref={(ref) => addRef(ref)}
          ></div>
          <div className={styles.individualCompetenceBlock}>
            <h3 className={styles.ensembleCompetencesTitle}>
              Les outils que j&apos;ai utilisé
            </h3>
            <div>
              {toolsCompetence.map((item) => (
                <div key={item.name}>
                  {item.svg ? (
                    <div className={styles.competenceLogoContainer}>
                      {item.svg}
                    </div>
                  ) : (
                    <div className={styles.competenceLogoContainer}>
                      <Image src={item.img} alt={item.name} title={item.name} />
                    </div>
                  )}
                  <h4 className={styles.competenceTitle}>{item.name}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Competences;
