import React from "react";
import "./styles.css";
import ProfilePicture from "../images/profilePicture.jpeg";
import Footer from "../footer";

function Contact() {
  return (
    <div className="contactArea">
      <div className="competencesSeparationEnsemble">
        <div className="competencesSeparationbar"></div>
        <h2>Contact</h2>
        <div className="competencesSeparationbar"></div>
      </div>

      <div className="contactContainer">
        <div className="homeDescription">
          <h1>Guillaume Jolibois</h1>
          <h2>How to contact me ?</h2>
          <ul>
            <li>
              <a>
                <p>Linkedin</p>
              </a>
            </li>
            <li>
              <a class="mailto">
                <p>jolibois.contact@gmail.com</p>
              </a>
            </li>
          </ul>
          <div className="homeLogosLinks">
            <button className="myExperiencesLinkButton">
              <h4 className="myExperiencesLinkButtonText">Retourner au site</h4>
            </button>
          </div>
        </div>

        <img
          src={ProfilePicture}
          alt="profile"
          className="homeProfilePicture unselectable"
        />
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
