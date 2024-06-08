import React from 'react';
import { Container, Row, Col, Card, Form, Button, Pagination } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import AppointmentTab from './AppointmentTab';

const Dashboardd = () => {
    // Pagination
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    }
  
    const paginationBasic = (
      <div className="text-center">
        <Pagination>{items}</Pagination>
      </div>
    );
  return (
    <div>
      <div className="breadcrumb-bar bg-blue" style={{ backgroundColor: '#6CB4EE', color: 'white' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={12}>
              <nav aria-label="breadcrumb" className="page-breadcrumb text-center" style={{ margin: '10px 10px 10px 10px', color: 'white' }}>
                <ol className="breadcrumb m-0 p-0" style={{ color: 'white', fontWeight: 'bold' }}>
                  <li className="breadcrumb-item"><a href="index-2.html" style={{ textDecoration: 'none', color: '#4c4c4c' }}>Accueil</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Tableau de bord</li>
                </ol>
              </nav>
            </Col>
          </Row>
        
        </Container>
     
      </div>
       <Col style={{marginTop:'20px',marginBottom:'20px'}}>
       <AppointmentTab />
       </Col>
       <div className="text-center" style={{ marginTop: '20px', marginLeft: '45%' }}>
          {paginationBasic}
        </div>
    
    </div>
  );
}

export default Dashboardd;