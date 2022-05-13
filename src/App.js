import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe';
import Experience from './components/pages/Experience';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<AboutMe />} />
          <Route path='/experience' element={<Experience />} />
        </Routes>
      </Router>
    </>
  );
}



export default App;
