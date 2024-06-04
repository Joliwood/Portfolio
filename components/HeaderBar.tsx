import { BsSun } from 'react-icons/bs';
import { IoClose } from 'react-icons/io5';
import { Link as ScrollLink } from 'react-scroll';
import { MdOutlineNightsStay } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import CvDownloadButton from './CvDownloadButton';

import { animationsStyles, headerBarStyles } from '#styles';
import { Logo } from '#svg';

const HeaderBar = () => {
  const [toggleMenu, setToggleMenu] = useState(true);
  const [animatedMenu, setAnimatedMenu] = useState<boolean | null>(null);
  const [lightTheme, setLightTheme] = useState(false);

  const changeTheme = () => {
    const rootTheme = document.querySelector(':root');
    rootTheme?.classList.toggle('lightTheme');
    setLightTheme(!lightTheme);
  };

  const disableBodyScroll = () => {
    document.body.style.overflow = 'hidden';
  };

  const enableBodyScroll = () => {
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    if (toggleMenu) {
      enableBodyScroll();
    } else {
      disableBodyScroll();
    }
  }, [toggleMenu]);

  return (
    <div className={headerBarStyles.headerBarArea}>
      <div className={headerBarStyles.headerBarMain}>
        <ScrollLink
          to="homeArea"
          spy
          smooth
          offset={-250}
          duration={500}
        >
          <Logo />
        </ScrollLink>

        <div className={headerBarStyles.themeSwitchContainerSmallDevices}>
          {lightTheme ? (
            <MdOutlineNightsStay
              className={headerBarStyles.themeIcon}
              onClick={changeTheme}
            />
          ) : (
            <BsSun className={headerBarStyles.themeIcon} onClick={changeTheme} />
          )}
        </div>

        <div className={headerBarStyles.headerBarBurgerMenuIcons}>
          {toggleMenu && (
            <RxHamburgerMenu
              className={headerBarStyles.whiteIcon}
              size="2em"
              onClick={() => {
                setToggleMenu(!toggleMenu);
                setAnimatedMenu(true);
              }}
            />
          )}
          {!toggleMenu && (
            <IoClose
              className={headerBarStyles.whiteIcon}
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
          ${headerBarStyles.headerBarButtonsEnsemble}
          ${animatedMenu ? animationsStyles.headerBarAnimationOn : ''}
          ${!animatedMenu && animatedMenu !== null ? animationsStyles.headerBarAnimationOff : ''}
        `}
        style={!toggleMenu ? { display: 'flex' } : {}}
      >
        <ScrollLink
          to="homeArea"
          spy
          smooth
          offset={-250}
          duration={500}
          onClick={() => setToggleMenu(true)}
        >
          <button
            type="button"
            className={headerBarStyles.headerBarButton}
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
          onClick={() => setToggleMenu(true)}
        >
          <button
            type="button"
            className={headerBarStyles.headerBarButton}
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
          onClick={() => setToggleMenu(true)}
        >
          <button
            type="button"
            className={headerBarStyles.headerBarButton}
          >
            <h3>Portfolio</h3>
          </button>
        </ScrollLink>
        <ScrollLink
          to="myExperienceArea"
          spy
          smooth
          offset={-150}
          duration={500}
          onClick={() => setToggleMenu(true)}
        >
          <button
            type="button"
            className={headerBarStyles.headerBarButton}
          >
            <h3>Mon experience</h3>
          </button>
        </ScrollLink>
        <button
          type="button"
          className={headerBarStyles.headerBarButton}
        >
          <Link
            href="/contact"
            onClick={() => setToggleMenu(true)}
          >
            <h3>Contact</h3>
          </Link>
        </button>
        <CvDownloadButton />
        <div className={headerBarStyles.themeSwitchContainer}>
          {lightTheme ? (
            <MdOutlineNightsStay
              className={headerBarStyles.themeIcon}
              onClick={changeTheme}
            />
          ) : (
            <BsSun className={headerBarStyles.themeIcon} onClick={changeTheme} />
          )}
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
