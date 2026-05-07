import React from "react";

import { footerStyles } from "#styles";

const Footer = () => {
  return (
    <footer className={footerStyles.footerArea}>
      <p className={footerStyles.footerText}>
        Site créé en React et Next, hébergé par Vercel :&nbsp;
      </p>
      <a
        href="https://github.com/Joliwood/Portfolio"
        target="_blank"
        rel="noopener noreferrer"
        className={footerStyles.footerText}
      >
        <p className={footerStyles.footerText}>Voir le projet sur Github</p>
      </a>
    </footer>
  );
};

export default Footer;
