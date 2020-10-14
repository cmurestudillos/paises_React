import React, {Component} from 'react';
// Componentes Bootstrap
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
// Imagenes
import logo from '../../../assets/img/logo.png';

class NavbarComponent extends Component{
    render(){
        // Log de seguimiento
        console.log('NavbarComponent.js - Metodo render()');
        return(
          <div>
            <Navbar expand="lg" type="light" className="navbar navbar-expand-lg navbar-dark bg-custom">
              <Navbar.Brand><img src={logo} alt="Logo" title="Logo" width="65" height="65" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <NavLink to="/home" className="active mr-2" >Paises</NavLink>
              </Nav>
              </Navbar.Collapse>



            </Navbar>        
          </div>
        )
    }
}

export default NavbarComponent;