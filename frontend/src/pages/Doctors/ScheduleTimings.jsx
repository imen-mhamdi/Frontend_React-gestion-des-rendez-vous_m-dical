import React, { useState } from 'react';
import { Button, Col, Container, Modal, Nav, Row } from 'react-bootstrap'; // Import Button from react-bootstrap
import { Link } from 'react-router-dom';
import Schedule from './planning/Schedule';
import { FaComment } from 'react-icons/fa';
import Chat from '../Chats/chat/Chat';

function ScheduleTimings() {
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [activeTab, setActiveTab] = useState("slot_monday");

    const handleShowAddModal = () => setShowAddModal(true);
    const handleCloseAddModal = () => setShowAddModal(false);
    const handleShowEditModal = () => setShowEditModal(true);
    const handleCloseEditModal = () => setShowEditModal(false);

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

     //modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showMessageModal, setShowMessageModal] = useState(false);

  const handleShowMessageModal = () => setShowMessageModal(true);
  const handleCloseMessageModal = () => setShowMessageModal(false);

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
                                        <li className="breadcrumb-item active" aria-current="page">Planning</li>
                                    </ol>
                                </nav>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
            <div className="content" style={{ marginTop: '25px', marginLeft: '165px', marginBottom: '50px' }}>
                <Container fluid>
                    <Row>
                        <Col md={10}>
                            <Schedule />
                        </Col>
                    </Row>
                </Container>
            </div>
            <div style={{ position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000', backgroundColor: '#6CB4EE', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>

                <FaComment onClick={handleShowMessageModal} style={{ fontSize: '25px', color: 'white' }} />
                <Modal
                    show={showMessageModal}
                    onHide={handleCloseMessageModal}
                    dialogClassName="modal-lg" centred>
                    <Modal.Header closeButton>
                    </Modal.Header>
                    <Modal.Body >
                        <Chat />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleCloseMessageModal}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleCloseMessageModal}>
                            Send
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>



        </div>
    );
}

export default ScheduleTimings;