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
    description:
      "Clone Front de Netflix version Web, en React. Utilisation de l'API de TMDB pour les données. Axios pour les requêtes. Il est possible de créer une liste partagée dans toute l'application grâce à Redux. Jest + Enzyme ont été implantés pour tester quelques composants.",
    link: "https://gj-netlix-clone.netlify.app/",
    github: "https://github.com/Joliwood/Netflix-clone",
    overview:
      "https://github.com/Joliwood/Netflix-clone/raw/374c55b499f9ded606d10550f6e22f2c7f5bcaea/netflix-clone.gif",
    stacks: ["react", "api", "netlify", "jest"],
  },

  {
    id: 2,
    title: "Clone Linkedin",
    img: LinkedinProject,
    imgTag: "Linkedin project",
    description:
      "Clone Linkedin version Web, en React. Le côté back-end est géré en No SQL avec Firebase, il gère aussi l'authentification avec Google. On peut ici créer des posts, les voirs, les liker et les supprimer, un poste 'général' sera également visible car créé par l'administrateur, vous pourez le liker mais pas le supprimer. Les designs du site sont gérés avec Styled Components.",
    link: "https://gj-linkedin-clone.netlify.app/",
    github: "https://github.com/Joliwood/linkedinClone",
    stacks: ["react", "firebase", "netlify", "styledComponents"],
  },
  {
    id: 3,
    title: "BackList",
    img: BacklistProject,
    imgTag: "BackList project",
    description:
      "Application Back-end de type To-do list, gérée avec Node.js + Express. Les rendus html sont dynamiques avec Ejs, chaque modification de la liste génère une requête post pour la mettre à jour dans une session faisant office de Cookie (elle sera stockée pendant 1 heure). Le design est géré avec Tailwindcss.",
    link: "https://backlist.onrender.com/",
    github: "https://github.com/Joliwood/todo-list-back",
    overview:
      "https://github.com/Joliwood/todo-list-back/raw/main/docs/backlist.gif?raw=true",
    stacks: ["node", "ejs", "express", "render", "tailwindcss"],
  },
  {
    id: 4,
    title: "SQL Showcase",
    img: SqlShowcaseProject,
    imgTag: "SQL Showcase",
    description:
      "Application Back-end CRUD créée avec Node.js + Express. Les rendus html sont dynamiques avec Ejs. Vous pourez ici visualiser une base de donnée créée en Postgresql (hébergée sur le cloud Render.com) et intéragir avec, créer des articles, les modifier, les supprimer, réinitialiser la DB si besoin, ou la trier par différents critères. Le design, lui est géré avec Bootstrap.",
    link: "https://sql-showcase.onrender.com/",
    github: "https://github.com/Joliwood/sql-showcase",
    stacks: ["node", "ejs", "express", "sql", "psql", "render", "bootstrap"],
  },
  {
    id: 5,
    title: "MVC Architecture",
    img: mvcArchitectureProject,
    imgTag: "MVC Architecture",
    description:
      "Application Back-end créée avec Node.js + Express. Les rendus html sont dynamiques avec Ejs. L'entièreté de l'application est faite en POO (Programmation Orientée Objet), avec une architecture MVC (Modèle Vue Contrôleur) et suivant la méthodologie Merise (MCD & MLD). Les échanges avec la DB (hébergée sur le cloud Neon.tech) sont possibles grâce à Sequelize. Les designs sont gérés avec Tailwindcss et DaisyUI.",
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
    description:
      "Application Front créée avec React 18 + Typescript + Webpack 5 + Babel. Sur ce site, vous aurez la possibilité de prendre différents types de café qui vous apporteront des quantité de caféine différentes, elles viendront remplir votre jauge d'énergie (gérée avec Redux). Le design est géré avec Material UI.",
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
