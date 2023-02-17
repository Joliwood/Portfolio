import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link } from "react-scroll";

function HeaderBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [largeur, setLargeur] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setLargeur(window.innerWidth);

      if (window.innerWidth > 1024) {
        setToggleMenu(false);
      }
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  }, []);

  return (
    <div className="headerBarArea">
      <h2>Mon portfolio</h2>

      <div className="headerBarButtonsEnsemble">
        <Link
          to="homeArea"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <button className="headerBarButton">
            <h3>Accueil</h3>
          </button>
        </Link>

        <Link
          to="competencesArea"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <button className="headerBarButton">
            <h3>Compétences</h3>
          </button>
        </Link>

        <Link
          to="myProjectsArea"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <button className="headerBarButton">
            <h3>Portfolio</h3>
          </button>
        </Link>

        <button className="headerBarButton">
          <h3>Contact</h3>
        </button>
      </div>
    </div>
  );
}

export default HeaderBar;
