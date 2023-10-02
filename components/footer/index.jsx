import React from 'react';
import styles from '../../styles/footer.module.scss';

function Footer() {
  return (
    <div className={styles.footerArea}>
      <p className={styles.footerText}>
        Site créé en React et Next, hébergé par Netlify :&nbsp;
      </p>
      <a
        href="https://github.com/Joliwood/Portfolio"
        target="blank"
        className={styles.footerText}
      >
        <p className={styles.footerText}>Voir le projet sur Github</p>
      </a>
    </div>
  );
}

export default Footer;
