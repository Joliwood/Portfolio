import React from "react";
import "./styles.css";

function Footer() {
  return (
    <div className="footerArea">
      <p className="footerText">
        Site créé en React et hébergé par Netlify :&nbsp;
      </p>
      <a
        href="https://github.com/Joliwood/Portfolio"
        target="blank"
        className="footerText"
      >
        <p className="footerText">Voir le projet sur Github</p>
      </a>
    </div>
  );
}

export default Footer;
