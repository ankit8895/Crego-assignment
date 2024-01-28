import React, { useState } from 'react';

import Header from './components/Header';
import Rules from './components/Rules';
import Output from './components/Output';

import {
  Container,
  Button,
  Form,
  Row,
  Col,
  FloatingLabel,
  Modal,
} from 'react-bootstrap';

const App = () => {
  const [combinatorInput, setCombinatorInput] = useState('');
  const [keyTypeInput, setKeyTypeInput] = useState('');
  const [operatorInput, setOperatorInput] = useState('');
  const [valueInput, setValueInputInput] = useState(0);
  const [scoreInput, setScoreInput] = useState(0);
  const [expressionInput, setExpressionInput] = useState([]);
  const [outputJSONObject, setOutputJSONObject] = useState({
    rules: [],
    combinator: '',
  });
  const [show, setShow] = useState(false);

  const formSubmitHandler = () => {
    if (combinatorInput === '' || keyTypeInput === '' || operatorInput === '') {
      setShow(true);
      return;
    }

    const newExpression = {
      keyTypeInput,
      operatorInput,
      valueInput,
      scoreInput,
      combinatorInput,
    };

    const newOutputJSONObject = {
      rules: [
        {
          key: keyTypeInput,
          output: {
            value: valueInput,
            operator: operatorInput,
            score: scoreInput,
          },
        },
      ],
      combinator: combinatorInput,
    };

    addOutputJSONObjectHandler(newOutputJSONObject);

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
    setExpressionInput((prevExpressions) => {
      const updatedExpressions = prevExpressions.filter((_, i) => i !== index);

      const UpdatedRules = updatedExpressions.map((expression) => ({
        key: expression.keyTypeInput,
        output: {
          value: expression.valueInput,
          operator: expression.operatorInput,
          score: expression.scoreInput,
        },
      }));

      const UpdatedCombinator =
        updatedExpressions.length > 0
          ? updatedExpressions[0].combinatorInput
          : '';

      setOutputJSONObject({
        rules: UpdatedRules,
        combinator: UpdatedCombinator,
      });

      return updatedExpressions;
    });
  };

  const addOutputJSONObjectHandler = (output) => {
    setOutputJSONObject((prevOutput) => ({
      rules: [...prevOutput.rules, output.rules],
      combinator: output.combinator,
    }));
  };

  return (
    <div>
      <Header />
      <Container
        className='d-flex flex-column my-4'
        style={{ width: '100vw', height: '100vh' }}
      >
        {show && (
          <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Body>Fill all the Input fields and then procced</Modal.Body>
            <Modal.Footer>
              <Button variant='primary' onClick={() => setShow(false)}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        )}
        <Row className='mb-4'>
          <h1 className='text-center fw-bolder text-info'>Add an Expression</h1>
        </Row>
        <Form>
          <Row className='mb-4'>
            <Col>
              <Form.Label className='fs-4'>Select a Key Type</Form.Label>
              <Form.Select
                size='lg'
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
              <Form.Label className='fs-4'>Select an Operator</Form.Label>
              <Form.Select
                size='lg'
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
              <FloatingLabel label='Enter a Value ( Default value is 0 )'>
                <Form.Control
                  size='lg'
                  type='number'
                  value={valueInput}
                  onInput={(e) => setValueInputInput(e.target.value)}
                  placeholder='0'
                />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel label='Enter a Score ( Default value is 0 )'>
                <Form.Control
                  size='lg'
                  type='number'
                  value={scoreInput}
                  onInput={(e) => setScoreInput(e.target.value)}
                  placeholder='0'
                />
              </FloatingLabel>
            </Col>
          </Row>

          <Row className='mb-4'>
            <Col>
              <Form.Label className='fs-4'>Select a Combinator Type</Form.Label>
              <Form.Select
                size='lg'
                value={combinatorInput}
                onChange={(e) => setCombinatorInput(e.target.value)}
              >
                <option value=''>....</option>
                <option value='AND'>AND</option>
                <option value='OR'>OR</option>
              </Form.Select>
            </Col>
          </Row>

          <Row>
            <Col className='d-flex justify-content-center align-items-center'>
              <Button
                type='button'
                variant='success'
                onClick={() => formSubmitHandler()}
                className='fs-4'
              >
                Add an Expression
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
      <div className='my-4 mx-2' style={{ background: 'rgb(39,40,34)' }}>
        <Rules
          expressions={expressionInput}
          deleteExpression={deleteExpressionHandler}
          combinator={combinatorInput}
        />
      </div>
      <div className='my-4 mx-2' style={{ background: 'rgb(39,40,34)' }}>
        <Output
          outputJSONObject={outputJSONObject}
          addOutputJSONObjectHandler={addOutputJSONObjectHandler}
        />
      </div>
    </div>
  );
};

export default App;
