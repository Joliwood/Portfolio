import React from "react";
import ReactDOM from "react-dom/client";
import Contact from "./components/contact";
import MyExperiences from "./components/myExperience";
import MyProjects from "./components/myProjects";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/myexperiences" element={<MyExperiences />} />
      <Route path="/myprojects" element={<MyProjects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </Router>
);
