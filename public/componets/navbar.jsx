import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container, Modal, Tab } from 'react-bootstrap';
import SignUpForm from './SignupForm';

const AppNavbar = () => {
    const [showModal, setShowModal] = useState(false);

  return (
<>
    <Navbar bg='dark' variant='dark' expand='lg'>
    <Container fluid>
      <Navbar.Brand as={Link} to='/'>
        Google Books Search
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='navbar' />
      <Navbar.Collapse id='navbar'>
        <Nav className='ml-auto'>
          <Nav.Link as={Link} to='/'>
            Search For Books
          </Nav.Link>
          {Auth.loggedIn() ? (
                <>
                  <Nav.Link as={Link} to='/saved'>
                    See Your Books
                  </Nav.Link>
                  <Nav.Link onClick={Auth.logout}>Logout</Nav.Link>
                </>
              ) : (
                <Nav.Link onClick={() => setShowModal(true)}>Login/Sign Up</Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
        </Navbar>
        <Modal
        size='lg'
        show={showModal}
        onHide={() => setShowModal(false)}
        aria-labelledby='signup-modal'></Modal>