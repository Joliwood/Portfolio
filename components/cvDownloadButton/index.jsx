import React from 'react';
import ArrowDown from '../svg/arrowDown/index';
import styles from '../../styles/headerBar.module.scss';

function CvDownloadButton() {
  return (
    <div className={styles.CvDownloadButtonContainer}>
      <a
      // It will search into public folder
        href="/CV Développeur Full Stack - Jolibois.pdf"
        download="CV Développeur Full Stack - Jolibois"
        className={styles.CvDownloadButton}
        target="_blank"
        rel="noreferrer"
      >
        CV
        <ArrowDown />
      </a>
    </div>
  );
}

export default CvDownloadButton;
