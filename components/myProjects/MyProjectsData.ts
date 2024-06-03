import {
  agarthaProject,
  BacklistProject,
  cinocharProject,
  coffeeTimeProject,
  LinkedinProject,
  lyricsLibraryProject,
  mvcArchitectureProject,
  NetflixProject,
  osportProject,
  restApiTournamentProject,
  SqlShowcaseProject,
} from '../../public/images';

import { type ProjectType } from '#types';

const MyProjectsList: ProjectType[] = [
  {
    title: 'Clone Netflix',
    img: NetflixProject,
    imgTag: 'Netflix project',
    descriptions: [
      "Clone Front de Netflix version Web, en React. Utilisation de l'API de TMDB pour les données. Axios pour les requêtes. Il est possible de créer une liste partagée dans toute l'application grâce à Redux. Jest + Enzyme ont été implantés pour tester quelques composants.",
    ],
    link: 'https://gj-netlix-clone.netlify.app/',
    github: 'https://github.com/Joliwood/Netflix-clone',
    gif: 'https://github.com/Joliwood/Netflix-clone/raw/374c55b499f9ded606d10550f6e22f2c7f5bcaea/netflix-clone.gif?raw=true',
    stacks: ['react', 'api', 'netlify', 'jest'],
  },

  {
    title: 'Clone Linkedin',
    img: LinkedinProject,
    imgTag: 'Linkedin project',
    descriptions: [
      "Clone Linkedin version Web, en React. Le côté back-end est géré en No SQL avec Firebase, il gère aussi l'authentification avec Google. On peut ici créer des posts, les voirs, les liker et les supprimer, un poste 'général' sera également visible car créé par l'administrateur, vous pourez le liker mais pas le supprimer. Les designs du site sont gérés avec Styled Components.",
    ],
    link: 'https://gj-linkedin-clone.netlify.app/',
    github: 'https://github.com/Joliwood/linkedinClone',
    stacks: ['react', 'firebase', 'netlify', 'styledcomponents'],
  },
  {
    title: 'Agartha',
    img: agarthaProject,
    imgTag: 'Agartha',
    descriptions: [
      'Site client pour une startup Suisse spécialisée dans le web3. Réalisé en React js, avec une gestion de la traduction en 2 langues (français, anglais) avec i18next.',
      'Le design a été fait initialement avec Material UI, puis modifié ultérieurement.',
      'Une API a également été ajoutée pour obtenir les taux en temps réel de certaines cryptomonnaies.',
    ],
    link: 'https://www.agartha.ch/',
    github: 'Non disponible',
    stacks: [
      'react',
      'node',
      'api',
      'i18next',
      'materialui',
    ],
  },
  {
    title: 'BackList',
    img: BacklistProject,
    imgTag: 'BackList project',
    descriptions: [
      'Application Back-end de type To-do list, gérée avec Node.js + Express. Les rendus html sont dynamiques avec Ejs, chaque modification de la liste génère une requête post pour la mettre à jour dans une session faisant office de Cookie (elle sera stockée pendant 1 heure). Le design est géré avec Tailwindcss.',
    ],
    link: 'https://backlist.onrender.com/',
    github: 'https://github.com/Joliwood/todo-list-back',
    gif: 'https://github.com/Joliwood/todo-list-back/raw/main/docs/backlist.gif?raw=true',
    stacks: ['node', 'ejs', 'express', 'render', 'tailwindcss'],
  },
  {
    title: 'SQL Showcase',
    img: SqlShowcaseProject,
    imgTag: 'SQL Showcase',
    descriptions: [
      'Application Back-end CRUD créée avec Node.js + Express. Les rendus html sont dynamiques avec Ejs. Vous pourez ici visualiser une base de donnée créée en Postgresql (hébergée sur le cloud Render.com) et intéragir avec, créer des articles, les modifier, les supprimer, réinitialiser la DB si besoin, ou la trier par différents critères. Le design, lui est géré avec Bootstrap.',
    ],
    link: 'https://sql-showcase.onrender.com/',
    github: 'https://github.com/Joliwood/sql-showcase',
    gif: 'https://github.com/Joliwood/sql-showcase/blob/main/docs/sql-showcase.gif?raw=true',
    stacks: ['node', 'ejs', 'express', 'sql', 'psql', 'render', 'bootstrap'],
  },
  {
    title: 'MVC Architecture',
    img: mvcArchitectureProject,
    imgTag: 'MVC Architecture',
    descriptions: [
      "Application Back-end créée avec Node.js + Express. Les rendus html sont dynamiques avec Ejs. L'entièreté de l'application est faite en POO (Programmation Orientée Objet), avec une architecture MVC (Modèle Vue Contrôleur) et suivant la méthodologie Merise (MCD & MLD). Les échanges avec la DB (hébergée sur le cloud Neon.tech) sont possibles grâce à Sequelize. Les designs sont gérés avec Tailwindcss et DaisyUI.",
    ],
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
    title: 'Coffee Time',
    img: coffeeTimeProject,
    imgTag: 'Coffee Time',
    descriptions: [
      'Application Front créée avec React 18 + Typescript + Webpack 5 + Babel. Sur ce site, vous aurez la possibilité de prendre différents types de café qui vous apporteront des quantité de caféine différentes, elles viendront remplir votre jauge d\'énergie (gérée avec Redux).',

      'Le design est géré avec Material UI, avec un night / light mod.',
    ],
    link: 'https://gj-coffee-time.netlify.app/',
    github: 'https://github.com/Joliwood/coffee-time',
    gif: 'https://github.com/Joliwood/coffee-time/blob/main/docs/coffee-time.gif?raw=true',
    stacks: [
      'react',
      'redux',
      'webpack',
      'typescript',
      'materialui',
      'netlify',
    ],
  },
  {
    title: 'REST API Tournament',
    img: restApiTournamentProject,
    imgTag: 'REST API Tournament',
    descriptions: [
      'CRUD REST API qui fonctionne avec typescript. La base de données est la même que celle du projet appelé "MVC-Architecture". Il suit également cette architecture. La liste des requêtes disponibles sont sur le readme Github. API hébergée sur Railway.app',
    ],
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
    title: 'Cinochar',
    img: cinocharProject,
    imgTag: 'Cinochar',
    descriptions: [
      'Une application de type jeu en ligne, où on doit trouver le titre du film en fonction d\'une fraction d\'image du film, zoommée.',

      'Le film à trouver est partagé avec tous les joueurs en ligne qui souhaitent participer, il n\'y a qu\'une seule partie pour tout le monde.',

      'Il faudra être rapide! Car au bout de 5sec seulement, un autre joueur pourra lancer un autre film.Si vous ne trouvez pas le film avec le zoom initial, vous pouvez utiliser des jokers qui dézoomeront légèrement, jusqu\'à afficher toute l\'image (mais vous ne pourrez plus remporter de points pour cette manche)...',

      'Le front est en react, redux, typescript, next, mongodb(par le biais de l\'API next directement), tailwindcss, daisyUI et hébergé par Netlify. Côté back, l\'API est de type websocket avec socket.io, elle aussi en Typescript et hébergée cette fois-ci sur Render.com.',
    ],
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
    title: 'O\'sport',
    img: osportProject,
    imgTag: 'O\'sport',
    descriptions: [
      'Application pour jouer ou participer à des événements sportifs entre amis.',

      'Il est compris dans le site d\'authentification, d\'une gestion de liste d\'amis, on peut créer un match et y inviter des amis, ou participer à un match déjà créé.',

      'La principale utilité du site réside en l\'algorithme côté back qui répartira en deux équipes équilibrées en fonction des niveaux de chaque joueur. Au début seul sa propre estimation de son niveau fera foi, ensuite à chaque match il recevra des notes des autres joueurs, cela alimentera la base de données et ajustera sa note globale en conséquence. Plus les joueurs participeront à des événements sportifs, plus leur niveau reflétera réellement leur niveau dans la vraie vie et plus l\'algorithme fonctionnera efficacement.',

      'Côté techno il a été utilisé pour ce projet react, typescript, tailwindcss, daisyUI, vite, vitest, postgresql, express, node, REST, tests e2e cypress, prisma, zod ainsi que les JWT.Le site & BDD sont hébergés sur Netlify et Render.',
    ],
    link: 'https://osport-client.netlify.app/',
    githubs: [
      {
        title: 'Github Front',
        link: 'https://github.com/Joliwood/osport-client',
      },
      {
        title: 'Github Back',
        link: 'https://github.com/Joliwood/osport-server',
      },
    ],
    stacks: [
      'react',
      'node',
      'typescript',
      'tailwindcss',
      'daisyui',
      'api',
      'vite',
      'psql',
      'redis',
      'express',
      'prisma',
      'cypress',
      'netlify',
      'render',
    ],
  },
  {
    title: 'Lyrics library',
    img: lyricsLibraryProject,
    imgTag: 'Lyrics library API',
    descriptions: [
      'Ceci est une API graphQL optimisée pour les grandes bases de données. Les datas ont été générées par faker, une validation des données par JOI et une documentation par Appolo Studio. Tout le système d\'initialisation et de migration de la base de données à été géré par Knex. L\'API est hébergée sur Render.com',
    ],
    link: 'https://lyrics-library.onrender.com/',
    github: 'https://github.com/Joliwood/lyrics-library',
    stacks: [
      'node',
      'express',
      'api',
      'graphql',
      'knex',
      'appolo',
      'render',
    ],
  },
];

export default MyProjectsList;
