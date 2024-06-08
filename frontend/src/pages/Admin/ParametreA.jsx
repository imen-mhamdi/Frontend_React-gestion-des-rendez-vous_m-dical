import React from 'react';
import { Container, Row, Col, Card, Form, Button, Badge } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faSignOut } from '@fortawesome/free-solid-svg-icons';

const Parametre = () => {
  return (
    <Container className="mt-4" style={{marginTop:'100px' ,marginLeft:'100px' }}>
      <Row>
        <Col>
          <Row>
            <Col xs={12} md={9} className="mb-3">
              <Card>
                <Card.Body>
                  <div className="e-profile">
                    <div className="text-center text-sm-right">
                    <Badge variant="danger" style={{ width: '10%', marginLeft: '90%', fontWeight: 'bold' }}>Admin</Badge>
                    </div>
                    <Row>
                      <Col xs={12} className="mb-3">
                        <div className="mx-auto" style={{ width: '140px' }}>
                          <div className="d-flex justify-content-center align-items-center rounded" style={{ height: '140px', backgroundColor: 'rgb(233, 236, 239)' }}>
                            <span style={{ color: 'rgb(166, 168, 170)', fontWeight: 'bold', fontSize: '8pt', fontFamily: 'Arial' }}>140x140</span>
                          </div>
                        </div>
                      </Col>
                      <Col className="d-flex flex-column flex-sm-row justify-content-between mb-3">
                        <div style={{ marginLeft: '40%' }}>
                          <div style={{ textAlign: 'center' }}>
                            <h4 className="pt-sm-2 pb-1 mb-0 text-nowrap">Phyras</h4>
                            <p className="mb-0">@Phyras.s</p>
                            <div className="mt-2">
                              <Button variant="primary">
                                <FontAwesomeIcon icon={faCamera} />
                                <span className="ml-2">Change Photo</span>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                    <div className="tab-content pt-3">
                      <div className="tab-pane active">
                        <Form className="form">
                          <Row>
                            <Col>
                              <Row>
                                <Col>
                                  <Form.Group>
                                    <Form.Label><b>Nom</b></Form.Label>
                                    <Form.Control type="text" name="name" placeholder="John Smith" defaultValue="phyras maoui" />
                                  </Form.Group>
                                </Col>
                                <Col>
                                  <Form.Group>
                                    <Form.Label><b>Prénom</b></Form.Label>
                                    <Form.Control type="text" name="username" placeholder="johnny.s" defaultValue="phyras.s" />
                                  </Form.Group>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <Form.Group>
                                    <Form.Label><b>Age</b></Form.Label>
                                    <Form.Control type="Age" name="name" placeholder="Age" defaultValue="Age" />
                                  </Form.Group>
                                </Col>
                                <Col>
                                  <Form.Group>
                                    <Form.Label><b>Téléphone</b></Form.Label>
                                    <Form.Control type="tel" name="Téléphone" placeholder="Téléphone" defaultValue="Téléphone" />
                                  </Form.Group>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <Form.Group>
                                    <Form.Label><b>Email</b></Form.Label>
                                    <Form.Control type="text" placeholder="user@example.com" />
                                  </Form.Group>
                                </Col>
                              </Row>
                              <Row>
                                <Col className="mb-3">
                                  <Form.Group>
                                    <Form.Label><b>À propos</b></Form.Label>
                                    <Form.Control as="textarea" rows="5" placeholder="My Bio" />
                                  </Form.Group>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                          <Row>
                            <Col xs={12} sm={6} className="mb-3">
                              <div className="mb-2"><b>Changer le mot de passe</b></div>
                              <Row>
                                <Col>
                                  <Form.Group>
                                    <Form.Label>Mot de passe actuel</Form.Label>
                                    <Form.Control type="password" placeholder="••••••" />
                                  </Form.Group>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <Form.Group>
                                    <Form.Label>Nouveau mot de passe</Form.Label>
                                    <Form.Control type="password" placeholder="••••••" />
                                  </Form.Group>
                                </Col>
                              </Row>
                              <Row>
                                <Col>
                                  <Form.Group>
                                    <Form.Label>Confirmer <span className="d-none d-xl-inline">mot de passe</span></Form.Label>
                                    <Form.Control type="password" placeholder="••••••" />
                                  </Form.Group>
                                </Col>
                              </Row>
                            </Col>
                            <Col xs={12} sm={5} className="offset-sm-1 mb-3">
                              <div className="mb-2"><b>Keeping in Touch</b></div>
                              <Row>
                                <Col>
                                  <Form.Label>Email Notifications</Form.Label>
                                  <div className="custom-controls-stacked px-2">
                                    <Form.Check type="checkbox" id="notifications-blog" label="Blog posts" defaultChecked />
                                    <Form.Check type="checkbox" id="notifications-news" label="Newsletter" defaultChecked />
                                    <Form.Check type="checkbox" id="notifications-offers" label="Personal Offers" defaultChecked />
                                  </div>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                          <Row>
                            <Col className="d-flex justify-content-end">
                              <Button variant="primary" type="submit">Save Changes</Button>
                            </Col>
                          </Row>
                        </Form>
                      </div>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Parametre;
