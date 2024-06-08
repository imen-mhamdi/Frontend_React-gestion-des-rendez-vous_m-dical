import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Chat from '../pages/Chats/chat/Chat';
import Specialite from '../pages/Admin/Specialite';
import Comment from '../pages/Admin/Comment';
import Sidebar from '../components/Sidebar'
import Utlisateur from '../pages/Admin/utlisateur';
import ParametreA from '../pages/Admin/ParametreA';
import AdminHome from '../pages/Admin/AdminHome';
import About from '../pages/Admin/About';
import Docteurs from '../pages/Admin/Docteurs';
const RoutesAdmin = () => {
  return (
    <Sidebar>
        <Routes>
          <Route path="/" element={<Docteurs />} />
          <Route path="/Docteurs" element={<Docteurs />} />
          <Route path="/Chat" element={<Chat />} />
          <Route path="/about" element={<About />} />
          <Route path="/comment" element={<Comment />} />
          <Route path="/Specialite" element={<Specialite />} />
          <Route path="/utlisateur" element={<Utlisateur />} />
          <Route path="/ParametreA" element={<ParametreA />} />
        </Routes>
      </Sidebar>
  )
}

export default RoutesAdmin
