import React from 'react'
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const HeaderAdmin = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>

        <Navbar.Collapse id="basic-navbar-nav">


          <Nav className="ml-auto align-items-center">
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <NavLink to="/chat" style={{ color: 'black', textDecoration: 'none' }}>
                <i className="bi bi-envelope-fill" style={{ marginRight: '20px', color: '#e6b800', fontSize: '25px' }}></i>
              </NavLink>
            </div>
            <Dropdown>
              <Dropdown.Toggle style={{ backgroundColor: 'lightgray', textAlign: 'center' }} id="dropdown-basic">
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item as={NavLink} to="/ParametreA">Paramètre de profil</Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/Parametre">Supprimer mon profil</Dropdown.Item>
                <Dropdown.Item as={NavLink} to="/Logout">Se déconnecter</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default HeaderAdmin
