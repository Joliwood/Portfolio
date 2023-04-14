import reactLogo from "../../images/competence/reactLogo.png";
import jsLogo from "../../images/competence/jsLogo.png";
// import mysqlLogo from "../../images/competence/mysqlLogo.png";
import NodeLogo from "../../svg/nodeLogo";
import reduxLogo from "../../images/competence/reduxLogo.png";
import jqueryLogo from "../../images/competence/jqueryLogo.png";
import seoLogo from "../../images/competence/seoLogo.png";
import gitLogo from "../../images/competence/gitLogo.png";
import netlifyLogo from "../../images/competence/netlifyLogo.png";
import figmaLogo from "../../images/competence/figmaLogo.png";
// import mangodbLogo from "../../images/competence/mangodbLogo.png";
import firebaseLogo from "../../images/competence/firebaseLogo.png";

export const frontCompetence = [
  {
    name: "React.js",
    img: reactLogo,
  },
  {
    name: "Javascript",
    img: jsLogo,
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
];
