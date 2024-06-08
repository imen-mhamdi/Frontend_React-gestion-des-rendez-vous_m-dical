import doctorImage from '../../assets/image/doctor.jpg';
import React, { useState } from 'react';
import { Tab, Container, Row, Col, Card, Nav, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import CommentSection from '../patient/CommentSection';
import Modal from 'react-bootstrap/Modal';
const doctors = [
  {
    firstName: 'Dr. Slimane',
    lastName: 'Ben Slimane',
    email: 'Ben Slimane@gmail.com',
    phone: '+216 25550620',
    specialty: 'Cardiologie',
    image: doctorImage,
  },
]

const DoctorProfile = () => {

  //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // modal message 
  const [showMessageModal, setShowMessageModal] = useState(false);

  const handleShowMessageModal = () => setShowMessageModal(true);
  const handleCloseMessageModal = () => setShowMessageModal(false);

  

  return (

    <div className="main-wrapper">
      {/* Breadcrumb */}
      <div className="breadcrumb-bar bg-blue" style={{ backgroundColor: '#6CB4EE', color: 'white' }}>
        <Container>
          <Row className="align-items-center">
            <Col md={12}>
              <nav aria-label="breadcrumb" className="page-breadcrumb text-center" style={{ margin: '10px 10px 10px 10px', color: 'white' }}>
                <ol className="breadcrumb m-0 p-0" style={{ color: 'white', fontWeight: 'bold' }}>
                  <li className="breadcrumb-item"><a href="HomePatient" style={{ textDecoration: 'none', color: '#4c4c4c' }}>Accueil</a></li>
                  <li className="breadcrumb-item"><a href="Recherche" style={{ textDecoration: 'none', color: '#4c4c4c' }}>Recherche</a></li>
                  <li className="breadcrumb-item active" aria-current="page">Profil du médecin</li>
                </ol>
              </nav>
            </Col>

          </Row>
        </Container>
      </div>

      {/* Doctor Profile */}
      <Container className="mt-5">
        <Row>
          {doctors.map((doctor, index) => (
            <Col md={12} key={index}>
              <Card className="mb-4">
                <Card.Body>
                  <div className="doctor-widget">
                    <Row>
                      <Col md={3} className="text-center">
                        <div className="doctor-img">
                          <a href="doctor-profile.html">
                            <img src={doctor.image} className="img-fluid" alt="Doctor" style={{ maxWidth: '150px' }} />
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
                        <div className="doc-info-right" style={{ marginTop: '8px', marginBottom: '23px', padding: '20px 20px 20px 20px' }}>
                          <Link to="/DoctorProfile" style={{ color: 'white', textDecoration: 'none' }}>
                            <Button variant="primary" className="btn-sm mb-2 w-100 mr-md-2" onClick={handleShow} style={{ padding: '10px 10px 10px 10px', color: 'white', textDecoration: 'none' }}>
                              Réserver
                            </Button>
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
                          </Link>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <div className="card">
          <div className="card-body pt-0">
            <Tab.Container id="doc-tabs" defaultActiveKey="doc_overview">
              <Nav variant="tabs" className="user-tabs mb-4">
                <Nav.Item>
                  <Nav.Link eventKey="doc_overview">Aperçu</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="doc_reviews">Commentaires</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="doc_business_hours">Heures de travail</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="doc_overview">
                  <div className="doctor-about">
                    <h5 className="section-title mb-3" style={{ fontWeight: 'bold', color: '#6CB4EE' }}> <i class="bi bi-backspace-reverse-fill"></i>  À propos de moi</h5>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                  </div>
                  <div className="doctor-education">
                    <h5 className="section-title mb-3" style={{ fontWeight: 'bold', color: '#6CB4EE' }}><i class="bi bi-file-earmark-check-fill"></i> Éducation</h5>
                    <p>Université médicale dentaire américaine - BDS (1998 - 2003)</p>
                    <p>Université médicale dentaire américaine - MDS (2003 - 2005)</p>
                  </div>
                  <div className="doctor-work">
                    <h5 className="mb-3" style={{ fontWeight: 'bold', color: '#6CB4EE' }}><i class="bi bi-award"></i> Travail et expérience</h5>
                    <p>Glowing Smiles Family Dental Clinic - 2010 - Présent (5 ans)</p>
                    <p>Comfort Care Dental Clinic - 2007 - 2010 (3 ans)</p>
                    <p>Dream Smile Dental Practice - 2005 - 2007 (2 ans)</p>
                  </div>
                  <div className="doctor-awards">
                    <h5 className="section-title mb-3" style={{ fontWeight: 'bold', color: '#6CB4EE' }}> <i class="bi bi-clipboard"></i> Prix</h5>
                    <p>Juillet 2019 - Prix humanitaire</p>
                    <p>Mars 2011 - Certificat de service volontaire international</p>
                    <p>Mai 2008 - Le prix du professionnel dentaire de l'année</p>
                  </div>
                  <div className="doctor-services">
                    <h5 className="section-title mb-3" style={{ fontWeight: 'bold', color: '#6CB4EE' }}><i class="bi bi-bag-heart-fill"></i> Services</h5>
                    <ul>
                      <li>Nettoyage des dents</li>
                      <li>Thérapie du canal radiculaire</li>
                      <li>Implants</li>
                      <li>Collage composite</li>
                      <li>Scellement des fissures</li>
                      <li>Extractions chirurgicales</li>
                    </ul>
                  </div>
                  <div className="doctor-specializations">
                    <h5 className="section-title mb-3" style={{ fontWeight: 'bold', color: '#6CB4EE' }}> <i class="bi bi-escape"></i> Spécialisations</h5>
                    <ul>
                      <li>Soins pour enfants</li>
                      <li>Soins dentaires</li>
                      <li>Chirurgie buccale et maxillo-faciale</li>
                      <li>Orthodontiste</li>
                      <li>Parodontiste</li>
                      <li>Prosthodontie</li>
                    </ul>
                  </div>
                </Tab.Pane>
              </Tab.Content>
              <Tab.Pane eventKey="doc_reviews">
                <CommentSection />
              </Tab.Pane>
              <Tab.Content>
                <Tab.Pane eventKey="doc_business_hours">
                  <div className="row">
                    <div className="col-md-6 offset-md-3">
                      <div className="widget business-widget">
                        <div className="widget-content">
                          <div className="listing-calendar">
                            <div className="calendar-body">
                              <div className="day" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc' }}>
                                <span className="day" style={{ marginRight: 'auto' }}>Lundi</span>
                                <span className="time">07:00 - 21:00</span>
                              </div>
                              <div className="day" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc' }}>
                                <span className="day" style={{ marginRight: 'auto' }}>Mardi</span>
                                <span className="time">07:00 - 21:00</span>
                              </div>
                              <div className="day" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc' }}>
                                <span className="day" style={{ marginRight: 'auto' }}>Mercredi</span>
                                <span className="time">07:00 - 21:00</span>
                              </div>
                              <div className="day" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc' }}>
                                <span className="day" style={{ marginRight: 'auto' }}>Jeudi</span>
                                <span className="time">07:00 - 21:00</span>
                              </div>
                              <div className="day" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc' }}>
                                <span className="day" style={{ marginRight: 'auto' }}>Vendredi</span>
                                <span className="time">07:00 - 21:00</span>
                              </div>
                              <div className="day" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderRight: '1px solid #ccc', borderBottom: '1px solid #ccc' }}>
                                <span className="day" style={{ marginRight: 'auto' }}>Samedi</span>
                                <span className="time">07:00 - 21:00</span>
                              </div>
                              <div className="day closed" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#ffe6e6' }}>
                                <span className="day" style={{ marginRight: 'auto' }}>Dimanche</span>
                                <span className="time"><span className="badge bg-danger-light" style={{ fontSize: '20px' }}>Fermé</span></span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Tab.Pane>

              </Tab.Content>
            </Tab.Container>


          </div>
        </div>
      </Container>

   

    </div>
  );
};

export default DoctorProfile;
