import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Pagination, Button } from 'react-bootstrap';
import CircularProgress from './CircularProgress'; // Import du composant CircularProgress
import icon1 from '../../assets/image/icon-01.png';
import icon2 from '../../assets/image/icon-02.png';
import icon3 from '../../assets/image/icon-03.png';
import userImage from '../../assets/image/user1.jpg'
import userImage1 from '../../assets/image/user2.jpg'
import userImage2 from '../../assets/image/user3.jpg'
import { FaArrowUp, FaEye, FaCheck, FaTimes, FaCalendarAlt, FaClock } from 'react-icons/fa';

const patient = [
    {
        firstName: 'Samir',
        lastName: 'Jalel',
        email: 'Samir.Jalel@example.com',
        date: '20/25/23',
        time: '22:20',
        phone: '+216 28075090',
        image: userImage,
    },
    {
        firstName: 'Amer',
        lastName: 'Mhamdi',
        email: 'Amer.Mhamdi@example.com',
        date: '20/25/23',
        time: '22:20',
        phone: '+216 26023470',
        image: userImage1,
    },
    {
        firstName: 'Mohamed',
        lastName: 'Jaber',
        email: 'Mohamed.Jaber@example.com',
        date: '20/25/23',
        time: '22:20',
        phone: '+216 96692909',
        image: userImage2,
    },
];

const Appointment = () => {
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
        <div className="content">
            <div className="main-wrapper">
                <div className="breadcrumb-bar bg-blue" style={{ backgroundColor: '#6CB4EE', color: 'white' }}>
                    <Container>
                        <Row className="align-items-center">
                            <Col md={12}>
                                <nav aria-label="breadcrumb" className="page-breadcrumb text-center" style={{ margin: '10px 10px 10px 10px', color: 'white' }}>
                                    <ol className="breadcrumb m-0 p-0" style={{ color: 'white', fontWeight: 'bold' }}>
                                        <li className="breadcrumb-item"><Link to="/" style={{ textDecoration: 'none', color: '#4c4c4c' }}>Accueil</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Rendez-vous des patients</li>
                                    </ol>
                                </nav>
                            </Col>
                        </Row>
                    </Container>
                </div>

                <div className="content" style={{ marginTop: '25px', marginLeft: '165px' }}>
                    <Container fluid>
                        <Row >
                            <Col md={10}>
                                <Card className="dash-card" >
                                    <Card.Body>
                                        <Row>
                                            <Col md={12} lg={4}>
                                                <div className="dash-widget dct-border-rht" style={{ minHeight: '220px' }}>
                                                    <CircularProgress percent={75} imgUrl={icon1} alt="patient" />
                                                    <div className="dash-widget-info" style={{ padding: '10px' }}>
                                                        <h6>Total Patient</h6>
                                                        <h3>1500</h3>
                                                        <p className="text-muted" style={{ marginTop: '0' }}>Till Today</p>
                                                    </div>
                                                </div>
                                            </Col>


                                            <Col md={12} lg={4}>
                                                <div className="dash-widget dct-border-rht">
                                                    <CircularProgress percent={65} imgUrl={icon2} alt="Patient" />
                                                    <div className="dash-widget-info">
                                                        <h6>Today Patient</h6>
                                                        <h3>160</h3>
                                                        <p className="text-muted">06, Nov 2019</p>
                                                    </div>
                                                </div>
                                            </Col>

                                            <Col md={12} lg={4}>
                                                <div className="dash-widget">
                                                    <CircularProgress percent={50} imgUrl={icon3} alt="Patient" />
                                                    <div className="dash-widget-info">
                                                        <h6>Appointments</h6>
                                                        <h3>85</h3>
                                                        <p className="text-muted">06, Apr 2019</p>
                                                    </div>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>


                <Row>
                    <Col md={12} lg={9} xl={10} style={{ marginTop:'20px' }}>
                        {patient.map((patient, index) => (
                            <Card className="mb-4" key={index}>
                                <Card.Body>
                                    <div className="doctor-widget">
                                        <Row>
                                            <Col md={3} className="text-center">
                                                <div className="doctor-img">
                                                    <a href="doctor-profile.html">
                                                        <img src={patient.image} className="img-fluid" alt="User" style={{ maxWidth: '150px' , height:'100px' , marginTop:'20px'}} />
                                                    </a>
                                                </div>
                                            </Col>
                                            <Col md={5}>
                                                <div className="doc-info-cont" style={{ marginLeft: '15px' }}>
                                                    <h5 className="doc-name mb-2">{`${patient.firstName} ${patient.lastName}`}</h5>
                                                    <p className="doc-speciality mb-1">{patient.specialty}</p>
                                                    <p className="doc-department">
                                                        <FaCalendarAlt /> {patient.date} <FaClock /> {patient.time}
                                                    </p>
                                                    <p className="doc-department">{patient.phone}</p>
                                                    <p className="doc-department">{patient.email}</p>
                                                </div>
                                            </Col>

                                            <Col md={4} className="d-flex justify-content-center align-items-center">
                                                <Button variant="info" size="sm" style={{ marginRight: '10px' }}>
                                                    <FaEye /> View
                                                </Button>
                                                <Button variant="success" size="sm" style={{ marginRight: '10px' }}>
                                                    <FaCheck /> Accept
                                                </Button>
                                                <Button variant="danger" size="sm" style={{ marginRight: '10px' }}>
                                                    <FaTimes /> Cancel
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>
                                    </Card.Body>
                                    </Card>
                                ))}
                            </Col>
                        </Row>
                    </Container>

                    <div className="text-center" style={{ marginTop: '20px', marginLeft: '40%' }}>
                        {paginationBasic}
                    </div>

                    <div style={{ marginTop: '20px', marginLeft: '95%', marginBottom: '20px' }}>
                        <div
                            style={{
                                backgroundColor: '#6CB4EE',
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                cursor: 'pointer', 
                            }}
                            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        >
                            <FaArrowUp style={{ fontSize: '2em', color: 'white' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Appointment;