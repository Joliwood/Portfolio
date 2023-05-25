import reactLogo from "../../../public/images/competence/reactLogo.png";
import jsLogo from "../../../public/images/competence/jsLogo.png";
// import mysqlLogo from "../../../public/images/competence/mysqlLogo.png";
import NodeLogo from "../../svg/nodeLogo";
import reduxLogo from "../../../public/images/competence/reduxLogo.png";
import jqueryLogo from "../../../public/images/competence/jqueryLogo.png";
import seoLogo from "../../../public/images/competence/seoLogo.png";
import gitLogo from "../../../public/images/competence/gitLogo.png";
import netlifyLogo from "../../../public/images/competence/netlifyLogo.png";
import figmaLogo from "../../../public/images/competence/figmaLogo.png";
// import mangodbLogo from "../../../public/images/competence/mangodbLogo.png";
import firebaseLogo from "../../../public/images/competence/firebaseLogo.png";
import SassLogo from "../../svg/sassLogo";
import nextLogo from "../../../public/images/competence/nextLogo.png";
import expressLogo from "../../../public/images/competence/expressLogo.png";
import renderLogo from "../../../public/images/competence/renderLogo.png";
import tailwindcssLogo from "../../../public/images/competence/tailwindcssLogo.png";
import sqlLogo from "../../../public/images/competence/sqlLogo.png";
import ejsLogo from "../../../public/images/competence/ejsLogo.png";
import psqlLogo from "../../../public/images/competence/psqlLogo.png";

export const frontCompetence = [
  {
    name: "Javascript",
    img: jsLogo,
  },
  {
    name: "React.js",
    img: reactLogo,
  },
  {
    name: "Next.js",
    img: nextLogo,
  },
  {
    name: "Tailwindcss",
    img: tailwindcssLogo,
  },
];

export const backCompetence = [
  // {
  //   name: "MySQL",
  //   img: mysqlLogo,
  // },
  {
    name: "Node.js",
    svg: <NodeLogo />,
    // Même avec un svg, le map fonctionne, voir fichier src/components/competences/index.js
  },
  {
    name: "Express",
    img: expressLogo,
  },
  {
    name: "SQL",
    img: sqlLogo,
  },
  {
    name: "Ejs",
    img: ejsLogo,
  },
  {
    name: "Postgres",
    img: psqlLogo,
  },
];

export const technoCompetence = [
  {
    name: "Redux",
    img: reduxLogo,
  },
  {
    name: "JQuery",
    img: jqueryLogo,
  },
  {
    name: "SEO",
    img: seoLogo,
  },
  {
    name: "Sass",
    svg: <SassLogo />,
  },
];

export const toolsCompetence = [
  {
    name: "Git",
    img: gitLogo,
  },
  {
    name: "Netlify",
    img: netlifyLogo,
  },
  {
    name: "Figma",
    img: figmaLogo,
  },
  // {
  //   name: "MangoDB",
  //   img: mangodbLogo,
  // },
  {
    name: "Firebase",
    img: firebaseLogo,
  },
  {
    name: "Render.com",
    img: renderLogo,
  },
];
