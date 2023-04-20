import React from "react";
import stylesContact from "../../styles/contact.module.css";
import stylesHome from "../../styles/home.module.css";
import stylesMyExperiences from "../../styles/myExperiences.module.css";
import ProfilePicture from "../../public/images/profilePicture.jpeg";
import Footer from "../../components/footer";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

function Contact() {
  return (
    <div className={stylesContact.contactArea}>
      <Head>
        <title>
          Guillaume Jolibois - Full Stack JavaScript Developer Contact
        </title>
        <link rel="canonical" href="https://guillaume-jolibois.fr/contact/" />
      </Head>

      <div className="separationEnsemble">
        <div className="separationbar"></div>
        <h2>Compétences</h2>
        <div className="separationbar"></div>
      </div>

      <div className={stylesContact.contactContainer}>
        <div className={stylesHome.homeDescription}>
          <h1>Guillaume Jolibois</h1>
          <h2>Comment me contacter ?</h2>

          <address className={stylesContact.contactLinks}>
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
              <span className={stylesContact.phoneNumber}>06 64 36 21 79</span>
            </p>
          </address>

          <div className={stylesHome.homeLogosLinks}>
            <button className={stylesMyExperiences.myExperiencesLinkButton}>
              <Link href="/">
                <h4 className={stylesMyExperiences.myExperiencesLinkButtonText}>
                  Retourner au site
                </h4>
              </Link>
            </button>
          </div>
        </div>

        <Image
          src={ProfilePicture}
          alt="profile"
          title="profile"
          className={`${stylesHome.homeProfilePicture} ${stylesHome.unselectable}`}
          priority
        />
      </div>

      <Footer />
    </div>
  );
}

export default Contact;
