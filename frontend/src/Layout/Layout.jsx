import React, { useContext, useEffect, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import axios from 'axios';
import Header from '../components/Header/Header';
import HeaderMedecin from '../components/Header/HeaderMedecin';
import HeaderAdmin from '../components/Header/HeaderAdmin';
import Footer from '../components/Footer/Footer';
import Routers from '../routes/routers';
import RoutesAdmin from '../routes/RoutesAdmin';
import HeaderPatient from '../components/Header/Headerpatient';
import { useCookies } from 'react-cookie';
import { AuthContext } from '../components/context/AuthContext';

import { Col, Container, Nav, Row } from 'react-bootstrap';

const Layout = () => {
  const [user, setUser] = useState(null);
  const location = useLocation();

  const ctx = useContext(AuthContext);
  const u = ctx.auth.role;

  console.log("layouuuuut", user, u);

  if (u == 'docteur')
    return (
      <div style={{ backgroundColor: '#ECECEC', minHeight: '100vh' }}>
        <HeaderMedecin />

        <main>
          <Routers />

        </main>
        <Footer />
      </div>
    );
  else if (u == 'patient')
    return (
      <div style={{ backgroundColor: '#ECECEC', minHeight: '100vh' }}>
        <HeaderPatient />

        <main>

          <Routers />
        </main>
        <Footer />
      </div>
    );
  else if (u == 'admin')
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#ECECEC' }}>
        <HeaderAdmin />

        <main>

          <RoutesAdmin />
        </main>

      </div>
    );
  else
    return (
      <div style={{ backgroundColor: '#ECECEC', minHeight: '100vh' }}>
        <Header />

        <main>
          <Routers />
        </main>
        <Footer />
      </div>
    );
};

export default Layout;
