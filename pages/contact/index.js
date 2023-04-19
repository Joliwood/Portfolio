import React from "react";
import "../../styles/Contact.module.css";
import Footer from "../../components/footer";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

function Contact() {
  return (
    <div className="contactArea">
      <Head>
        <title>
          Guillaume Jolibois - Full Stack JavaScript Developer Contact
        </title>
        <link rel="canonical" href="https://guillaume-jolibois.fr/contact/" />
      </Head>

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
              <Link href="/">
                <h4 className="myExperiencesLinkButtonText">
                  Retourner au site
                </h4>
              </Link>
            </button>
          </div>
        </div>

        <Image
          src="../public/images/profilePicture.jpeg"
          alt="profile"
          title="profile"
          className="homeProfilePicture unselectable"
        />
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
