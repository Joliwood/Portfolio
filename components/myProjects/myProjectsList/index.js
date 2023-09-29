const NetflixProject = '/images/projects/netflixProject.png';
const LinkedinProject = '/images/projects/linkedinProject.png';
const BacklistProject = '/images/projects/backlistProject.png';
const SqlShowcaseProject = '/images/projects/sqlShowcaseProject.png';
const mvcArchitectureProject = '/images/projects/mvcArchitectureProject.png';
const coffeeTimeProject = '/images/projects/coffeeTimeProject.png';
const restApiTournamentProject = '/images/projects/restApiTournamentProject.png';
const cinocharProject = '/images/projects/cinocharProject.png';
const osportProject = '/images/projects/osportProject.png';

const MyProjectsList = [
  {
    id: 1,
    title: 'Clone Netflix',
    img: NetflixProject,
    imgTag: 'Netflix project',
    description:
      "Clone Front de Netflix version Web, en React. Utilisation de l'API de TMDB pour les données. Axios pour les requêtes. Il est possible de créer une liste partagée dans toute l'application grâce à Redux. Jest + Enzyme ont été implantés pour tester quelques composants.",
    link: 'https://gj-netlix-clone.netlify.app/',
    github: 'https://github.com/Joliwood/Netflix-clone',
    gif: 'https://github.com/Joliwood/Netflix-clone/raw/374c55b499f9ded606d10550f6e22f2c7f5bcaea/netflix-clone.gif?raw=true',
    stacks: ['react', 'api', 'netlify', 'jest'],
  },

  {
    id: 2,
    title: 'Clone Linkedin',
    img: LinkedinProject,
    imgTag: 'Linkedin project',
    description:
      "Clone Linkedin version Web, en React. Le côté back-end est géré en No SQL avec Firebase, il gère aussi l'authentification avec Google. On peut ici créer des posts, les voirs, les liker et les supprimer, un poste 'général' sera également visible car créé par l'administrateur, vous pourez le liker mais pas le supprimer. Les designs du site sont gérés avec Styled Components.",
    link: 'https://gj-linkedin-clone.netlify.app/',
    github: 'https://github.com/Joliwood/linkedinClone',
    stacks: ['react', 'firebase', 'netlify', 'styledComponents'],
  },
  {
    id: 3,
    title: 'BackList',
    img: BacklistProject,
    imgTag: 'BackList project',
    description:
      'Application Back-end de type To-do list, gérée avec Node.js + Express. Les rendus html sont dynamiques avec Ejs, chaque modification de la liste génère une requête post pour la mettre à jour dans une session faisant office de Cookie (elle sera stockée pendant 1 heure). Le design est géré avec Tailwindcss.',
    link: 'https://backlist.onrender.com/',
    github: 'https://github.com/Joliwood/todo-list-back',
    gif: 'https://github.com/Joliwood/todo-list-back/raw/main/docs/backlist.gif?raw=true',
    stacks: ['node', 'ejs', 'express', 'render', 'tailwindcss'],
  },
  {
    id: 4,
    title: 'SQL Showcase',
    img: SqlShowcaseProject,
    imgTag: 'SQL Showcase',
    description:
      'Application Back-end CRUD créée avec Node.js + Express. Les rendus html sont dynamiques avec Ejs. Vous pourez ici visualiser une base de donnée créée en Postgresql (hébergée sur le cloud Render.com) et intéragir avec, créer des articles, les modifier, les supprimer, réinitialiser la DB si besoin, ou la trier par différents critères. Le design, lui est géré avec Bootstrap.',
    link: 'https://sql-showcase.onrender.com/',
    github: 'https://github.com/Joliwood/sql-showcase',
    gif: 'https://github.com/Joliwood/sql-showcase/blob/main/docs/sql-showcase.gif?raw=true',
    stacks: ['node', 'ejs', 'express', 'sql', 'psql', 'render', 'bootstrap'],
  },
  {
    id: 5,
    title: 'MVC Architecture',
    img: mvcArchitectureProject,
    imgTag: 'MVC Architecture',
    description:
      "Application Back-end créée avec Node.js + Express. Les rendus html sont dynamiques avec Ejs. L'entièreté de l'application est faite en POO (Programmation Orientée Objet), avec une architecture MVC (Modèle Vue Contrôleur) et suivant la méthodologie Merise (MCD & MLD). Les échanges avec la DB (hébergée sur le cloud Neon.tech) sont possibles grâce à Sequelize. Les designs sont gérés avec Tailwindcss et DaisyUI.",
    link: 'https://mvc-architecture.onrender.com/',
    github: 'https://github.com/Joliwood/MVC-Architecture',
    gif: 'https://github.com/Joliwood/MVC-Architecture/blob/main/docs/mvc-architecture.gif?raw=true',
    stacks: [
      'node',
      'ejs',
      'express',
      'sql',
      'psql',
      'sequelize',
      'tailwindcss',
      'daisyui',
      'render',
    ],
  },
  {
    id: 6,
    title: 'Coffee Time',
    img: coffeeTimeProject,
    imgTag: 'MVC Architecture',
    description:
      "Application Front créée avec React 18 + Typescript + Webpack 5 + Babel. Sur ce site, vous aurez la possibilité de prendre différents types de café qui vous apporteront des quantité de caféine différentes, elles viendront remplir votre jauge d'énergie (gérée avec Redux). Le design est géré avec Material UI, avec un night / light mod.",
    link: 'https://gj-coffee-time.netlify.app/',
    github: 'https://github.com/Joliwood/coffee-time',
    gif: 'https://github.com/Joliwood/coffee-time/blob/main/docs/coffee-time.gif?raw=true',
    stacks: [
      'react',
      'redux',
      'webpack',
      'typescript',
      'materialUi',
      'netlify',
    ],
  },
  {
    id: 7,
    title: 'REST API Tournament',
    img: restApiTournamentProject,
    imgTag: 'REST API Tournament',
    description:
      'CRUD REST API qui fonctionne avec typescript. La base de données est la même que celle du projet appelé "MVC-Architecture". Il suit également cette architecture. La liste des requêtes disponibles sont sur le readme Github. API hébergée sur Railway.app',
    link: 'https://rest-api-tournaments.up.railway.app/',
    github: 'https://github.com/Joliwood/REST-API-Tournaments',
    stacks: [
      'node',
      'express',
      'api',
      'sequelize',
      'typescript',
      'railway',
    ],
  },
  {
    id: 8,
    title: 'Cinochar',
    img: cinocharProject,
    imgTag: 'Cinochar',
    description:
      'Une application de type jeu en ligne, où on doit trouver le titre du film en fonction d\'une fraction d\'image du film, zoommée. Le film à trouver est partagé avec tous les joueurs en ligne qui souhaitent participer, il n\'y a qu\'une seule partie pour tout le monde. Il faudra être rapide ! Car au bout de 5sec seulement, un autre joueur pourra lancer un autre film. Si vous ne trouvez pas le film avec le zoom initial, vous pouvez utiliser des jokers qui dézoomeront légèrement, jusqu\'à afficher toute l\'image (mais vous ne pourrez plus remporter de points pour cette manche)... Le front est en react, redux, typescript, next, mongodb (par le biais de l\'API next directement), tailwindcss, daisyUI et hébergé par Netlify. Côté back, l\'API est de type websocket avec socket.io, elle aussi en Typescript et hébergée cette fois-ci sur Render.com.',
    link: 'https://cinochar.netlify.app/',
    github: 'https://github.com/Joliwood/cinochar',
    stacks: [
      'node',
      'express',
      'api',
      'react',
      'typescript',
      'redux',
      'next',
      'socketIo',
      'mongodb',
      'tailwindcss',
      'daisyui',
      'netlify',
      'render',
    ],
  },
  {
    id: 9,
    title: 'O\'sport',
    img: osportProject,
    imgTag: 'O\'sport',
    description:
      'Application pour jouer ou participer à des événements sportifs entre amis. Il est compris dans le site d\'authentification, d\'une gestion de liste d\'amis, on peut créer un match et y inviter des amis, ou participer à un match déjà créé. La principale utilité du site réside en l\'algorithme côté back qui répartira en deux équipes équilibrées en fonction des niveaux de chaque joueur. Au début seul sa propre estimation de son niveau fera foi, ensuite à chaque match il recevra des notes des autres joueurs, cela alimentera la base de données et ajustera sa note globale en conséquence. Plus les joueurs participeront à des événements sportifs, plus leur niveau reflétera réellement leur niveau dans la vraie vie et plus l\'algorithme fonctionnera efficacement. Côté techno il a été utilisé pour ce projet react, typescript, tailwindcss, daisyUI, vite, vitest, postgresql, express, node, REST, tests e2e cypress, prisma, zod ainsi que les JWT. Le site & BDD sont hébergés sur Netlify et Render.',
    link: 'https://osport-client.netlify.app/',
    githubs: [
      {
        title: 'Voir le Front',
        link: 'https://github.com/Joliwood/osport-client',
      },
      {
        title: 'Voir le Back',
        link: 'https://github.com/Joliwood/osport-server',
      },
    ],
    stacks: [
      'node',
      'express',
      'api',
      'sequelize',
      'typescript',
      'railway',
    ],
  },
];

export default MyProjectsList;
