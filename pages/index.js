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
        <title>
          Guillaume Jolibois - Full Stack JavaScript Developer Portfolio
        </title>
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
