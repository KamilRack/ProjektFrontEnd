// ContactSection.js
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import './ContactSection.css'; // Zaimportuj styl

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj możesz dodać logikę do obsługi przycisku submit
    console.log('Form Data:', formData);
    // Jeśli potrzebujesz logiki do przetwarzania formularza, możesz dodać ją tutaj
  };

  return (
    <div className="contact-section">
      <Container>
        <h2 className="contact-title">Skontaktuj się z nami</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Imię i Nazwisko</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Podaj imię i nazwisko"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Adres Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Podaj adres email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formPhone">
                <Form.Label>Numer Telefonu</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="Podaj numer telefonu"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Wiadomość</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Napisz wiadomość"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </Form.Group>

              <Button className="btnContact" variant="primary" type="submit">
                Wyślij
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactSection;
