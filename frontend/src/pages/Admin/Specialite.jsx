import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const Specialite = () => {
  const [id, setId] = useState('');
  const [specialite, setSpecialite] = useState('');
  const [inputValue, setInputValue] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [showModal, setShowModal] = useState(false);

  const handleIdChange = (e) => {
    setId(e.target.value);
  };

  const handleSpecialiteChange = (e) => {
    setSpecialite(e.target.value);
  };

  const handleInputValue = () => {
    if (!id || !specialite) {
      return;
    }
    if (editIndex === -1) {
      setInputValue((prevVal) => [...prevVal, { id: id, specialite: specialite }]);
    } else {
      const updatedItems = [...inputValue];
      updatedItems[editIndex] = { id: id, specialite: specialite };
      setInputValue(updatedItems);
      setEditIndex(-1);
    }
    setId('');
    setSpecialite('');
    setShowModal(false);
  };

  const handleDeleteAll = () => {
    setInputValue([]);
    setEditIndex(-1);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setId(inputValue[index].id);
    setSpecialite(inputValue[index].specialite);
    setShowModal(true);
  };

  const handleDeleteItem = (index) => {
    const filteredItems = [...inputValue];
    filteredItems.splice(index, 1);
    setInputValue(filteredItems);
    setEditIndex(-1);
  };

  return (
    <div  style={{marginTop:'100px' ,marginLeft:'100px' }}>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Ajouter Specialité
      </Button>
      <Button
        variant="danger"
        onClick={handleDeleteAll}
        disabled={inputValue.length === 0}
        style={{ marginLeft: '20px' }}
      >
        Supprimer tout
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex === -1 ? 'Add' : 'Edit'} Specialité</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formId">
              <Form.Label>ID par défaut</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez l'ID par défaut"
                value={id}
                onChange={handleIdChange}
              />
            </Form.Group>
            <Form.Group controlId="formSpeciality">
              <Form.Label>Specialité</Form.Label>
              <Form.Control
                type="text"
                placeholder="Entrez la spécialité"
                value={specialite}
                onChange={handleSpecialiteChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Fermer
          </Button>
          <Button variant="primary" onClick={handleInputValue}>
            {editIndex === -1 ? 'Ajouter' : 'Mettre à jour'}
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="mt-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Specialité</th>
              <th width="240px">Actions</th>
            </tr>
          </thead>
          <tbody>
            {inputValue.map((item, index) => (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.specialite}</td>
                <td>
                  <Button variant="outline-primary" onClick={() => handleEdit(index)}>
                    Modifier
                  </Button>{' '}
                  <Button variant="outline-danger" onClick={() => handleDeleteItem(index)}>
                    Supprimer
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Specialite;
