import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="fr">
      <Head>
        <meta name="theme-color" content="#000000" />
        <link rel="icon" type="image/png" sizes="192x192" href="/logo192.png" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="icon" type="image/png" sizes="512" href="/logo512.png" />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
        <meta
          name="keywords"
          content="Full Stack Developer, JavaScript, Personal Portfolio, Web Developer, React.js, Web Development, UI/UX Design, Responsive Design, Front End Development, Back End Development, Node.js, CSS, HTML, Portfolio Showcase, Professional Experience, Technical Skills, Project Demonstrations, Code Samples, Client Work, Personal Projects"
        />
        <meta
          name="description"
          content="Hi, I'm Guillaume Jolibois, a full Stack JavaScript Developer with React.js expertise. Check out my portfolio for UI/UX design, front-end & back-end dev."
        />
        <link rel="manifest" href="/manifest.json" />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
