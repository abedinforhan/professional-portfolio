import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import styles from './MyNavbar.module.css';

const MyNavbar = () => {
    return (
     <>
          <Navbar collapseOnSelect 
             fixed="top"
             expand="md"  
             variant="dark"
             className={[styles.nav__theme , styles.animate__navbar , 'justify-content-between'].join(' ')}
          >
            <Navbar.Brand href="#home">
                <h3 className={styles.nav__logo}>MezbauL AbediN ForhaN</h3>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#skills">Skilss</Nav.Link>
                <Nav.Link href="#experiences">Experiences</Nav.Link>
                <Nav.Link href="#projects">Projects</Nav.Link>
                <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
            </Navbar.Collapse>
      </Navbar>
     </>
    );
};

export default MyNavbar;