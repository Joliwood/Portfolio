import React, { type JSX } from "react";
import { Html, Head, Main, NextScript } from "next/document";

const Document = (): JSX.Element => {
  return (
    <Html lang="fr">
      <Head>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" type="image/png" sizes="192x192" href="/logo192.png" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="icon" type="image/png" sizes="512" href="/logo512.png" />
        <link
          rel="alternate"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
        <meta
          name="keywords"
          content="Full Stack Développeur, JavaScript, Typescript, SQL, Personal Portfolio, Web Developer, React.js, Développement web, UI/UX Design, BDD, DB, Clean Code, Responsive Design, Front End Development, Back End Development, Node.js, CSS, HTML, Portfolio, Expérience Professionnelle, Compétences techniques, Project Demonstrations, Client Work, Projets personnels, freelance, contrat"
        />
        <meta
          name="description"
          content="Bonjour, je suis Guillaume Jolibois, un développeur full Stack en Javascript, Typescript et SQL. Venez découvrir ma stack technique, je travaille en contrat ou freelance."
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
