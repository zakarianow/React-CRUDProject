 import React from 'react'
import { Container } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

 
 const Navbar = () => {
   return (
    <Container>
        <h1 >CRUD APP</h1>
        <div className='d-flex justify-content-center align-items-center bg-dark px-2 pt-3'>
            
                <ul >
                    <li style={{display: 'inline'}}>
                        <NavLink style={{textDecoration: 'none', color: "#fff"}} to='/'>Home</NavLink>
                    </li>
                    <li style={{display: 'inline'}}>
                        <NavLink style={{textDecoration: 'none', color: "#fff"}} to='/post/add'>Add</NavLink>
                    </li>
                    <li className='link ' style={{display: 'inline', color:'#fff', cursor: 'pointer'}}>Login </li>
                </ul>
            
        </div>
    </Container>

   )
 }
 
 export default Navbar
 