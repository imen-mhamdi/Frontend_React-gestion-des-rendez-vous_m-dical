import { Container, Card, Table, Button } from 'react-bootstrap';
import doctorImage from '../../assets/image/img1.jpg';
import doctorImage1 from '../../assets/image/img2.jpg';
import doctorImage2 from '../../assets/image/img3.jpg';
const AppointmentTab = () => {
  const appointments = [
    {
      doctor: "Dr. Souhail Alouini",
      specialty: "Néphrologie",
      apptDate: "1 mai 2024",
      apptTime: "10.00 AM",
      followUp: "16 mai 2024",
      status: "Confirm",
      image: doctorImage,
    },
    {
      doctor: "Dr.Chelbi Belkahia",
      specialty: "Dermatologie",
      apptDate: "14 Nov 2023",
      apptTime: "10.00 AM",
      followUp: "16 JAN 2024",
      status: "Annuler",
      image: doctorImage1,
    },
    {
      doctor: "Dr.Sleim Ammar",
      specialty: "Médecine interne",
      apptDate: "14 Avril 2024",
      apptTime: "10.00 AM",
      followUp: "20 Avril 2024",
      status: "En attente",
      image: doctorImage2,
    },
 
  ];

  return (
    <div id="pat_appointments" className="tab-pane fade show active">
      <Container>
        <Card className="card-table mb-0">
          <Card.Body>
            <div className="table-responsive">
              <Table className="table table-hover table-center mb-0">
                <thead>
                  <tr>
                    <th>Médecin</th>
                    <th>date de réservation</th>
                    <th>Date de rendez-vous</th>
                    <th>Statut</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment, index) => (
                    <tr key={index}>
                      <td>
                        <a href="doctor-profile.html" style={{textDecoration:'none' , color:'black', fontWeight:'bold'}}>
                          <img src={appointment.image} alt="Doctor" className="rounded-circle" style={{ width: '30px',height:'30px', marginRight: '10px' }} />
                          <span >{appointment.doctor}</span>
                        </a>
                        <br />
                        <span style={{marginLeft:'40px'}}>{appointment.specialty}</span>
                      </td>
                      <td>{appointment.apptDate} <span className="d-block text-info">{appointment.apptTime}</span></td>
                      <td>{appointment.followUp}<span className="d-block text-info">{appointment.apptTime}</span></td>
                      <td>
                        <span className={`badge badge-pill ${getStatusColor(appointment.status)}`}>{appointment.status}</span>
                      </td>
                      <td className="text-right">
                      <div className="table-action">
                          <Button variant="warning" className="btn-sm" style={{ marginRight: '5px' }}>
                            <i className="bi bi-printer-fill"></i> Print
                          </Button>
                          <Button variant="secondary" className="btn-sm" style={{ marginRight: '5px' }}>
                            <i className="bi bi-eye-fill"></i> View
                          </Button>
                          </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

// Fonction utilitaire pour déterminer la couleur du badge en fonction du statut
const getStatusColor = (status) => {
  switch (status) {
    case "Confirm":
      return "badge bg-success";
    case "Annuler":
      return "badge bg-danger";
    case "En attente":
      return "badge bg-warning";
    default:
      return "";
  }
}

export default AppointmentTab;
