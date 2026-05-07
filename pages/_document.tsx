import React, { type JSX } from "react";
import { Html, Head, Main, NextScript } from "next/document";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": "https://guillaume-jolibois.fr/#person",
      name: "Guillaume Jolibois",
      jobTitle: "Développeur Full Stack TypeScript & Rust",
      description:
        "Développeur Full Stack / Backend spécialisé en TypeScript et Rust. Architecte d'applications robustes, prédictibles et scalables. Disponible en contrat ou freelance.",
      url: "https://guillaume-jolibois.fr/",
      email: "jolibois.contact@gmail.com",
      image: "https://guillaume-jolibois.fr/images/profilePicture.png",
      sameAs: [
        "https://www.linkedin.com/in/guillaume-jolibois-430426119/",
        "https://github.com/Joliwood",
      ],
      knowsAbout: [
        "TypeScript",
        "Rust",
        "JavaScript",
        "SQL",
        "React",
        "Next.js",
        "Node.js",
        "GraphQL",
        "PostgreSQL",
        "MongoDB",
        "Redis",
        "Architecture Hexagonale",
        "Clean Code",
        "gRPC",
        "RabbitMQ",
        "Tailwind CSS",
        "Storybook",
      ],
    },
    {
      "@type": "ProfilePage",
      "@id": "https://guillaume-jolibois.fr/#webpage",
      name: "Portfolio de Guillaume Jolibois — Développeur Full Stack TypeScript & Rust",
      url: "https://guillaume-jolibois.fr/",
      description:
        "Portfolio de Guillaume Jolibois, développeur Full Stack spécialisé en TypeScript et Rust.",
      mainEntity: { "@id": "https://guillaume-jolibois.fr/#person" },
    },
  ],
};

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
          name="description"
          content="Développeur Full Stack TypeScript & Rust. Architecture hexagonale, clean code, expérience utilisateur. Disponible en contrat ou freelance."
        />
        <link rel="manifest" href="/manifest.json" />

        {/* Open Graph */}
        <meta property="og:type" content="profile" />
        <meta property="og:site_name" content="Portfolio — Guillaume Jolibois" />
        <meta
          property="og:title"
          content="Guillaume Jolibois — Développeur Full Stack TypeScript & Rust"
        />
        <meta
          property="og:description"
          content="Développeur Full Stack TypeScript & Rust. Architecture hexagonale, clean code, expérience utilisateur. Disponible en contrat ou freelance."
        />
        <meta property="og:url" content="https://guillaume-jolibois.fr/" />
        <meta
          property="og:image"
          content="https://guillaume-jolibois.fr/images/profilePicture.png"
        />
        <meta property="og:locale" content="fr_FR" />
        <meta property="profile:first_name" content="Guillaume" />
        <meta property="profile:last_name" content="Jolibois" />

        {/* Twitter / X Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Guillaume Jolibois — Développeur Full Stack TypeScript & Rust"
        />
        <meta
          name="twitter:description"
          content="Développeur Full Stack TypeScript & Rust. Architecture hexagonale, clean code, expérience utilisateur. Disponible en contrat ou freelance."
        />
        <meta
          name="twitter:image"
          content="https://guillaume-jolibois.fr/images/profilePicture.png"
        />

        {/* JSON-LD structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
