import React, { useState } from 'react';
import { Table, FormControl } from 'react-bootstrap';

const Utilisateur = () => {
  const [searchTerm, setSearchTerm] = useState('');

  // Define patientData before filtering
  const patientData = [
    {
      name: 'Ahmed jallel',
      id: 'PT0001',
      phone: '28075090',
      age: '7 Years',
      genre:'Male',
      bloodGroup: 'B+',
  
    },
    {
      name: 'Amen Allah',
      id: 'PT0002',
      phone: ' 26023470',
      age: '5 Years',
      genre:'Male',
      bloodGroup: 'O+',
 
    },
    {
      name: 'khalil mhamdi',
      id: 'PT0003',
      phone: ' 90029277',
      age: '8 Years, ',
      genre:'Female',
      bloodGroup: 'A-',
 
    },
    {
      name: 'Amine jaber',
      id: 'PT0004',
      phone: '96692909',
      age: '30 Years, Male',
      bloodGroup: 'O+',
   
    },
    {
      name: 'Sami Dridi',
      id: 'PT0005',
      phone: ' 99777938',
      age: '25 Years',
      genre:'Female',
      bloodGroup: 'A-',

    },
    {
      name: 'Zoubair Saoui',
      id: 'PT0006',
      phone: ' 50520555',
      age: '23 Years',
      genre:'Male',
      bloodGroup: 'B+',
     
    }
    
  ];

  // Now you can filter patientData
  const filteredData = patientData.filter(patient => {
    return (
      patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.phone.includes(searchTerm.toLowerCase()) ||
      patient.age.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.genre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      patient.bloodGroup.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div style={{marginTop:'100px' ,marginLeft:'100px' }}>
      <FormControl
        type="text"
        placeholder="Search"
        className="mb-3"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Genre</th>
            <th>Blood Group</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(patient => (
            <tr key={patient.id}>
              <td>{patient.name}</td>
              <td>{patient.id}</td>
              <td>{patient.phone}</td>
              <td>{patient.age}</td>
              <td>{patient.genre}</td>
              <td>{patient.bloodGroup}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default Utilisateur;
