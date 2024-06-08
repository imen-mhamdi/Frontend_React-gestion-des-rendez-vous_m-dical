import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import logo from '../../assets/image/logo.png';

const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#313131', padding: '20px 0' }}>
      <Container>
        <Row>
          {/* Colonne 1: Logo */}
          <Col xs={6} md={2} className="d-flex justify-content-start">
            <img src={logo} alt="Logo" style={{ width: '150px', height: '100px' }} /> 
          </Col>

          {/* Colonne 2: Adresse de la Clinique */}
          <Col xs={12} md={3} style={{ color: 'white' }}>
            <h6 style={{ marginBottom: '20px' }}>Clinique ABC</h6> 
            <p style={{ fontSize: '14px', fontWeight: 'normal' }}>
              123 Rue Principale<br />
              Ville, Code Postal<br />
              Téléphone: (123) 456-7890<br />
              Fax: (123) 456-7891<br />
              Localisation GPS: X, Y
            </p>
          </Col>

          {/* Colonne 3: Réseaux Sociaux */}
          <Col xs={12} md={2} className="d-flex flex-column align-items-center" style={{ color: 'white' }}>
          <h6 style={{ marginBottom: '20px' }}>Suivez-nous</h6>
            <div className="d-flex justify-content-center">
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
                <FaFacebook size={24} color="white" style={{ marginRight: '10px' }} />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
                <FaInstagram size={24} color="white" style={{ marginRight: '10px' }} />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin size={24} color="white" />
              </a>
            </div>
          </Col>

          {/* Colonne 4: Liens Utiles */}
          <Col xs={12} md={3} style={{ color: 'white' }}>
          <h6 style={{ marginBottom: '20px' }}>Liens utiles</h6>
            <ul className="list-unstyled" style={{ fontSize: '14px', fontWeight: 'normal'}}>
              <li><a href="/home" style={{ color: 'white',textDecoration: 'none' }}>Accueil</a></li>
              <li><a href="/services" style={{ color: 'white',textDecoration: 'none' }}>Services</a></li>
              <li><a href="/contact" style={{ color: 'white',textDecoration: 'none' }}>Contactez-nous</a></li>
              <li><a href="/about" style={{ color: 'white',textDecoration: 'none' }}>À propos</a></li>
            </ul>
          </Col>

          {/* Colonne 5: Informations Complémentaires */}
          <Col xs={12} md={2} style={{ color: 'white' }}>
          <h6 style={{ marginBottom: '20px' }}>Informations</h6>
            <p style={{ fontSize: '14px', fontWeight: 'normal' }}> {/* Taille du texte réduite */}
              Horaires d'ouverture: 8h - 18h<br />
              Du lundi au vendredi
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
