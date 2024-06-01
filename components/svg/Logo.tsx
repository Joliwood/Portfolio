import React from 'react';

import { svgStyles } from '#styles';

const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      version="1.1"
      xmlSpace="preserve"
      className={svgStyles.logo}
      viewBox="0 0 674.568 663.131"
    >
      <defs>
        <linearGradient
          id="linearGradient25302"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="translate(279.34 358.847) scale(546.11256)"
          gradientUnits="userSpaceOnUse"
          spreadMethod="pad"
        >
          <stop offset="0" stopColor="#cfaa7a" stopOpacity="1" />
          <stop offset="1" stopColor="#ad8b61" stopOpacity="1" />
        </linearGradient>
        <linearGradient
          id="linearGradient25322"
          x1="0"
          x2="1"
          y1="0"
          y2="0"
          gradientTransform="translate(150.888 397.048) scale(351.92635)"
          gradientUnits="userSpaceOnUse"
          spreadMethod="pad"
        >
          <stop offset="0" stopColor="#414042" stopOpacity="1" />
          <stop offset="1" stopColor="#a6a8ab" stopOpacity="1" />
        </linearGradient>
      </defs>
      <g
        stroke="none"
        strokeWidth="7.13"
        transform="translate(-150.885 -45.29)"
      >
        <path
          fill="url(#linearGradient25302)"
          d="M360.245 64.15C527.86 83.723 720.24 143.818 702.791 342.145c-12.15 138.109-113.994 223.225-225.03 199.695-130.508-27.652-171.073-175.766-81.721-264.304 95.697-94.8 218.498-3.908 218.498-3.908-66.506-88.368-215.66-86.692-288.968 3.908-71.276 88.103-75.006 272.247 96.339 366.112 190.618 104.418 460.156-89.694 393.059-352.415C762.694 86.561 610.916 45.283 496.986 45.29c-77.017 0-136.741 18.86-136.741 18.86"
        />
        <path
          fill="url(#linearGradient25322)"
          d="M154.118 441.992c25.042 221.23 258.144 266.43 258.144 266.43-216.56-69.373-274.323-300.428-166.033-454.374 99.106-140.92 256.59-123.343 256.59-123.343-61.658-29.363-171.46-45.036-171.46-45.036-76.096 33.093-202.276 135.094-177.24 356.323"
        />
      </g>
    </svg>
  );
};

export default Logo;
