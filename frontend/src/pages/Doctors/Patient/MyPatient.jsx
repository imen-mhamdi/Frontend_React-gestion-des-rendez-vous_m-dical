import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import patientImage1 from '../../../assets/image/patient1.jpg';
import patientImage2 from '../../../assets/image/patient2.jpg';
import patientImage3 from '../../../assets/image/patient3.jpg';
import patientImage4 from '../../../assets/image/patient4.jpg';
import patientImage5 from '../../../assets/image/patient5.jpg';
import patientImage6 from '../../../assets/image/patient6.jpg';

const MyPatient = () => {

  const patientData = [
    {
      name: 'Ahmed jallel',
      id: 'PT0001',
      phone: '28075090',
      age: '7 Years',
      genre:'Male',
      bloodGroup: 'B+',
      image: patientImage1,
    },
    {
      name: 'Amen Allah',
      id: 'PT0002',
      phone: ' 26023470',
      age: '5 Years',
      genre:'Male',
      bloodGroup: 'O+',
      image: patientImage2,
    },
    {
      name: 'khalil mhamdi',
      id: 'PT0003',
      phone: ' 90029277',
      age: '8 Years, ',
      genre:'Female',
      bloodGroup: 'A-',
      image: patientImage3,
    },
    {
      name: 'Amine jaber',
      id: 'PT0004',
      phone: '96692909',
      age: '30 Years, Male',
      bloodGroup: 'O+',
      image: patientImage4,
    },
    {
      name: 'Sami Dridi',
      id: 'PT0005',
      phone: ' 99777938',
      age: '25 Years',
      genre:'Female',
      bloodGroup: 'A-',
      image: patientImage5,
    },
    {
      name: 'Zoubair Saoui',
      id: 'PT0006',
      phone: ' 50520555',
      age: '23 Years',
      genre:'Male',
      bloodGroup: 'B+',
      image: patientImage6,
    }
  ];

  return (
    <div className="content">
      <div className="main-wrapper">
        <div className="content" style={{ marginTop: '25px', marginLeft: '165px', marginBottom:'20px' }}>
          <Container fluid>
            <Row>
              {patientData.map((patient, index) => (
                <Col key={index} md={6} lg={4} xl={4}>
                  <div className="card widget-profile pat-widget-profile" style={{ marginBottom: '20px' }}>
                    <div className="card-body d-flex align-items-center justify-content-center flex-column">
                      <div className="profile-info-widget">
                        <a href="#" className="booking-doc-img">
                          <img src={patient.image} alt="User" style={{ borderRadius: '50%', width: '150px', height: '150px', marginBottom: '20px' }} />
                        </a>
                        <div className="profile-det-info text-left">
                          <h4>{patient.name}</h4>
                          <div className="patient-details">
                            <h6><b>Patient ID :</b> {patient.id}</h6>
                          </div>
                        </div>
                      </div>
                      <hr style={{ width: '50%', marginBottom: '10px' }} />
                      <div className="patient-info text-left">
                        <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                          <li><b style={{ marginRight:'10px'}}>Téléphone</b> {patient.phone}</li>
                          <li><b style={{ marginRight:'55px'}}>âge</b>&nbsp; {patient.age}</li>
                          <li><b style={{ marginRight:'55px'}}>Genre</b>&nbsp; {patient.genre}</li>
                          <li><b style={{ marginRight:'20px'}}>Blood Group</b>&nbsp; {patient.bloodGroup}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </Col>
              ))}
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
}

export default MyPatient;
