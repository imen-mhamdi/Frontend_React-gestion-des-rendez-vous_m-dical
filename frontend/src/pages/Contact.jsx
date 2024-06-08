import React from 'react';
import { Image, Form, Button, Row, Col, Table } from 'react-bootstrap';
import contactImage from '../assets/image/contact-image.png';
import './Contact.css';

const Contact = () => {

  return (
    <div className="contact-page">
      <div className="contact-image">
        <Image
          src={contactImage}
          fluid
          style={{ width: '100%', height: '500px' }}
          alt="Contact Background"
        />
      </div>

      <div className="contact-header">
        <h1>Contactez-nous</h1>
      </div>

      <div className="contact-form">
        <Form className="p-4">
          {/* Formulaire de contact */}
          <Row className="mb-3">
            <Col xs={12} md={6}>
              <Form.Group controlId="firstName">
                <Form.Label>Prénom</Form.Label>
                <Form.Control type="text" placeholder="Entrez votre prénom" />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="lastName">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" placeholder="Entrez votre nom" />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3"> 
            <Col xs={12} md={6}>
              <Form.Group controlId="email">
                <Form.Label>Adresse Email</Form.Label>
                <Form.Control type="email" placeholder="Entrez votre email" />
              </Form.Group>
            </Col>

            <Col xs={12} md={6}>
              <Form.Group controlId="phone">
                <Form.Label>Numéro de Téléphone</Form.Label>
                <Form.Control type="text" placeholder="Entrez votre numéro de téléphone" />
              </Form.Group>
            </Col>
          </Row>

          <Form.Group controlId="message" className="mb-3">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} placeholder="Entrez votre message" />
          </Form.Group>

          <div className="text-center">
            <Button variant="primary" type="submit">
              Envoyer
            </Button>
          </div>
        </Form>
      </div>

    </div>
  );
};

export default Contact;
