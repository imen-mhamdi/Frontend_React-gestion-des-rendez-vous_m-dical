import React from 'react';
import doctorImage from '../../assets/image/doctor.jpg';
import doctorImage1 from '../../assets/image/img1.jpg';
import { Container, Row, Col, Card, Form, Button, Pagination } from 'react-bootstrap';
import { FaArrowUp, FaComment } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useState } from 'react'; // You already have this import
import Modal from 'react-bootstrap/Modal'; // Keep only this import
import Chat from '../Chats/chat/Chat'
const doctors = [
  {  
    firstName: ' Ahmed ',
    lastName: 'jallel',
    email: 'Ben Slimane@gmail.com',
    phone: '+216 25550620',
    specialty: 'Cardiologie',
    image: doctorImage,
  },
  {
    firstName: 'Dr. Souhail',
    lastName: ' Alouini',
    email: ' Alouini.Souhail@gmail.com',
    phone: '+216 28075090',
    specialty: 'Neurologie',
    image: doctorImage1,
  },
];

const Recherche = () => {
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

  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // modal message 
  const [showMessageModal, setShowMessageModal] = useState(false);

  const handleShowMessageModal = () => setShowMessageModal(true);
  const handleCloseMessageModal = () => setShowMessageModal(false);


  return (
    <div>
      <div className="main-wrapper">
        {/* Breadcrumb */}
        <div className="breadcrumb-bar bg-blue" style={{ backgroundColor: '#6CB4EE', color: 'white' }}>
          <Container>
            <Row className="align-items-center">
              <Col md={12}>
                <nav aria-label="breadcrumb" className="page-breadcrumb text-center" style={{ margin: '10px 10px 10px 10px', color: 'white' }}>
                  <ol className="breadcrumb m-0 p-0" style={{ color: 'white', fontWeight: 'bold' }}>
                    <li className="breadcrumb-item"><a href="HomePatient" style={{ textDecoration: 'none', color: '#4c4c4c' }}>Accueil</a></li>
                    <li className="breadcrumb-item active" aria-current="page">Recherche</li>

                  </ol>
                </nav>


              </Col>
            </Row>
          </Container>
        </div>

        <div className="content" style={{ marginTop: '25px', marginLeft: '165px' }}>
          <Container fluid>
            <Row>
              <Col md={12} lg={4} xl={3} className="mb-4" >
                <Card className="search-filter">
                  <Card.Header>
                    <h4 className="card-title mb-0" style={{ textAlign: 'center' }}>Filtre de recherche</h4>
                  </Card.Header>
                  <Card.Body>
                    <Form>
                      <Form.Group controlId="formDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control type="date" placeholder="Select Date" />
                      </Form.Group>
                      <Form.Group controlId="formGender">
                        <Form.Label>Genre</Form.Label>
                        <Form.Check type="checkbox" label="Mâle" />
                        <Form.Check type="checkbox" label="Femelle" />
                      </Form.Group>
                      <Form.Group controlId="formSpecialty">
                        <Form.Label>Sélectionner un spécialiste</Form.Label>
                        <Form.Check type="checkbox" label="Urologie" />
                        <Form.Check type="checkbox" label="Neurologie" />
                        <Form.Check type="checkbox" label="Dentiste" />
                        <Form.Check type="checkbox" label="Orthopédique" />
                        <Form.Check type="checkbox" label="Cardiologue" />
                      </Form.Group>
                      <Button variant="primary" className="btn-block" style={{ marginTop: '12px' }}>Rechercher</Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>

              <Col md={12} lg={9} xl={7}>
                {doctors.map((doctor, index) => (
                  <Card className="mb-4" key={index}>
              
                    <Card.Body>
                    
                      <div className="doctor-widget">
                        <Row>
                          <Col md={3} className="text-center">
                            <div className="doctor-img">
                              <a href="doctor-profile.html">
                                <img src={doctor.image} className="img-fluid" alt="User" style={{ maxWidth: '150px' }} />
                              </a>
                            </div>
                          </Col>
                          <Col md={6}>
                            <div className="doc-info-cont" style={{ marginLeft: '15px' }}>
                              <h5 className="doc-name mb-2">{`${doctor.firstName} ${doctor.lastName}`}</h5>
                              <p className="doc-speciality mb-1">{doctor.specialty}</p>
                              <p className="doc-department">{doctor.phone}</p>
                              <p className="doc-department">{doctor.email}</p>
                            </div>
                          </Col>
                          <Col md={3}>
                          <i class="bi bi-bookmark-heart-fill"  style={{marginLeft:'80%', fontSize:'22px'}}></i>
                            <div className="doc-info-right" style={{ marginTop: '8px', marginBottom: '23px', padding: '20px 20px 20px 20px' }}>
                              <Button variant="primary" className="btn-sm mb-2 w-100 mr-md-2" style={{ padding: '10px 10px 10px 10px', color: 'white', textDecoration: 'none' }}>
                                <Link to="/DoctorProfile" style={{ color: 'white', textDecoration: 'none' }}>Voir le profil</Link> </Button>
                              <Button variant="info" className="btn-sm w-100" onClick={handleShow} style={{ padding: '10px 10px 10px 10px', backgroundColor: 'transparent', border: '1px solid #17a2b8', color: 'black' }}>Réserver</Button>

                              <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                  <Modal.Title>Réserver maintenant</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <form>
                                    <div className="mb-3">
                                      <label htmlFor="datePicker" className="form-label">Date de réservation</label>
                                      <input type="date" className="form-control" id="datePicker" />
                                    </div>
                                    <div className="mb-3">
                                      <label htmlFor="timePicker" className="form-label">Heure de réservation</label>
                                      <input type="time" className="form-control" id="timePicker" />
                                    </div>
                                  </form>
                                </Modal.Body>
                                <Modal.Footer>
                                  <Button variant="secondary" onClick={handleClose}>
                                    Close
                                  </Button>
                                  <Button variant="primary" onClick={handleClose}>
                                    Réserver
                                  </Button>
                                </Modal.Footer>
                              </Modal>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Card.Body>
                  </Card>
                ))}
              </Col>
            </Row>
          </Container>
        </div>
        <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' , backgroundColor: '#6CB4EE', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
   
          <FaComment  onClick={handleShowMessageModal} style={{fontSize: '25px' , color:'white' }} />
          <Modal
        show={showMessageModal}
        onHide={handleCloseMessageModal}
        dialogClassName="modal-lg"  centred>
        <Modal.Header closeButton>
        </Modal.Header>
        <Modal.Body >
          <Chat />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseMessageModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseMessageModal}>
            Send
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
        <div className="text-center" style={{ marginTop: '20px', marginLeft: '50%' }}>
          {paginationBasic}
        </div>
          

        <div style={{ marginTop: '20px', marginLeft: '95%', marginBottom: '20px' }}>
          <div style={{ backgroundColor: '#6CB4EE', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <FaArrowUp onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ fontSize: '2em', color: 'white', cursor: 'pointer' }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recherche;
