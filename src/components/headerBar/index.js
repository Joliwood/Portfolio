import React from "react";
import "./styles.css";

function HeaderBar() {
  return (
    <div className="headerBarArea">
      <h2>Mon portfolio</h2>

      <div className="headerBarButtonsEnsemble">
        <button className="headerBarButton">
          <h3>Accueil</h3>
        </button>

        <button className="headerBarButton">
          <h3>Compétences</h3>
        </button>

        <button className="headerBarButton">
          <h3>Portfolio</h3>
        </button>

        <button className="headerBarButton">
          <h3>Contact</h3>
        </button>
      </div>
    </div>
  );
}

export default HeaderBar;
