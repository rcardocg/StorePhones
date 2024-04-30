import { Outlet, Link } from 'react-router-dom';
import React from 'react';

const Layout = () => {
  return (
    <>
      <center>
        <React.Fragment>
          <Link to="/">Inicio</Link>

          <Link to="/tiendita" variant="body2"> Tienda </Link>

          <Link to="/reviews"> Reseñas </Link>

          <Link to="/login"> Log In </Link>

          <Outlet />
        </React.Fragment>
      </center>
    </>
  );
};

export default Layout;
