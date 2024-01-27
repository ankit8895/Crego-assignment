import React, { useState } from 'react';
import Header from './components/Header';
import Rules from './components/Rules';

import {
  Container,
  Button,
  Form,
  Row,
  Col,
  FloatingLabel,
} from 'react-bootstrap';

const App = () => {
  const [combinatorInput, setCombinatorInput] = useState('');
  const [keyTypeInput, setKeyTypeInput] = useState('');
  const [operatorInput, setOperatorInput] = useState('');
  const [valueInput, setValueInputInput] = useState(0);
  const [scoreInput, setScoreInput] = useState(0);
  const [expressionInput, setExpressionInput] = useState([]);

  const formSubmitHandler = () => {
    if (combinatorInput === '' || keyTypeInput === '' || operatorInput === '') {
      return;
    }

    const newExpression = {
      keyTypeInput,
      operatorInput,
      valueInput,
      scoreInput,
      combinatorInput,
    };

    addExpressionHandler(newExpression);

    setKeyTypeInput('');
    setOperatorInput('');
    setValueInputInput(0);
    setScoreInput(0);
    setCombinatorInput('');
  };

  const addExpressionHandler = (expression) => {
    setExpressionInput([...expressionInput, expression]);
  };

  const deleteExpressionHandler = (index) => {
    const updatedExpressions = expressionInput.filter((_, i) => i !== index);
    setExpressionInput(updatedExpressions);
  };

  console.log(expressionInput);

  return (
    <div>
      <Header />
      <Container className='d-flex flex-column my-4'>
        <Row className='mb-4'>
          <h1 className='text-center fw-bold text-info'>Add an Expression</h1>
        </Row>
        <Form>
          <Row className='mb-4'>
            <Col>
              <Form.Label>Select a Key Type</Form.Label>
              <Form.Select
                value={keyTypeInput}
                onChange={(e) => setKeyTypeInput(e.target.value)}
              >
                <option value=''>....</option>
                <option value='Age'>Age</option>
                <option value='Credit Score'>Credit Score</option>
                <option value='Account Balance'>Account Balance</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Label>Select an Operator</Form.Label>
              <Form.Select
                value={operatorInput}
                onChange={(e) => setOperatorInput(e.target.value)}
              >
                <option value=''>....</option>
                <option value='>'>&#62;</option>
                <option value='<'>&#60;</option>
                <option value='<='>&le;</option>
                <option value='>='>&ge;</option>
                <option value='='>&#61;</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className='mb-4'>
            <Col>
              <FloatingLabel label='Enter a Value'>
                <Form.Control
                  type='number'
                  value={valueInput}
                  onInput={(e) => setValueInputInput(e.target.value)}
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label='Enter a Score'>
                <Form.Control
                  type='number'
                  value={scoreInput}
                  onInput={(e) => setScoreInput(e.target.value)}
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className='mb-4'>
            <Col>
              <Form.Label>Select a Combinator Type</Form.Label>
              <Form.Select
                value={combinatorInput}
                onChange={(e) => setCombinatorInput(e.target.value)}
              >
                <option value=''>....</option>
                <option value='AND'>AND</option>
                <option value='OR'>OR</option>
              </Form.Select>
            </Col>
          </Row>

          <Row className='mb-4'>
            <Col className='d-flex justify-content-center align-items-center'>
              <Button
                type='button'
                variant='success'
                onClick={() => formSubmitHandler()}
              >
                Add an Expression
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <div>
        <Rules
          expressions={expressionInput}
          deleteExpression={deleteExpressionHandler}
          combinator={combinatorInput}
        />
      </div>
    </div>
  );
};

export default App;
