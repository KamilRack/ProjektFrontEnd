import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Information from './Components/Information';
import SkillsSection from './Components/SkillsSection';
import Experience from './Components/Experience';
import WeatherSection from './Components/WeatherSection';
import { Navbar1, Nav, Container } from 'react-bootstrap';
import React from 'react';
import ContactSection from './Components/ContactSection';
import Footer from './Components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProjectSection from './Components/ProjectSection';
import Home from './Components/Home';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
      <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/projects" element={<ProjectSection />}/>

      </Routes>
      </div>
    </div>
    <Footer/>

    </Router>

  );
}

export default App;