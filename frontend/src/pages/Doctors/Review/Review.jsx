import React from 'react'
import ReviewComponents from './ReviewComponents'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
const Review = () => {
  return (
    <div className="content">
    <div className="main-wrapper">
        <div className="breadcrumb-bar bg-blue" style={{ backgroundColor: '#6CB4EE', color: 'white' }}>
            <Container>
                <Row className="align-items-center">
                    <Col md={12}>
                        <nav aria-label="breadcrumb" className="page-breadcrumb text-center" style={{ margin: '10px 10px 10px 10px', color: 'white' }}>
                            <ol className="breadcrumb m-0 p-0" style={{ color: 'white', fontWeight: 'bold' }}>
                                <li className="breadcrumb-item"><Link to="/" style={{ textDecoration: 'none', color: '#4c4c4c' }}>Accueil</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Avis</li>
                            </ol>
                        </nav>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
    <div className="content" style={{ marginTop: '25px', marginLeft: '350px', marginBottom: '50px' }}>
                <Container fluid>
                    <Row>
                        <Col md={10}>
                            <ReviewComponents />
                        </Col>
                    </Row>
                </Container>
            </div>
    </div>
  )
}

export default Review
