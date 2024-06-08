import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Image } from 'react-bootstrap';
import serviceImage from '../assets/image/service.jpg';
import doctorImage from '../assets/image/doctor.jpg';


const doctors = [
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    phone: '+1234567890',
    specialty: 'Cardiologie',
    image: doctorImage,
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    phone: '+1234567891',
    specialty: 'Neurologie',
    image: doctorImage,
  },
];

const boxStyle = {
  width: '80%',
  border: '1px solid #ccc',
  padding: '10px',
  margin: '10px auto',
  backgroundColor: '#f9f9f9',
  textAlign: 'center',
  transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Ajout d'une transition
  cursor: 'pointer', // Ajout du curseur de survol
};

const boxHoverStyle = {
  transform: 'scale(1.05)', // Agrandissement de la carte au survol
  boxShadow: '0 8px 20px rgba(0, 0, 0, 0.3)', // Ajout d'une ombre plus intense au survol
};

const circleStyle = {
  backgroundColor: 'blue',
  color: 'white',
  borderRadius: '50%',
  width: '30px',
  height: '30px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
};

const Service = () => {
  const [searchName, setSearchName] = useState('');
  const [searchSpecialty, setSearchSpecialty] = useState('');

  const [hoveredIndex, setHoveredIndex] = useState(null); // Nouvel état pour gérer l'effet de survol

  const filteredDoctors = doctors.filter(
    (doctor) =>
      doctor.firstName.toLowerCase().includes(searchName.toLowerCase()) &&
      doctor.specialty.toLowerCase().includes(searchSpecialty.toLowerCase())
  );

  return (
    <div style={{ paddingTop: '20px', paddingBottom: '20px' }}>
      <Container fluid>
        <Row style={{ position: 'relative', margin: '0' }}>
          <Col md={12}>
            <Image
              src={serviceImage}
              fluid
              style={{ width: '100%', height: '60%', opacity: '0.6' }}
              alt="Service Image"
            />
            <div
              className="text-overlay"
              style={{
                position: 'absolute',
                top: '20%',
                left: '7%',
                color: 'black',
                padding: '10px',
                borderRadius: '5px',
              }}
            >
              <h1>"Visitez le meilleur hôpital"</h1>
              <br />
              <h3>Clinique pédiatrique de Tunis - مصحة الأطفال بتونس</h3>
            </div>

            <div
              className="form-overlay"
              style={{
                position: 'absolute',
                top: '3%',
                right: '12%',
                width: '25%',
                background: 'rgba(255, 255, 255, 0.8)',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              }}
            >
              <h4>"Prendre rendez-vous"</h4>
              <Form>
                <Form.Group controlId="formNom">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control type="text" placeholder="Votre nom" required />
                </Form.Group>

                <Form.Group controlId="formAdresse">
                  <Form.Label>Adresse</Form.Label>
                  <Form.Control type="text" placeholder="Votre adresse" required />
                </Form.Group>

                <Form.Group controlId="formEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="ex: user@example.com" required />
                </Form.Group>

                <Form.Group controlId="formDate">
                  <Form.Label>Date</Form.Label>
                  <Form.Control type="date" required />
                </Form.Group>

                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                  <Button variant="primary" type="submit">
                    Réserver
                  </Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>

        <Row
          className="d-flex justify-content-center align-items-center"
          style={{
            marginTop: '-300px',
            paddingTop: '20px',
            width: '100%',
          }}
        >
          <Col md={8}>
            <div
              style={{
                background: 'white',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
              }}
            >
              <Row style={{ justifyContent: 'center' }}>
                <Col md={5}>
                  <Form.Control
                    type="text"
                    placeholder="Nom"
                    value={searchName}
                    onChange={(e) => setSearchName(e.target.value)}
                  />
                </Col>

                <Col md={5}>
                  <Form.Control
                    type="text"
                    placeholder="Spécialité"
                    value={searchSpecialty}
                    onChange={(e) => setSearchSpecialty(e.target.value)}
                  />
                </Col>
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center align-items-center">
          <Col md={8}>
            <hr
              style={{
                width: '80%',
                border: '1px solid black',
                borderRadius:'4px',
                margin: '20px auto',
              }}
            />
          </Col>
        </Row>

        <div className="doctors-boxes">
          {filteredDoctors.map((doctor, index) => (
            <div
              key={index}
              style={{ ...boxStyle, ...(hoveredIndex === index ? boxHoverStyle : {}) }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)} 
            >
              <Row>
                <Col md={3}>
                  <Image
                    src={doctor.image}
                    fluid
                    style={{ width: '150px', height: '150px' }}
                  />
                </Col>
                <Col md={9}>
                  <h3>
                    {doctor.firstName} {doctor.lastName}
    
                  </h3>
                  <p>Email: {doctor.email}</p>
                  <p>Tel: {doctor.phone}</p>
                  <p>Spécialité: {doctor.specialty}</p>
                </Col>
              </Row>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Service;
