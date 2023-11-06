import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import './Layout.css';
import { FavoritosContext } from '../Context/FavoritosContext';

const FooterSocialLink = ({ href, children }) => (
  <div className="espacioFooter">
    <a className="responsiveSiteFooter__socialLink hjgjuf" href={href}>
      {children}
    </a>
  </div>
);

const Layout = () => {
  const { favoritos } = useContext(FavoritosContext);

  return (
    <div className="layout-container">
      <Navbar expand="lg" className="navbar">
        <Container>
          <Navbar.Brand className="text-white espacio">TP10</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="justify-content-end">
              <Link to={'/'} className="text-white linkEstilo espacio">
                Home
              </Link>
              <Link to={'/Info'} className="text-white linkEstilo espacio">
                Información
              </Link>
              <Link to={'/MisCreaciones'} className="text-white linkEstilo espacio">
                Mis creaciones
              </Link>
              <Badge badgeContent={favoritos.length} color="success">
                <Link to={'/Favoritos'} className="text-white linkEstilo">
                  Favoritos
                </Link>
              </Badge>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="content">
        <Outlet />
      </div>

      <footer>
        <div className="horizontal">
          <div className="responsiveSiteFooter__socialLinkWrapper col-6">
            <h5 className="responsiveSiteFooter__heading">Redes Sociales</h5>
            <div className="horizontaldos">
              <FooterSocialLink href="https://www.facebook.com/">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 24 24">
                  <path d="M12,2C6.477,2,2,6.477,2,12c0,5.013,3.693,9.153,8.505,9.876V14.65H8.031v-2.629h2.474v-1.749 c0-2.896,1.411-4.167,3.818-4.167c1.153,0,1.762,0.085,2.051,0.124v2.294h-1.642c-1.022,0-1.379,0.969-1.379,2.061v1.437h2.995 l-0.406,2.629h-2.588v7.247C18.235,21.236,22,17.062,22,12C22,6.477,17.523,2,12,2z"></path>
                </svg>
              </FooterSocialLink>

              <FooterSocialLink href="https://twitter.com/">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 24 24">
                  <path d="M22,3.999c-0.78,0.463-2.345,1.094-3.265,1.276c-0.027,0.007-0.049,0.016-0.075,0.023c-0.813-0.802-1.927-1.299-3.16-1.299 c-2.485,0-4.5,2.015-4.5,4.5c0,0.131-0.011,0.372,0,0.5c-3.353,0-5.905-1.756-7.735-4c-0.199,0.5-0.286,1.29-0.286,2.032 c0,1.401,1.095,2.777,2.8,3.63c-0.314,0.081-0.66,0.139-1.02,0.139c-0.581,0-1.196-0.153-1.759-0.617c0,0.017,0,0.033,0,0.051 c0,1.958,2.078,3.291,3.926,3.662c-0.375,0.221-1.131,0.243-1.5,0.243c-0.26,0-1.18-0.119-1.426-0.165 c0.514,1.605,2.368,2.507,4.135,2.539c-1.382,1.084-2.341,1.486-5.171,1.486H2C3.788,19.145,6.065,20,8.347,20 C15.777,20,20,14.337,20,8.999c0-0.086-0.002-0.266-0.005-0.447C19.995,8.534,20,8.517,20,8.499c0-0.027-0.008-0.053-0.008-0.08 c-0.003-0.136-0.006-0.263-0.009-0.329c0.79-0.57,1.475-1.281,2.017-2.091c-0.725,0.322-1.503,0.538-2.32,0.636 C20.514,6.135,21.699,4.943,22,3.999z"></path>
                </svg>
              </FooterSocialLink>

              <FooterSocialLink href="https://www.instagram.com/">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" height="35" viewBox="0 0 24 24">
                  <path d="M 8 3 C 5.239 3 3 5.239 3 8 L 3 16 C 3 18.761 5.239 21 8 21 L 16 21 C 18.761 21 21 18.761 21 16 L 21 8 C 21 5.239 18.761 3 16 3 L 8 3 z M 18 5 C 18.552 5 19 5.448 19 6 C 19 6.552 18.552 7 18 7 C 17.448 7 17 6.552 17 6 C 17 5.448 17.448 5 18 5 z M 12 7 C 14.761 7 17 9.239 17 12 C 17 14.761 14.761 17 12 17 C 9.239 17 7 14.761 7 12 C 7 9.239 9.239 7 12 7 z M 12 9 A 3 3 0 0 0 9 12 A 3 3 0 0 0 12 15 A 3 3 0 0 0 15 12 A 3 3 0 0 0 12 9 z"></path>
                </svg>
              </FooterSocialLink>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
