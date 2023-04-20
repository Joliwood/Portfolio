import React from "react";
import styles from "../../../styles/linkedinLogo.module.css";

function LinkedinLogo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 70 70"
      className={styles.linkedinLogo}
    >
      <title>Linkedin SVG</title>
      <g clipPath="url(#clip0_1_19)">
        <path
          className={styles.linkedinLogoColor}
          d="M27.35 47.833h-6.222V27.615h6.223v20.218zm-3.11-22.812c-2.244 0-3.368-1.038-3.368-3.111a2.876 2.876 0 01.972-2.205 3.376 3.376 0 012.395-.906c2.244 0 3.368 1.042 3.368 3.115 0 2.073-1.12 3.107-3.368 3.107zm26.187 22.812h-6.35V36.556c0-2.937-1.043-4.407-3.115-4.407-1.641 0-2.719.821-3.244 2.462-.167.26-.256.782-.256 1.556v11.666h-6.35v-13.74c0-3.11-.048-5.269-.13-6.478h5.445l.39 2.718c1.426-2.162 3.5-3.24 6.35-3.24 2.166 0 3.912.755 5.25 2.268 1.345 1.513 2.014 3.695 2.014 6.549v11.923h-.004zM35 70C15.7 70 0 54.3 0 35S15.7 0 35 0s35 15.7 35 35-15.7 35-35 35zm0-62.222C19.993 7.778 7.778 19.993 7.778 35c0 15.007 12.215 27.222 27.222 27.222 15.007 0 27.222-12.215 27.222-27.222C62.222 19.993 50.007 7.778 35 7.778z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_1_19">
          <path fill="#fff" d="M0 0H70V70H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
}

export default LinkedinLogo;
