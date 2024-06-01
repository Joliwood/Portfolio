import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Footer from '../../components/Footer';

import { homeStyles, contactStyles, myExperiencesStyles } from '#styles';

const Contact = () => {
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
                target="blank"
              >
                <p>Linkedin</p>
              </a>
              <a href="mailto:jolibois.contact@gmail.com">
                <p>jolibois.contact@gmail.com</p>
              </a>
              <p>
                <span className={contactStyles.phoneNumber}>
                  06 64 36 21 79
                </span>
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
          alt="profile"
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
