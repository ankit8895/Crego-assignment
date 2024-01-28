import React from 'react';
import { JSONTree } from 'react-json-tree';
import { Container, Row } from 'react-bootstrap';

import NoOutputAnimation from './NoOutputAnimation';

const Output = ({ outputJSONObject }) => {
  const theme = {
    scheme: 'oceanic-next-light',
    author: 'wimer hazenberg (http://www.monokai.nl)',
    base00: '#272822',
    base01: '#383830',
    base02: '#49483e',
    base03: '#75715e',
    base04: '#a59f85',
    base05: '#f8f8f2',
    base06: '#f5f4f1',
    base07: '#f9f8f5',
    base08: '#f92672',
    base09: '#fd971f',
    base0A: '#f4bf75',
    base0B: '#a6e22e',
    base0C: '#a1efe4',
    base0D: '#66d9ef',
    base0E: '#ae81ff',
    base0F: '#cc6633',
  };
  return (
    <div style={{ background: 'rgb(39, 40, 34)' }}>
      <Container className='py-4'>
        <Row>
          <h1 className='text-center fw-bolder text-info'>
            Output JSON Object
          </h1>
        </Row>
        {outputJSONObject.rules.length === 0 ? (
          <Row className='d-flex justify-content-center align-items-center'>
            <NoOutputAnimation />
          </Row>
        ) : (
          <div className='d-flex justify-content-center align-items-center'>
            <JSONTree data={outputJSONObject} theme={theme} />
          </div>
        )}
      </Container>
    </div>
  );
};

export default Output;
