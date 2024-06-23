import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import "./App.css";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";

import Navbar from "./components/Navbar";
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/projects" element={<Projects num="25" />} />

        <Route path="/education" element={<Education />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
