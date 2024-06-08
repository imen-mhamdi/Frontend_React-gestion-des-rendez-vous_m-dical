import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container, Button, Figure } from 'react-bootstrap';
import logo from '../../assets/image/logo.png';
import userImg from '../../assets/image/userImg.png';
import '../Header/Header.css';


const navLinks = [
  { path: '/home', display: 'Accueil' },
  { path: '/services', display: 'Services' },
  { path: '/contact', display: 'Contactez Nous' },

  
];


const Header = () => {
  const [expanded, setExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const buttonStyle = {
    backgroundColor: isHovered ? 'blue' : 'var(--primary-color)', 
    padding: '8px 30px',
    borderRadius: '10px',
    fontWeight: 500,
    marginRight: '0px',
    color: isHovered ? 'white' : 'blue',
  };

  const toggleNavbar = () => {
    setExpanded(!expanded);
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

         
          <div className="d-flex align-items-center" style={{ justifyContent: 'flex-end' }}>
            <NavLink to="/">
              <Figure className="rounded-circle" style={{ width: '35px', height: '35px' ,marginTop:'15px'}}>
                <img src={userImg} className="img-fluid" alt="User" />
              </Figure>
            </NavLink>

            <NavLink
              to="/signup"
              style={{
                fontWeight: 'bold', 
                color: 'var(--primary-color)',
                marginRight: '15px',
                marginLeft:'20px',
                textDecoration:'none',
               
              }}
              onClick={() => setExpanded(false)}
            >
              S'inscrire
            </NavLink>



<NavLink to="/login">

  <Button
    style={buttonStyle}
    onMouseEnter={() => setIsHovered(true)}
    onMouseLeave={() => setIsHovered(false)}
    onClick={() => setExpanded(false)}  // Correction de la syntaxe avec parenthèses
  >
    Se connecter
  </Button>
</NavLink>

          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
