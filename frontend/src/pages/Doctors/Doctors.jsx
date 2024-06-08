import React from 'react'
import { Carousel } from 'react-bootstrap'; 
import { Image, Button, Row, Col, Card } from 'react-bootstrap';
import doctorImage from '../../assets/image/doctor.jpg';
import doctorImage1 from '../../assets/image/img1.jpg';
import doctorImage2 from '../../assets/image/img2.jpg';
const doctors = [
  { id:'1',
  firstName: ' Dr. Slimane ',

  email: 'Ben Slimane@gmail.com',
  phone: '+216 25550620',
  specialty: 'Cardiologie',
  image: doctorImage,
  },
  {
    id:'2',
    firstName: 'Dr. Souhail',
    lastName: ' Alouini',
    email: ' Alouini.Souhail@gmail.com',
    phone: '+216 28075090',
    specialty: 'Neurologie',
    image: doctorImage1,
  },
  { id:'3',
  firstName: 'Dr.Hassine ',
  lastName: ' Bouhageb',
  email: ' Hassine@gmail.com',
  phone: '+216 25787563',
  specialty: 'pneumologie',
  image: doctorImage2,
  },
  { id:'4',
  firstName: 'Dr. Souhail',
  lastName: ' Alouini',
  email: ' Alouini.Souhail@gmail.com',
  phone: '+216 28075090',
  specialty: 'Neurologie',
  image: doctorImage1,
  },
  { id:'5',
  firstName: 'Dr. Souhail',
  lastName: ' Alouini',
  email: ' Alouini.Souhail@gmail.com',
  phone: '+216 28075090',
  specialty: 'Neurologie',
  image: doctorImage1,
  },
  { id:'6',
  firstName: 'Dr. Souhail',
  lastName: ' Alouini',
  email: ' Alouini.Souhail@gmail.com',
  phone: '+216 28075090',
  specialty: 'Neurologie',
  image: doctorImage1,
  },
];

const Doctors = () => {

  const itemsPerSlide = 3; // Nombre de cartes par slide
  const slides = []; // Liste des slides

  // Créez des slides avec 3 cartes
  for (let i = 0; i < doctors.length; i += itemsPerSlide) {
    const doctorsInSlide = doctors.slice(i, i + itemsPerSlide);

    slides.push(
      <Carousel.Item key={`slide-${i}`}  >
        <Row className="justify-content-center">
          {doctorsInSlide.map((doctor) => (
            <Col key={doctor.id} md={3}>
              <Card>
                <Card.Img
                  variant="top"
                  src={doctor.image}
                  style={{ height: '150px', objectFit: 'contain', marginTop: '10px' }}
                />
                <Card.Body>
                  <Card.Title style={{ color: '#007E85' }}> {/* Couleur bleue */}
                    {doctor.firstName} {doctor.lastName}
                  </Card.Title>
                  <Card.Text>{doctor.specialty}</Card.Text>
                  <Card.Text>{doctor.email}</Card.Text>
                  <Card.Text>{doctor.phone}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Carousel.Item>
    );
  }

  return (
    <div>
      <div className="my-4" style={{ textAlign: 'center', marginTop: '200px' }}>
        <h3 style={{ color: '#007E85', fontWeight: 'bold', marginBottom: '20px' }}>
          Nos médecins
        </h3>
        <p style={{ marginBottom: '30px', marginTop: '15px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper dalar elementum tempus hac tellus libero accumsan.
        </p>
        <Carousel interval={null} indicators={true} controls={true}>
          {slides}
        </Carousel>
      </div>
    </div>
  )
}

export default Doctors
