import NetflixProject from "../../../public/images/projects/netflixProject.png";
import SpotifyProject from "../../../public/images/projects/spotifyProject.png";
import LinkedinProject from "../../../public/images/projects/linkedinProject.png";
import BacklistProject from "../../../public/images/projects/backlistProject.png";
import SqlShowcaseProject from "../../../public/images/projects/sqlShowcaseProject.png";

export const MyProjectsList = [
  {
    id: 1,
    title: "Clone Netflix",
    img: NetflixProject,
    imgTag: "Netflix project",
    link: "https://gj-netlix-clone.netlify.app/",
    github: "https://github.com/Joliwood/Netflix-clone",
    stacks: ["react", "api", "netlify"],
  },

  {
    id: 2,
    title: "Clone Linkedin",
    img: LinkedinProject,
    imgTag: "Linkedin project",
    link: "https://gj-linkedin-clone.netlify.app/",
    github: "https://github.com/Joliwood/linkedinClone",
    stacks: ["react", "firebase", "netlify"],
  },

  {
    id: 3,
    title: "Clone Spotify",
    img: SpotifyProject,
    imgTag: "Spotify project",
    link: "https://gj-spotify-clone.netlify.app/",
    github: "https://github.com/Joliwood/Spotify-clone",
    stacks: ["react", "api", "netlify"],
  },
  {
    id: 4,
    title: "BackList",
    img: BacklistProject,
    imgTag: "BackList project",
    link: "https://backlist.onrender.com/",
    github: "https://github.com/Joliwood/todo-list-back",
    stacks: ["node", "ejs", "express", "render", "tailwindcss"],
  },
  {
    id: 5,
    title: "SQL Showcase",
    img: SqlShowcaseProject,
    imgTag: "SQL Showcase",
    link: "https://sql-showcase.onrender.com/",
    github: "https://github.com/Joliwood/sql-showcase",
    stacks: ["node", "ejs", "express", "sql", "psql", "render", "bootstrap"],
  },
];
