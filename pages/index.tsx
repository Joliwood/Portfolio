import React from 'react';
import Head from 'next/head';

import HeaderBar from '../components/HeaderBar';
import Home from '../components/Home';
import Competences from '../components/competences/Competences';
import MyProjects from '../components/myProjects/MyProjects';
import MyExperiences from '../components/myExperiences/MyExperiences';
import Footer from '../components/Footer';
import ReturnTopScroller from '../components/ReturnTopScroller';

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
      <Home />
      <Competences />
      <MyProjects />
      <MyExperiences />
      <Footer />
    </div>
  );
};

export default App;
