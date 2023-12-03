// Experience.js
import React from 'react';
import { Tabs, Tab } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Experience.css'; // Zaimportuj swoje style, jeśli masz
import experiencephoto1 from '../Graphic/Expierience.jpeg';  
import experiencephoto2 from '../Graphic/Experience2.jpeg';  
import experiencephoto3 from '../Graphic/Experience3.jpg';


const Experience = () => {
  return (
    <div id="experience" className="experience-section">
      <h2 className="experience-title">Doświadczenie</h2>
      <Tabs defaultActiveKey="home" id="uncontrolled-tab-example" className="mb-3">
        <Tab eventKey="home" title="Praca #1">
          <div className="experience-item">
            <div className="experience-image">
              <img src={experiencephoto1} alt="Workplace" />
            </div>
            <div className="experience-content">
              <h3>Programista Frontend</h3>
              <p>Data rozpoczęcia: 01.01.2020 - Data zakończenia: 03.03.2021</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            </div>
          </div>
        </Tab>
        <Tab eventKey="profile" title="Praca #2">
          <div className="experience-item">
            <div className="experience-image">
              <img src={experiencephoto2} alt="Workplace" />
            </div>
            <div className="experience-content">
              <h3>Programista Backend</h3>
              <p>Data rozpoczęcia: 03.05.2022 - Data zakończenia: 06.08.2023</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            </div>
          </div>
        </Tab>
        <Tab eventKey="profile2" title="Praca #3">
          <div className="experience-item">
            <div className="experience-image">
              <img src={experiencephoto3} alt="Workplace" />
            </div>
            <div className="experience-content">
              <h3>Specjalista ds. Cyberbezpieczeństwa</h3>
              <p>Data rozpoczęcia: 06.08.2023 - Data zakończenia: Aktualnie pracuje</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

            </div>
          </div>
        </Tab>      </Tabs>
    </div>
  );
}

export default Experience;
