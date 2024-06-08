import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import './CrudDocteurs.css'

const CrudDocteurs = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [age, setAge] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [inputValue, setInputValue] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [showModal, setShowModal] = useState(false);

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleSpecialityChange = (e) => {
    setSpeciality(e.target.value);
  };

  const handleTelephoneChange = (e) => {
    setTelephone(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleInputValue = () => {
    if (!firstName || !lastName || !age || !speciality || !telephone || !email || !password) {
      return;
    }
    if (editIndex === -1) {
      setInputValue((prevVal) => [
        ...prevVal,
        {
          firstName: firstName,
          lastName: lastName,
          age: age,
          speciality: speciality,
          telephone: telephone,
          email: email,
          password: password
        }
      ]);
    } else {
      const updatedItems = [...inputValue];
      updatedItems[editIndex] = {
        firstName: firstName,
        lastName: lastName,
        age: age,
        speciality: speciality,
        telephone: telephone,
        email: email,
        password: password
      };
      setInputValue(updatedItems);
      setEditIndex(-1);
    }
    setFirstName("");
    setLastName("");
    setAge("");
    setSpeciality("");
    setTelephone("");
    setEmail("");
    setPassword("");
    setShowModal(false);
  };

  const handleDeleteAll = () => {
    setInputValue([]);
    setEditIndex(-1);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    const item = inputValue[index];
    setFirstName(item.firstName);
    setLastName(item.lastName);
    setAge(item.age);
    setSpeciality(item.speciality);
    setTelephone(item.telephone);
    setEmail(item.email);
    setPassword(item.password);
    setShowModal(true);
  };

  const handleDeleteItem = (index) => {
    const filteredItems = [...inputValue];
    filteredItems.splice(index, 1);
    setInputValue(filteredItems);
    setEditIndex(-1);
  };

  return (
    <div className="App" style={{ marginTop: '100px' }}>
      <Button variant="primary" onClick={() => setShowModal(true)}>
        Ajouter
      </Button>
      <Button
        variant="danger"
        onClick={handleDeleteAll}
        disabled={inputValue.length === 0}
        style={{ marginLeft: '20px' }}>
        Supprimer tout
      </Button>

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{editIndex === -1 ? "Add" : "Edit"} Doctor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter First Name"
                value={firstName}
                onChange={handleFirstNameChange}
              />
            </Form.Group>
            <Form.Group controlId="formLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Last Name"
                value={lastName}
                onChange={handleLastNameChange}
              />
            </Form.Group>
            <Form.Group controlId="formAge">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter Age"
                value={age}
                onChange={handleAgeChange}
              />
            </Form.Group>
            <Form.Group controlId="formSpeciality">
              <Form.Label>Speciality</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Speciality"
                value={speciality}
                onChange={handleSpecialityChange}
              />
            </Form.Group>
            <Form.Group controlId="formTelephone">
              <Form.Label>Telephone</Form.Label>
              <Form.Control
                type="tel"
                placeholder="Enter Telephone"
                value={telephone}
                onChange={handleTelephoneChange}
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter Email"
                value={email}
                onChange={handleEmailChange}
              />
            </Form.Group>
            <Form.Group controlId="formPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={handlePasswordChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
          <Button variant="primary" onClick={handleInputValue}>
            {editIndex === -1 ? "Add" : "Update"}
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Display content */}
      <div className="mt-3">
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Age</th>
              <th>Speciality</th>
              <th>Telephone</th>
              <th>Email</th>
              <th>Password</th>
              <th width="240px">Actions</th>
            </tr>
          </thead>
          <tbody>
            {inputValue.map((item, index) => (
              <tr key={index}>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.age}</td>
                <td>{item.speciality}</td>
                <td>{item.telephone}</td>
                <td>{item.email}</td>
                <td>{item.password}</td>
                <td>
                  <Button
                    variant="outline-primary"
                    onClick={() => handleEdit(index)}
                  >
                    Edit
                  </Button>{" "}
                  <Button
                    variant="outline-danger"
                    onClick={() => handleDeleteItem(index)}
                  >
                    Delete
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

export default CrudDocteurs;
