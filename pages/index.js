import React from "react";
import HeaderBar from "../components/headerBar";
import Home from "../components/home";
import Competences from "../components/competences";
import MyProjects from "../components/myProjects";
import MyExperiences from "../components/myExperiences";
import Footer from "../components/footer";
import Head from "next/head";

function App() {
  return (
    <div className="App">
      <Head>
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <title>
          Guillaume Jolibois - Full Stack JavaScript Developer Portfolio
        </title>
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
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="canonical" href="https://guillaume-jolibois.fr/" />
      </Head>

      <HeaderBar />
      <Home />
      <Competences />
      <MyProjects />
      <MyExperiences />
      <Footer />
    </div>
  );
}

export default App;
