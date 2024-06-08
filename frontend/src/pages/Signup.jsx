import React, { useState } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { FaGoogle } from 'react-icons/fa';
import { useNavigate } from "react-router-dom";

const Signup = () => {
  
  const [showPassword, setShowPassword] = useState(false);
  const [incorrectEmail, setIncorrectEmail] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstname,
      lastname,
      email,
      password,
      phone,
      age,
    };
    console.log("data", data);

    axios
      .post("http://localhost:5000/user/register", data)
      .then((response) => {
        console.log(response);
        if (response.data.status) {
          alert("hello " + response.data);
        }

        navigate ('/accueil')
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleImageChange = (event) => {
    // Handle image change logic here
  };
  
  return (
    <div style={{ backgroundColor: '#f0f0f0', paddingTop: '20px', paddingBottom: '20px' }}>
    <Container
      fluid
      className="d-flex justify-content-center align-items-center"
      style={{
     
        paddingTop: '30px', 
        paddingBottom: '30px',  
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
              width: '900px',
              background: 'rgba(255, 255, 255, 0.8)',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
            }}
          >
            <Form className="text-center" onSubmit={handleSubmit}>
              <h3 className="mb-4">S'inscrire</h3>
              <Row>
                <Col>
                  <Form.Group controlId="firstname" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Entrez votre prénom"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      required 
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="lastname" className="mb-3">
                    <Form.Control
                      type="text"
                      placeholder="Entrez votre nom"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      required  
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="phone" className="mb-3">
                    <Form.Control
                      type="tel"
                      placeholder="Entrez votre numéro de téléphone"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required  
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="age" className="mb-3">
                    <Form.Control
                      type="number"
                      placeholder="Entrez votre âge"
                      value={age}
                      onChange={(e) => setAge(e.target.value)}
                      min={18} 
                      max={65}  
                      required  
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="email" className="mb-3">
                    <Form.Control
                      type="email"
                      placeholder="Entrez votre email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required 
                      pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" 
                    />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group controlId="password" className="mb-3">
                    <Form.Control
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Entrez votre mot de passe"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required  
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group controlId="image" className="mb-3">
                    <Form.Control
                      type="file"
                      onChange={handleImageChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Button
                variant="primary" type='submit'
              >
                S'inscrire
              </Button>
              <div className="text-center my-4">
                <hr style={{ width: '80%', margin: 'auto' }} />
                <span className="bg-white px-3">ou</span>
              </div>
              <Button variant="danger">
                <FaGoogle /> S'inscrire avec Google
              </Button>
              <div className="text-center mt-4">
                J'ai déjà un compte? <a href="/login">Se connecter</a>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
    </div>
  );
};

export default Signup;
