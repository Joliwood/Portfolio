import NetflixProject from "../../../public/images/projects/netflixProject.png";
import LinkedinProject from "../../../public/images/projects/linkedinProject.png";
import BacklistProject from "../../../public/images/projects/backlistProject.png";
import SqlShowcaseProject from "../../../public/images/projects/sqlShowcaseProject.png";
import mvcArchitectureProject from "../../../public/images/projects/mvcArchitectureProject.png";
import coffeeTimeProject from "../../../public/images/projects/coffeeTimeProject.png";

export const MyProjectsList = [
  {
    id: 1,
    title: "Clone Netflix",
    img: NetflixProject,
    imgTag: "Netflix project",
    link: "https://gj-netlix-clone.netlify.app/",
    github: "https://github.com/Joliwood/Netflix-clone",
    stacks: ["react", "api", "netlify", "jest"],
  },

  {
    id: 2,
    title: "Clone Linkedin",
    img: LinkedinProject,
    imgTag: "Linkedin project",
    link: "https://gj-linkedin-clone.netlify.app/",
    github: "https://github.com/Joliwood/linkedinClone",
    stacks: ["react", "firebase", "netlify", "styledComponents"],
  },
  {
    id: 3,
    title: "BackList",
    img: BacklistProject,
    imgTag: "BackList project",
    link: "https://backlist.onrender.com/",
    github: "https://github.com/Joliwood/todo-list-back",
    stacks: ["node", "ejs", "express", "render", "tailwindcss"],
  },
  {
    id: 4,
    title: "SQL Showcase",
    img: SqlShowcaseProject,
    imgTag: "SQL Showcase",
    link: "https://sql-showcase.onrender.com/",
    github: "https://github.com/Joliwood/sql-showcase",
    stacks: ["node", "ejs", "express", "sql", "psql", "render", "bootstrap"],
  },
  {
    id: 5,
    title: "MVC Architecture",
    img: mvcArchitectureProject,
    imgTag: "MVC Architecture",
    link: "https://mvc-architecture.onrender.com/",
    github: "https://github.com/Joliwood/MVC-Architecture",
    stacks: [
      "node",
      "ejs",
      "express",
      "sql",
      "psql",
      "sequelize",
      "tailwindcss",
      "daisyui",
      "render",
    ],
  },
  {
    id: 6,
    title: "Coffee Time",
    img: coffeeTimeProject,
    imgTag: "MVC Architecture",
    link: "https://gj-coffee-time.netlify.app/",
    github: "https://github.com/Joliwood/coffee-time",
    stacks: [
      "react",
      "redux",
      "webpack",
      "typescript",
      "materialUi",
      "netlify",
    ],
  },
];
