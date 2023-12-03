// ProjectSection.js
import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './ProjectSection.css'; // Zaimportuj styl
import { useState } from 'react';
import Footer from './Footer';
const ProjectSection = () => {
  return (
    <div className="projects" id="projects">
      <Container>
        <h1 className="project-title">Projekty</h1>
        <Row>
          {/* Dodaj tutaj kody dla poszczególnych projektów w formie komponentów Card */}
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://placekitten.com/220/220" />
              <Card.Body>
                <Card.Title>Projekt 1</Card.Title>
                <Card.Text>
                  Opis projektu 1.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
          <Card>
              <Card.Img variant="top" src="https://placekitten.com/250/200" />
              <Card.Body>
                <Card.Title>Projekt 2</Card.Title>
                <Card.Text>
                  Opis projektu 2.
                </Card.Text>
              </Card.Body>
            </Card>          </Col>
          <Col md={4}>
          <Card>
              <Card.Img variant="top" src="https://placekitten.com/400/200" />
              <Card.Body>
                <Card.Title>Projekt 3</Card.Title>
                <Card.Text>
                  Opis projektu 3.
                </Card.Text>
              </Card.Body>
            </Card>          </Col>
        </Row>
        <Row>
          {/* Dodaj tutaj kody dla poszczególnych projektów w formie komponentów Card */}
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://placekitten.com/300/200" />
              <Card.Body>
                <Card.Title>Projekt 4</Card.Title>
                <Card.Text>
                  Opis projektu 4.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
          <Card>
              <Card.Img variant="top" src="https://placekitten.com/640/360" />
              <Card.Body>
                <Card.Title>Projekt 5</Card.Title>
                <Card.Text>
                  Opis projektu 5.
                </Card.Text>
              </Card.Body>
            </Card>          </Col>
          <Col md={4}>
          <Card>
              <Card.Img variant="top" src="https://placekitten.com/320/200" />
              <Card.Body>
                <Card.Title>Projekt 6</Card.Title>
                <Card.Text>
                  Opis projektu 6.
                </Card.Text>
              </Card.Body>
            </Card>          </Col>
        </Row>

      </Container>

    </div>

  );
}

export default ProjectSection;
