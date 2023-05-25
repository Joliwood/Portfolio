import React from "react";
import styles from "../../../styles/svg.module.scss";

function Logo() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      xmlSpace="preserve"
      className={styles.logo}
      viewBox="0 0 178.479 175.454"
    >
      <defs>
        <linearGradient
          id="linearGradient25322"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="matrix(93.11385 0 0 93.11385 14.185 145.15)"
          gradientUnits="userSpaceOnUse"
          spreadMethod="pad"
        >
          <stop offset="0" stopColor="#414042" stopOpacity="1"></stop>
          <stop offset="1" stopColor="#a6a8ab" stopOpacity="1"></stop>
        </linearGradient>
        <linearGradient
          id="linearGradient25302"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="translate(48.171 135.042) scale(144.49228)"
          gradientUnits="userSpaceOnUse"
          spreadMethod="pad"
        >
          <stop offset="0" stopColor="#cfaa7a" stopOpacity="1"></stop>
          <stop offset="1" stopColor="#ad8b61" stopOpacity="1"></stop>
        </linearGradient>
      </defs>
      <g
        stroke="none"
        strokeWidth="1.887"
        transform="translate(-14.184 -52.08)"
      >
        <path
          fill="url(#linearGradient25302)"
          d="M69.577 57.07c44.348 5.178 95.249 21.079 90.632 73.553-3.215 36.541-30.16 59.061-59.539 52.836-34.53-7.317-45.263-46.505-21.622-69.931 25.32-25.082 57.81-1.034 57.81-1.034-17.596-23.38-57.06-22.937-76.455 1.034-18.859 23.31-19.846 72.032 25.49 96.867 50.434 27.628 121.749-23.731 103.996-93.243C176.06 63 135.9 52.078 105.756 52.08c-20.377 0-36.179 4.99-36.179 4.99"
        ></path>
        <path
          fill="url(#linearGradient25322)"
          d="M15.04 157.04c6.625 58.534 68.3 70.493 68.3 70.493-57.298-18.355-72.581-79.488-43.93-120.22C65.632 70.03 107.3 74.68 107.3 74.68 90.986 66.91 61.934 62.763 61.934 62.763 41.801 71.52 8.416 98.507 15.04 157.041"
        ></path>
      </g>
    </svg>
  );
}

export default Logo;
