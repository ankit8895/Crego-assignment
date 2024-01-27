import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header = () => {
  return (
    <Navbar className='bg-primary' data-bs-theme='dark'>
      <Container>
        <Navbar.Brand>
          <img
            alt=''
            src='https://cdn-icons-png.flaticon.com/128/1935/1935173.png'
            width='30'
            height='30'
            className='d-inline-block align-top'
          />{' '}
          Expression Engine
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;
