import React, { useState, useEffect } from 'react';
import { IoClose } from 'react-icons/io5';
import { RxHamburgerMenu } from 'react-icons/rx';
import { MdOutlineNightsStay } from 'react-icons/md';
import { BsSun } from 'react-icons/bs';
import { Link as ScrollLink } from 'react-scroll';
import Link from 'next/link';
// import stylesSvg from '../../styles/svg.module.scss';
import stylesAnimations from '../../styles/animations.module.scss';
import styles from '../../styles/headerBar.module.scss';
// import Image from "next/image";
import Logo from '../svg/logo/index';
import CvDownloadButton from '../cvDownloadButton/index';

function HeaderBar() {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [animatedMenu, setAnimatedMenu] = useState(null);
  const [lightTheme, setLightTheme] = useState(false);

  const changeTheme = () => {
    const rootTheme = document.querySelector(':root');
    rootTheme.classList.toggle('lightTheme');
    setLightTheme(!lightTheme);
  };

  useEffect(() => {
    const disableBodyScroll = () => {
      document.body.style.overflow = 'hidden';
    };

    const enableBodyScroll = () => {
      document.body.style.overflow = 'auto';
    };

    if (toggleMenu) {
      enableBodyScroll();
    } else {
      disableBodyScroll();
    }
  }, [toggleMenu]);

  return (
    <div className={styles.headerBarArea}>
      <div className={styles.headerBarMain}>
        <ScrollLink
          to="homeArea"
          spy
          smooth
          offset={-250}
          duration={500}
          href="#home-area"
        >
          <Logo />
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
        className={`
          ${styles.headerBarButtonsEnsemble}
          ${animatedMenu ? stylesAnimations.headerBarAnimationOn : ''}
          ${!animatedMenu && animatedMenu !== null ? stylesAnimations.headerBarAnimationOff : ''}
        `}
        style={!toggleMenu ? { display: 'flex' } : {}}
      >
        <ScrollLink
          to="homeArea"
          spy
          smooth
          offset={-250}
          duration={500}
          href="#home-area"
          onClick={() => setToggleMenu(true)}
        >
          <button
            type="button"
            className={styles.headerBarButton}
          >
            <h3>Accueil</h3>
          </button>
        </ScrollLink>
        <ScrollLink
          to="competencesArea"
          spy
          smooth
          offset={-150}
          duration={500}
          href="#competences-area"
          onClick={() => setToggleMenu(true)}
        >
          <button
            type="button"
            className={styles.headerBarButton}
          >
            <h3>Compétences</h3>
          </button>
        </ScrollLink>
        <ScrollLink
          to="myProjectsArea"
          spy
          smooth
          offset={-150}
          duration={500}
          href="#my-projects-area"
          onClick={() => setToggleMenu(true)}
        >
          <button
            type="button"
            className={styles.headerBarButton}
          >
            <h3>Portfolio</h3>
          </button>
        </ScrollLink>
        <button
          type="button"
          className={styles.headerBarButton}
        >
          <Link href="/contact">
            <h3>Contact</h3>
          </Link>
        </button>
        <CvDownloadButton />
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
}

export default HeaderBar;
