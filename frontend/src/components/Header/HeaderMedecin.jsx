import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Container, Dropdown, Nav, Navbar, Figure } from 'react-bootstrap';
import logo from '../../assets/image/logo.png';
import userImg from '../../assets/image/userImg.png';

const navLinks = [

  { path: '/Appointment ', display: 'Liste Rendez-vous' },
  { path: '/Patient', display: 'Mon patient' },
  { path: '/Tableau-de-bord', display: 'Tableau de bord' },
  { path: '/Review', display: 'Avis' },

];

const HeaderMedecin = () => {
  const [showNotifications, setShowNotifications] = useState(false);

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img src={logo} alt="Logo" style={{ width: '50px', height: 'auto' }} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            {navLinks.map((item, index) => (
              <Nav.Link
                as={NavLink}
                to={item.path}
                key={index}
                style={{
                  color: 'black',
                  fontWeight: 500,
                  padding: '5px 20px',
                  transition: 'all 0.4s',
                }}
              >
                {item.display}
              </Nav.Link>
            ))}
          </Nav>

          <Nav className="ml-auto align-items-center">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <NavLink to="/chat" style={{ color: 'black', textDecoration: 'none' }}>
                <i className="bi bi-envelope-fill" style={{ marginRight: '20px', color: '#e6b800', fontSize: '25px' }}></i>
              </NavLink>

              <i className="bi bi-bell-fill" style={{ fontSize: '25px', color: '#00cc66', cursor: 'pointer', marginRight: '20px' }} onClick={toggleNotifications}></i>
              {showNotifications && (
                <div style={{ position: 'absolute', top: 'calc(80% + 5px)', right: '220px', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '5px', padding: '10px', zIndex: 999 }}>
                  <NavLink to="/notifications" style={{ display: 'block', color: '#333', textDecoration: 'none', marginBottom: '5px' }}>Notification 1</NavLink>
                  <NavLink to="/notifications" style={{ display: 'block', color: '#333', textDecoration: 'none', marginBottom: '5px' }}>Notification 2</NavLink>
                  <NavLink to="/notifications" style={{ display: 'block', color: '#333', textDecoration: 'none', marginBottom: '5px' }}>Notification 3</NavLink>
                </div>
              )}



              <NavLink to="/ScheduleTimings" style={{ color: 'black', textDecoration: 'none' }}>
                <i className="bi bi-calendar2-day" style={{ color: 'red',marginRight: '20px',fontSize: '25px'  }}></i>
              </NavLink>

              <NavLink to="/">
                <Figure className="rounded-circle" style={{ width: '35px', height: '35px', marginTop: '20px', marginRight: '20px' }}>
                  <img src={userImg} className="img-fluid" alt="User" />
                </Figure>
              </NavLink>




            </div>


            <Dropdown>
              <Dropdown.Toggle style={{ backgroundColor: 'lightgray', textAlign: 'center' }} id="dropdown-basic">
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/Parametre">paramètre de profil</Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/Tableau-de-bord">Tableau de bord</Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/Logout">Se déconnecter</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default HeaderMedecin;
