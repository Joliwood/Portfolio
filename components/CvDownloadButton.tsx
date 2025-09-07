import React from "react";

import { headerBarStyles } from "#styles";
import { ArrowDown } from "#svg";

const CvDownloadButton = () => {
  return (
    <div className={headerBarStyles.CvDownloadButtonContainer}>
      <a
        // It will search into public folder
        href="/CV Développeur Full Stack - Jolibois.pdf"
        download="CV Développeur Full Stack - Jolibois"
        className={headerBarStyles.CvDownloadButton}
        target="_blank"
        rel="noreferrer"
      >
        CV
        <ArrowDown />
      </a>
    </div>
  );
};

export default CvDownloadButton;
