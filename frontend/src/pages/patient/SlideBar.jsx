
import React, { useState } from 'react';

const SlideBar = () => {
  
    <Container>
    <Row className="p-0">
  <Col className="px-0">
    <div className='container-fluid min-vh-100'>
      <div className='col-3 bg-white' style={{ marginTop: '40px' }}>
        <div className="bg-white p-2">
          <Nav className="flex-column dashboard-menu">
            <div className='list-group list-group-flush'>
              <Link to="/AppointmentTab" className='list-group-item py-2 my-1' style={{ textDecoration: 'none', backgroundColor: 'white' }}>
                <i className="bi bi-speedometer2 fs-5 me-3"></i>
                <span className='fs-5'> Dashboard </span>
              </Link>
              <Link to="/Favoris" className='list-group-item py-2 my-1' style={{ textDecoration: 'none', backgroundColor: 'white' }}>
                <i className="bi bi-balloon-heart fs-5 me-3"></i>
                <span className='fs-5'> Favouris</span>
              </Link>
              <Link to="/Message" className='list-group-item py-2 my-1' style={{ textDecoration: 'none', backgroundColor: 'white' }}>
                <i className="bi bi-chat-fill fs-5 me-3"></i>
                <span className='fs-5'> Message</span>
                <small className="unread-msg">23</small>
              </Link>
              <Link to="/Parametre" className='list-group-item py-2 my-1' style={{ textDecoration: 'none', backgroundColor: 'white' }}>
                <i className="bi bi-person-check fs-5 me-3"></i>
                <span className='fs-5'> Parametre</span>
              </Link>
              <Link to="/AppointmentTab" className='list-group-item py-2 my-1' style={{ textDecoration: 'none', backgroundColor: 'white' }}>
                <i className="bi bi-box-arrow-right fs-5 me-3"></i>
                <span className='fs-5'>deconnecter </span>
              </Link>
            </div>
          </Nav>
        </div>
      </div>
    </div>
  </Col>
  </Row>

</Container>

};
export default SlideBar
