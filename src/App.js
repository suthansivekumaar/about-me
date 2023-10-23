import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutMe from "./components/pages/AboutMe";
import Experience from "./components/pages/Experience";
import Start from "./components/pages/Start";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
