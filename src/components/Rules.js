import React from 'react';
import NoRuleAnimation from './NoRuleAnimation';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Rules = ({ expressions, deleteExpression, combinator }) => {
  return (
    <Container className='py-4'>
      <Row className='mb-4'>
        <h1 className='text-center fw-bolder text-info'>All Applied Rules</h1>
      </Row>
      {expressions.length === 0 ? (
        <Row className='d-flex justify-content-center align-items-center'>
          <NoRuleAnimation />
        </Row>
      ) : (
        <>
          {expressions.map((expression, index) => (
            <Row key={index} xs={1} md={3} lg={6} className='mb-3'>
              <Col className='mb-1'>
                <Form.Control placeholder={expression.keyTypeInput} disabled />
              </Col>

              <Col className='mb-1'>
                <Form.Control placeholder={expression.operatorInput} disabled />
              </Col>

              <Col className='mb-1'>
                <Form.Control
                  placeholder={`Value - ${expression.valueInput}`}
                  disabled
                />
              </Col>

              <Col className='mb-1'>
                <Form.Control
                  placeholder={`Score - ${expression.scoreInput}`}
                  disabled
                />
              </Col>

              <Col className='mb-1'>
                <Form.Control
                  placeholder={expression.combinatorInput}
                  disabled
                />
              </Col>

              <Col className='mb-1'>
                <Button
                  type='button'
                  variant='danger'
                  className='w-100'
                  onClick={() => deleteExpression(index)}
                >
                  Delete
                </Button>
              </Col>
            </Row>
          ))}
        </>
      )}
    </Container>
  );
};

export default Rules;
