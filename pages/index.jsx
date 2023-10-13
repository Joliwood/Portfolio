import React from 'react';
import Head from 'next/head';
import HeaderBar from '../components/headerBar';
import Home from '../components/home';
import Competences from '../components/competences';
import MyProjects from '../components/myProjects';
import MyExperiences from '../components/myExperiences';
import Footer from '../components/footer';
import ReturnTopScroller from '../components/returnTopScroller';

function App() {
  return (
    <div className="App">
      <Head>
        <title>
          Guillaume Jolibois - Full Stack JS | TS | SQL Developer Portfolio
        </title>
        <link rel="canonical" href="https://guillaume-jolibois.fr/" />
      </Head>

      <ReturnTopScroller />

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
