import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form } from 'react-bootstrap';
import MyPatient from './MyPatient'; 

const Patient = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="content">
      <div className="main-wrapper">
        <div className="breadcrumb-bar bg-blue" style={{ backgroundColor: '#6CB4EE', color: 'white' }}>
          <Container>
            <Row className="align-items-center">
              <Col md={12}>
                <nav aria-label="breadcrumb" className="page-breadcrumb text-center" style={{ margin: '10px 10px 10px 10px', color: 'white' }}>
                  <ol className="breadcrumb m-0 p-0" style={{ color: 'white', fontWeight: 'bold' }}>
                    <li className="breadcrumb-item"><Link to="/" style={{ textDecoration: 'none', color: '#4c4c4c' }}>Accueil</Link></li>
                    <li className="breadcrumb-item active" aria-current="page">Mon patient</li>
                  </ol>
                </nav>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="content" style={{ marginTop: '25px' , marginLeft:'30%' }}>
        <Container fluid>
        <Row>
            <Col md={7}>
              <Form>
                <Form.Group controlId="formSearch">
                  <Form.Control
                    type="text"
                    placeholder="Entrez le nom du patient"
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </Form.Group>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="content" style={{ marginTop: '25px', marginBottom: '50px' }}>
        <Container fluid>
          <Row>
            <Col md={10}>
              <MyPatient searchTerm={searchTerm}/>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Patient;