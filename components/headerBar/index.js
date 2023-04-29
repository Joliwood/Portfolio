import React, { useState } from "react";
import styles from "../../styles/headerBar.module.css";
import stylesAnimations from "../../styles/animations.module.css";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineNightsStay } from "react-icons/md";
import { BsSun } from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import PortfolioLogo from "../../public/images/portfolio-logo.png";
import Image from "next/image";

const HeaderBar = function () {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [animatedMenu, setAnimatedMenu] = useState(null);
  const [lightTheme, setLightTheme] = useState(false);

  const changeTheme = () => {
    const rootTheme = document.querySelector(":root");
    rootTheme.classList.toggle("lightTheme");
    setLightTheme(!lightTheme);
  };

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

        <div className={styles.themeSwitchContainerSmallDevices}>
          {lightTheme ? (
            <MdOutlineNightsStay
              className={styles.themeIcon}
              onClick={changeTheme}
            />
          ) : (
            <BsSun className={styles.themeIcon} onClick={changeTheme} />
          )}
        </div>

        <div className={styles.headerBarBurgerMenuIcons}>
          {toggleMenu && (
            <RxHamburgerMenu
              className={styles.whiteIcon}
              size="2em"
              onClick={() => {
                setToggleMenu(!toggleMenu);
                setAnimatedMenu(true);
              }}
            />
          )}
          {!toggleMenu && (
            <IoClose
              className={styles.whiteIcon}
              size="2em"
              onClick={() => {
                setToggleMenu(!toggleMenu);
                setAnimatedMenu(false);
              }}
            />
          )}
        </div>
      </div>

      <div
        className={`${styles.headerBarButtonsEnsemble} ${
          animatedMenu
            ? stylesAnimations.headerBarAnimationOn
            : !animatedMenu && animatedMenu !== null
            ? stylesAnimations.headerBarAnimationOff
            : ""
        }`}
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
        <div className={styles.themeSwitchContainer}>
          {lightTheme ? (
            <MdOutlineNightsStay
              className={styles.themeIcon}
              onClick={changeTheme}
            />
          ) : (
            <BsSun className={styles.themeIcon} onClick={changeTheme} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
