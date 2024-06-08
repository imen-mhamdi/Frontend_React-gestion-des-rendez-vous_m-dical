import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import logo from '../../../assets/image/logo.png'
import { Link } from 'react-router-dom';
const RapportView = () => {
  return (

        <div className="main-wrapper">
                    <div className="main-wrapper">
                <div className="breadcrumb-bar bg-blue" style={{ backgroundColor: '#6CB4EE', color: 'white' }}>
                    <Container>
                        <Row className="align-items-center">
                            <Col md={12}>
                                <nav aria-label="breadcrumb" className="page-breadcrumb text-center" style={{ margin: '10px 10px 10px 10px', color: 'white' }}>
                                    <ol className="breadcrumb m-0 p-0" style={{ color: 'white', fontWeight: 'bold' }}>
                                        <li className="breadcrumb-item"><Link to="/" style={{ textDecoration: 'none', color: '#4c4c4c' }}>Accueil</Link></li>
                                        <li className="breadcrumb-item"><Link to="/Tableau-de-bord" style={{ textDecoration: 'none', color: '#4c4c4c' }}>Tableau de bord</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Fiche</li>
                                    </ol>
                                </nav>
                            </Col>
                        </Row>
                    </Container>
                </div>
                </div>

            <div className="content" style={{marginTop:'60px' , marginBottom:'50px'}}>
                <Container>
                    <Row>
                        <Col lg={8} className="offset-lg-2">
                            <Card className="invoice-content">
                                <Card.Body>
                            
                                    <div className="invoice-item">
                                        <Row>
                                            <Col md={6}>
                                                <div className="invoice-logo">
                                                    <img src={logo} alt="logo" style={{width:'100px'}} />
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <p className="invoice-details"style={{marginLeft:'20%'}}>
                                                    <strong>Numéro de dossier</strong> RAP-0010<br />
                                                    <strong>Date:</strong> 15/05/2024
                                                </p>
                                            </Col>
                                        </Row>
                                    </div>
                                   
                                    <div className="invoice-item" style={{marginTop:'30px'}}>
                                        <Row>
                                            <Col md={6}>
                                                <div className="invoice-info">
                                                    <strong className="customer-text">Fiche de</strong>
                                                    <p className="invoice-details invoice-details-two">
                                                   DR .Kamoun <br />
                                                   Clinique pédiatrique de Tunis , <br />
                                                   Tunis <br />
                                                    </p>
                                                </div>
                                            </Col>
                                            <Col md={6}>
                                                <div className="invoice-info invoice-info2" style={{marginLeft:'80px'}}>
                                                    <strong className="customer-text">Fiche à</strong>
                                                    <p className="invoice-details">
                                                    Ahmed Jallel <br />
                                                     Télephone :96692909,<br />
                                                       
                                                    </p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                
                                   
                                    <div className="invoice-item invoice-table-wrap" style={{marginTop:'50px'}}>
                                        <Row>
                                            <Col md={12}>
                                                <div className="table-responsive">
                                                    <table className="invoice-table table table-bordered">
                                                        <thead>
                                                            <tr>
                                                                <th>Description</th>
                                                                <th className="text-center">Date de rendez-vous</th>
                                                      
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td>1</td>
                                                                <td className="text-center">20/04/2024</td>
                                                        
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td className="text-center">10/05/2024</td>
                                                               
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </Col>
                                         
                                        </Row>
                                    </div>
                                 
                                    <div className="other-info" style={{marginTop:'80px'}}>
                                        <h4>Other information</h4>
                                        <p className="text-muted mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sed dictum ligula, cursus blandit risus. Maecenas eget metus non tellus dignissim aliquam ut a ex. Maecenas sed vehicula dui, ac suscipit lacus. Sed finibus leo vitae lorem interdum, eu scelerisque tellus fermentum. Curabitur sit amet lacinia lorem. Nullam finibus pellentesque libero.</p>
                                    </div>
                                
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}
export default RapportView
