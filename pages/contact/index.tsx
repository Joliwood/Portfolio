import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

import Footer from "../../components/Footer";

import { homeStyles, contactStyles, myExperiencesStyles } from "#styles";

const Contact = () => {
  // Base64 encoded phone number to prevent scraping by bots
  const [phone] = useState(() =>
    typeof window === "undefined" ? "" : atob("MDYgNjQgMzYgMjEgNzk="),
  );

  return (
    <div className={contactStyles.contactArea}>
      <Head>
        <title>
          Développeur Full Stack - JS | TS | SQL - Contact - Guillaume Jolibois
        </title>
        <link rel="canonical" href="https://guillaume-jolibois.fr/contact/" />
      </Head>

      <div className="separationEnsemble">
        <div className="separationbar" />
        <h2>Contact</h2>
        <div className="separationbar" />
      </div>

      <div className={contactStyles.contactContainer}>
        <div className={homeStyles.homeDescriptionContainer}>
          <div
            className={`${homeStyles.homeDescription} ${contactStyles.descriptionContainer}`}
          >
            <h1>Guillaume Jolibois</h1>
            <h2>Comment me contacter ?</h2>

            <address className={contactStyles.contactLinks}>
              <a
                href="https://www.linkedin.com/in/guillaume-jolibois-430426119/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>Linkedin</p>
              </a>
              <a href="mailto:jolibois.contact@gmail.com">
                <p>jolibois.contact@gmail.com</p>
              </a>
              <p>
                <span className={contactStyles.phoneNumber}>{phone}</span>
              </p>
            </address>

            <div className={homeStyles.homeLogosLinks}>
              <button
                type="button"
                className={myExperiencesStyles.myExperiencesLinkButton}
              >
                <Link href="/">
                  <h4
                    className={myExperiencesStyles.myExperiencesLinkButtonText}
                  >
                    Retourner au site
                  </h4>
                </Link>
              </button>
            </div>
          </div>
        </div>

        <div className={homeStyles.homeLine} />

        <Image
          src="/images/profilePicture.png"
          width={500}
          height={500}
          alt="Photo de profil de Guillaume Jolibois, développeur Full Stack"
          title="profile"
          className={`${homeStyles.homeProfilePicture} ${homeStyles.unselectable}`}
          priority
        />
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
