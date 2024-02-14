import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';



const RootLayout = () => {
  
  return (
    <Container >
        <Navbar />
        <Outlet />
    </Container>
  )
}

export default RootLayout
