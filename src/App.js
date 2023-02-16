import React from "react";
import "./styles.css";
import HeaderBar from "./components/headerBar";
import Home from "./components/home";
import Competences from "./components/competences";
import MyProjects from "./components/myProjects";
import MyExperiences from "./components/myExperiences";
import Footer from "./components/footer";

function App() {
  return (
    <div className="App">
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
