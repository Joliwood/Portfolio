import React from "react";
import Head from "next/head";

import {
  Competences,
  Footer,
  HeaderBar,
  Home,
  MyExperiences,
  MyProjects,
  ReturnTopScroller,
} from "#components";

const App = () => {
  return (
    <div className="App">
      <Head>
        <title>
          Développeur Full Stack - JS | TS | SQL - Guillaume Jolibois
        </title>
        <link rel="canonical" href="https://guillaume-jolibois.fr/" />
      </Head>

      <ReturnTopScroller />

      <HeaderBar />
      <main>
        <Home />
        <Competences />
        <MyProjects />
        <MyExperiences />
      </main>
      <Footer />
    </div>
  );
};

export default App;
