import React, { useContext, useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import axios from "axios";
import HomePatient from '../pages/patient/HomePatient';
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import {jwtDecode} from 'jwt-decode';
import { FaGoogle } from 'react-icons/fa'; 
import dotenv from 'dotenv';
import { AuthContext } from '../components/context/AuthContext';
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const {} = useContext(AuthContext)
  const [cookies, setCookie] = useCookies(["jwt"]);
  const navigate = useNavigate();
  const { auth, setAuth } = useContext(AuthContext);

  const handleSubmit = (e) => {
    console.log("response")
    e.preventDefault();

       const data = {
      email,
      password,
    };

    axios
      .post("http://localhost:5000/user/login", data)
      .then((response) => {
        setCookie("jwt", response.data.jwtToken, { path: "/" });
        console.log("response",response.data)
        // Decode the JWT to get user information
        const decodedToken = jwtDecode(response.data.jwtToken);
         console.log("token",decodedToken.role)
        // Extract the user's role
        const userRole = decodedToken.role;
        setAuth({
          accessToken: response.data.jwtToken,
          email: decodedToken.email,
          userId:decodedToken._id,
          role: decodedToken.role
        })
      
        localStorage.setItem("userrole",decodedToken.role)
        if(userRole == "docteur"){
          navigate ('/Appointment')
        } else {  
          if(userRole == "patient"){
           navigate('/HomePatient')
          }
        }
        
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const googleAuth = () => {
    window.open(`http://localhost:8080/auth/google/callback`, "_self"); // or your correct URL


	};

  const [showPassword, setShowPassword] = useState(false);
  const [incorrectEmail, setIncorrectEmail] = useState(false);
  const [incorrectPassword, setIncorrectPassword] = useState(false);

/*
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
*/
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
            <Form className="text-center" onSubmit={handleSubmit }>
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
                variant="primary" type='submit'
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

export default Login;
