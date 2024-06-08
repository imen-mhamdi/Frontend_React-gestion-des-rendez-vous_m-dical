import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap'; // Assurez-vous que ces importations sont correctes
import { FaGoogle } from 'react-icons/fa'; // Pour l'icône Google 




const ReservationForm = () => {





        const googleAuth = () => {
          window.open(`http://localhost:8080/auth/google/callback`, "_self"); // or your correct URL
      
      
          };
      
        const [showPassword, setShowPassword] = useState(false);
        const [incorrectEmail, setIncorrectEmail] = useState(false);
        const [incorrectPassword, setIncorrectPassword] = useState(false);
        
        const [email, setEmail] = useState("");
        const [password, setPassword] = useState("");
      
        const handlePasswordToggle = () => {
          setShowPassword(!showPassword);
        };
      
        const validateEmail = (email) => {
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex de validation d'email
          return regex.test(email);
        };
      
        const handleLogin = () => {
          const passwordIsCorrect = false; // Simuler une validation du mot de passe
          const emailIsCorrect = validateEmail(email);
      
          setIncorrectEmail(!emailIsCorrect);
          setIncorrectPassword(!passwordIsCorrect);
      
          if (!emailIsCorrect || !passwordIsCorrect) {
            return;
          }
      
          // Logique de connexion réussie ici
        };
      
  // Ajoutez ici des états, des fonctions de gestion, etc.
  
  const handleReservation = () => {
    // Logique pour gérer la réservation
    alert("Réservation effectuée");
  };

  return (
    <Container
    fluid
    className="d-flex justify-content-center align-items-center"
    style={{ 
      height: '80vh',
      backgroundColor: '#f0f0f0', // Fond gris
    }}
  >
    <Row>
      <Col className="d-flex justify-content-center flex-column align-items-center">
        {incorrectEmail && (
          <Alert
            variant="danger"
            className="text-center mb-4"
            style={{
              width: '400px',
              height: '40px',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            Email incorrect
          </Alert>
        )}
        {incorrectPassword && (
          <Alert
            variant="danger"
            className="text-center mb-4"
            style={{
              width: '400px',
              height: '40px',
              padding: '10px',
              borderRadius: '5px',
            }}
          >
            Mot de passe incorrect
          </Alert>
        )}
        <div
          className="form-overlay"
          style={{
            width: '400px',
            background: 'rgba(255, 255, 255, 0.8)',
            padding: '20px',
            borderRadius: '10px',
            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          <Form className="text-center">
            <h3 className="mb-4">Se connecter</h3>
            <Form.Group controlId="email" className="mb-3">
              <Form.Control
                type="email"
                placeholder="Entrez votre email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <Form.Group controlId="password" className="mb-3">
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                placeholder="Entrez votre mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>
            <Button
              variant="primary"
              onClick={handleLogin}
            >
              Se connecter
            </Button>
            <div className="text-center mt-3">
              <Button variant="link" onClick={() => alert('Réinitialisation du mot de passe')}>
                Mot de passe oublié ?
              </Button>
            </div>
            <div className="text-center my-4">
              <hr style={{ width: '80%', margin: 'auto' }} />
              <span className="bg-white px-3">ou</span>
            </div>
            <Button  variant="danger" onClick={googleAuth}>
              <FaGoogle /> S'inscrire avec Google
            </Button>
            <div className="text-center mt-4">
              Je n'ai pas de compte? <a href="/signup">S'inscrire</a>
            </div>
          </Form>
        </div>
      </Col>
    </Row>
  </Container>
  );
};

export default ReservationForm ;
