import React, { useState } from 'react';
import { Navbar, Nav, Container, Dropdown, Button, Figure } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/image/logo.png';
import { useCookies } from 'react-cookie';

import userImg from '../../assets/image/userImg.png';
import axios from 'axios';
const navLinks = [
  { path: '/HomePatient', display: 'Accueil' },
  { path: '/Recherche', display: 'Recherche médecin' },
  { path: '/Dashboardd', display: 'Tableau de bord' },
];

const Headerpatient = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);

  const handleLogout = async () => {
    try {
        const response = await axios.post(
            "http://localhost:5000/user/logout"
        );
        console.log("response",response)

        // Remove JWT token from cookies
        removeCookie("jwt", { path: "/" });

      navigate ('/Home')
        // Optionally, clear any user-related data from state or local storage
    } catch (error) {
        console.log("Error logging out:", error);
        // Handle logout error
    }
  }
  const [isHovered, setIsHovered] = useState(false);

  const [expanded, setExpanded] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };
  const buttonStyle = {
    backgroundColor: isHovered ? 'blue' : 'var(--primary-color)',
    padding: '8px 30px',
    borderRadius: '10px',
    fontWeight: 500,
    marginRight: '0px',
    color: isHovered ? 'white' : 'blue',
  };




  return (
    <Navbar bg="light" expand="lg" expanded={expanded}>
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} alt="Logo" style={{ width: '50px', height: 'auto' }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleNavbar} />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navLinks.map((item, index) => (
              <Nav.Link
                as={NavLink}
                to={item.path}
                key={index}
                onClick={() => setExpanded(false)}
                style={{
                  color: 'black',
                  fontWeight: 500,
                  padding: '5px 20px',
                  transition: 'all 0.4s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'blue')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'black')}
              >
                {item.display}
              </Nav.Link>
            ))}
          </Nav>


          <Nav>

            <Dropdown>
              <NavLink to="/Favoris" style={{ color: 'black', textDecoration: 'none' }}>
                <i class="bi bi-heart-fill " style={{ marginRight: '20px', color: 'red', fontSize: '25px' }}></i>
              </NavLink>
              <NavLink to="/chat" style={{ color: 'black', textDecoration: 'none' }}>
                <i class="bi bi-envelope-fill" style={{ marginRight: '20px', color: '#e6b800', fontSize: '25px' }}></i>
              </NavLink>


              <i className="bi bi-bell-fill" style={{ fontSize: '25px', color: '#00cc66', cursor: 'pointer', marginRight: '20px' }} onClick={toggleNotifications}></i>
              {showNotifications && (
                <div style={{ position: 'absolute', top: 'calc(100% + 5px)', right: '50px', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '5px', padding: '10px', zIndex: 999, textDecoration: 'none' }}>
                  <NavLink to="/notifications" style={{ display: 'block', color: '#333', textDecoration: 'none', marginBottom: '5px' }}>Notification 1</NavLink>
                  <NavLink to="/notifications" style={{ display: 'block', color: '#333', textDecoration: 'none', marginBottom: '5px' }}>Notification 2</NavLink>
                  <NavLink to="/notifications" style={{ display: 'block', color: '#333', textDecoration: 'none', marginBottom: '5px' }}>Notification 3</NavLink>
                </div>
              )}

              <NavLink to="/">
                <Figure className="rounded-circle" style={{ width: '35px', height: '35px', marginTop: '20px', marginRight: '20px' }}>
                  <img src={userImg} className="img-fluid" alt="User" />
                </Figure>
              </NavLink>

              <Dropdown.Toggle style={{ backgroundColor: 'lightgray', textAlign: 'center', }} id="dropdown-basic">
              </Dropdown.Toggle>

              <Dropdown.Menu style={{marginLeft:'150px'}}>
                <Dropdown.Item as={NavLink} to="/Parametre">paramètre de profil</Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/Dashboardd">Tableau de bord</Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/Logout" onClick={handleLogout}>Se déconnecter</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};



export default Headerpatient;
