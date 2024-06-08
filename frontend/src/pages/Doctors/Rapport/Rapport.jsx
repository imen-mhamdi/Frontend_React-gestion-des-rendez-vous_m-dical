import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { Pagination } from 'react-bootstrap';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import { BiSearch } from 'react-icons/bi';

import patientImage4 from '../../../assets/image/patient4.jpg';
import patientImage5 from '../../../assets/image/patient5.jpg';

const Rapport = () => {

    // Pagination
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active}>
                {number}
            </Pagination.Item>,
        );
    }

    const paginationBasic = (
        <div className="text-center">
            <Pagination>{items}</Pagination>
        </div>
    );

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const patients = [
        {
            name: 'Ahmed Jallel',
            IDRapport: 'RAP-0010',
            id: 'PT0004',
            phone: '96692909',
            age: '3 Years, Male',
            bloodGroup: 'O+',
            image: patientImage4,
        },
        {
            name: 'Rim Mejri',
            id: 'PT0005',
            IDRapport: 'RAP-0011',
            phone: '96692909',
            age: '30 Years, Male',
            bloodGroup: 'O+',
            image: patientImage5,
        }
    ];

    return (
        <div className="main-wrapper">
            <div className="content">
                <div className="breadcrumb-bar bg-blue" style={{ backgroundColor: '#6CB4EE', color: 'white' }}>
                    <Container>
                        <Row className="align-items-center">
                            <Col md={12}>
                                <nav aria-label="breadcrumb" className="page-breadcrumb text-center" style={{ margin: '10px 10px 10px 10px', color: 'white' }}>
                                    <ol className="breadcrumb m-0 p-0" style={{ color: 'white', fontWeight: 'bold' }}>
                                        <li className="breadcrumb-item"><Link to="/" style={{ textDecoration: 'none', color: '#4c4c4c' }}>Accueil</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Tableau de bord</li>
                                    </ol>
                                </nav>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="content" style={{ marginTop: '25px', marginLeft: '400px' }}>
                <Container fluid>
                    <Row>
                        <Col md={7}>
                            <Form>
                                <Form.Group controlId="formSearch">
                                    <div className="input-group">
                                        <Form.Control
                                            type="text"
                                            placeholder="Search..."
                                            value={searchTerm}
                                            onChange={handleSearchChange}
                                        />
                                        <div className="input-group-append">
                                            <span className="input-group-text"><BiSearch /></span>
                                        </div>
                                    </div>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="content" style={{ marginTop: '25px', marginLeft: '200px' }}>
                <Container fluid>
                    <Row>
                        <Col md={7} lg={8} xl={10}>
                            <div className="card card-table">
                                <div className="card-body">
                                    <Table responsive hover className="mb-0">
                                        <thead>
                                            <tr>
                                                <th>ID Rapport</th>
                                                <th>Patient</th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {patients.map((patient, index) => (
                                                <tr key={index}>
                                                    <td>
                                                        <div style={{ fontWeight: 'bold', marginTop: '10px' }}>{patient.IDRapport}</div>
                                                    </td>
                                                    <td>
                                                        <div className="table-avatar" style={{ textDecoration: 'none', color: 'black', fontWeight: 'bold', marginTop: '10px' }}>
                                                            <span>{patient.id}</span>
                                                        </div>
                                                    </td>
                                                    <td>
                                                        <div className="table-avatar" style={{ marginLeft: '200px' }}>
                                                            <img className="avatar-img rounded-circle" style={{ width: '50px', height: '50px' }} src={patient.image} alt="User" />
                                                            <Link to="#patient-profile" style={{ textDecoration: 'none', color: 'black', marginLeft: '20px' }}>{patient.name}</Link>
                                                        </div>
                                                    </td>
                                                    <td>{patient.paidOn}</td>
                                                    <td className="text-right">
                                                        <div className="table-action" style={{ marginTop: '10px' }}>
                                                            <Link to="/RapportView" className="btn btn-info btn-sm">
                                                                <i className="bi bi-eye"></i> Voir
                                                            </Link>
                                                            <Button variant="primary-light" size="sm">
                                                                <i class="bi bi-printer-fill"></i> imprimer
                                                            </Button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>

                            </div>
                        </Col>
                    </Row>
                    <div className="text-center" style={{ marginTop: '20px', marginLeft: '35%' }}>
                        {paginationBasic}
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default Rapport;
