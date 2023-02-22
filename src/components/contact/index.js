import React from "react";
import "./styles.css";
import ProfilePicture from "../images/profilePicture.jpeg";
import Footer from "../footer";
import { Link as LinkBrowser } from "react-router-dom";

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
          <h2>Comment me contacter ?</h2>

          <address className="contactLinks">
            <a
              href="https://www.linkedin.com/in/guillaume-jolibois-430426119/"
              target="blank"
            >
              <p>Linkedin</p>
            </a>
            <a class="mailto" href="mailto:jolibois.contact@gmail.com">
              <p>jolibois.contact@gmail.com</p>
            </a>
            <p>
              <span className="phoneNumber">06 64 36 21 79</span>
            </p>
          </address>

          <div className="homeLogosLinks">
            <button className="myExperiencesLinkButton">
              <LinkBrowser to="/">
                <h4 className="myExperiencesLinkButtonText">
                  Retourner au site
                </h4>
              </LinkBrowser>
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
