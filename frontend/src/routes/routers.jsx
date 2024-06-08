import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Login from '../pages/Login';
import Services from '../pages/Service';
import Contact from '../pages/Contact';
import Doctors from '../pages/Doctors/Doctors';
import HomePatient from '../pages/patient/HomePatient'
import DoctorDetails from '../pages/Doctors/DoctorDetails';
import Recherche from '../pages/patient/Recherche';
import Favoris from '../pages/patient/Favoris';
import Parametre from '../pages/patient/Parametre';
import Dashboardd from '../pages/patient/Dashboardd';
import DoctorProfile from '../pages/patient/DoctorProfile';
import CommentSection from '../pages/patient/CommentSection';
import AppointmentTab from  '../pages/patient/AppointmentTab';
import Chat from '../pages/Chats/chat/Chat';
import Appointment from '../pages/Doctors/Appoinment';
import ScheduleTimings from '../pages/Doctors/ScheduleTimings';
import Schedule from '../pages/Doctors/planning/Schedule';
import ReviewComponents from '../pages/Doctors/Review/ReviewComponents'
import Review  from '../pages/Doctors/Review/Review';
import Patient from '../pages/Doctors/Patient/Patient';
import Rapport from '../pages/Doctors/Rapport/Rapport';
import RapportView from '../pages/Doctors/Rapport/RapportView';

const routers = () => {
    return (
        <Routes>
            
            <Route path="/home" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/ScheduleTimings" element={<ScheduleTimings />} />
            <Route path="/HomePatient" element={<HomePatient />}  />
            <Route path="/Dashboardd" element={ <Dashboardd />}  />
            <Route path="/AppointmentTab" element={<AppointmentTab />}  />
            <Route path="/Parametre" element={<Parametre />}  />
            <Route path="/Appointment" element={<Appointment />}  />
            <Route path="/Patient" element={<Patient />}  />
            <Route path="/ReviewComponents" element={<ReviewComponents />}  />
            <Route path="/RapportView" element={<RapportView />}  />
            <Route path="/Review" element={<Review />}  />
            <Route path="/Recherche" element={<Recherche />}  />
            <Route path="/Tableau-de-bord" element={<Rapport />}  />
            <Route path="/Favoris" element={<Favoris />}  />
            <Route path="/CommentSection" element={<CommentSection />}  />
            <Route path="/DoctorProfile" element={<DoctorProfile />}  />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctorDetails" element={<DoctorDetails />} />
            <Route path="/signup" element={<Signup />} /> 
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />

            <Route path="/Chat" element={<Chat />} />
            


            
        </Routes>
    );
};

export default routers;
