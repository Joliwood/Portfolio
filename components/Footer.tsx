import React from "react";

import { footerStyles } from "#styles";

const Footer = () => {
  return (
    <div className={footerStyles.footerArea}>
      <p className={footerStyles.footerText}>
        Site créé en React et Next, hébergé par Netlify :&nbsp;
      </p>
      <a
        href="https://github.com/Joliwood/Portfolio"
        target="blank"
        className={footerStyles.footerText}
      >
        <p className={footerStyles.footerText}>Voir le projet sur Github</p>
      </a>
    </div>
  );
};

export default Footer;
