import React, { useState } from "react";
import styles from "../../styles/headerBar.module.css";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import PortfolioLogo from "../../public/images/portfolio-logo.png";
import Image from "next/image";

const HeaderBar = function () {
  const [toggleMenu, setToggleMenu] = useState(true);

  return (
    <div className={styles.headerBarArea}>
      <div className={styles.headerBarMain}>
        {/* <h2>Mon portfolio</h2> */}
        <ScrollLink
          to="homeArea"
          spy={true}
          smooth={true}
          offset={-250}
          duration={500}
          href="#home-area"
        >
          <Image src={PortfolioLogo} alt="GJ" title="Logo" />
        </ScrollLink>

        <div className={styles.headerBarBurgerMenuIcons}>
          {toggleMenu && (
            <RxHamburgerMenu
              className={styles.whiteIcon}
              size="2em"
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          )}
          {!toggleMenu && (
            <IoClose
              className={styles.whiteIcon}
              size="2em"
              onClick={() => setToggleMenu(!toggleMenu)}
            />
          )}
        </div>
      </div>

      <div
        className={`${styles.headerBarButtonsEnsemble}`}
        style={!toggleMenu ? { display: "flex" } : {}}
      >
        <ScrollLink
          to="homeArea"
          spy={true}
          smooth={true}
          offset={-250}
          duration={500}
          href="#home-area"
        >
          <button className={styles.headerBarButton}>
            <h3>Accueil</h3>
          </button>
        </ScrollLink>

        <ScrollLink
          to="competencesArea"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          href="#competences-area"
        >
          <button className={styles.headerBarButton}>
            <h3>Compétences</h3>
          </button>
        </ScrollLink>

        <ScrollLink
          to="myProjectsArea"
          spy={true}
          smooth={true}
          offset={-150}
          duration={500}
          href="#my-projects-area"
        >
          <button className={styles.headerBarButton}>
            <h3>Portfolio</h3>
          </button>
        </ScrollLink>

        <button className={styles.headerBarButton}>
          <Link href="/contact">
            <h3>Contact</h3>
          </Link>
        </button>
      </div>
    </div>
  );
};

export default HeaderBar;
