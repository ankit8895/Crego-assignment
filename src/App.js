import React from 'react';
import Header from './components/Header';

import {
  Container,
  Button,
  Form,
  Row,
  Col,
  FloatingLabel,
} from 'react-bootstrap';

const App = () => {
  return (
    <div>
      <Header />
      <Container className='d-flex flex-column my-4'>
        <Form>
          <Row className='mb-4'>
            <Form.Group className='d-flex justify-content-center align-items-center'>
              <Button type='submit' variant='success'>
                Add an Expression
              </Button>
            </Form.Group>
          </Row>
          <Row className='mb-4'>
            <Form.Label>Select a Connector Type</Form.Label>
            <Form.Select>
              <option>....</option>
              <option>AND</option>
              <option>OR</option>
            </Form.Select>
          </Row>
          <Row className='mb-4'>
            <Form.Group as={Col}>
              <Form.Label>Select a Key Type</Form.Label>
              <Form.Select>
                <option>....</option>
                <option>Age</option>
                <option>Credit Score</option>
                <option>Account Balance</option>
              </Form.Select>
            </Form.Group>
            <Form.Group as={Col}>
              <Form.Label>Select an Operator</Form.Label>
              <Form.Select>
                <option>....</option>
                <option>&#62;</option>
                <option>&#60;</option>
                <option>&le;</option>
                <option>&ge;</option>
                <option>&#61;</option>
              </Form.Select>
            </Form.Group>
          </Row>
          <Row className='mb-4'>
            <Form.Group as={Col}>
              <FloatingLabel label='Enter a Value'>
                <Form.Control type='number' />
              </FloatingLabel>
            </Form.Group>
            <Form.Group as={Col}>
              <FloatingLabel label='Enter a Score'>
                <Form.Control type='number' />
              </FloatingLabel>
            </Form.Group>
          </Row>
        </Form>
      </Container>
    </div>
  );
};

export default App;
