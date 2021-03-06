import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, Container, Button } from 'reactstrap';
import './SideBar.scss';

const SideBar = ({ sort }) => {
  const handleOnClick = (key, direction) => {
    sort({ key, direction });
  };
  return (
    <Container className='sort-by'>
      <h4>Sort by:</h4>
      <Row>
        <Col>
          <Button color='link' onClick={() => handleOnClick('name', 'asc')}>
            Name: A - Z
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button color='link' onClick={() => handleOnClick('name', 'desc')}>
            Name: Z - A
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button color='link' onClick={() => handleOnClick('price', 'asc')}>
            Price: low - high
          </Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button color='link' onClick={() => handleOnClick('price', 'desc')}>
            Price: high - low
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

SideBar.propTypes = {
  sort: PropTypes.func.isRequired
};

export default SideBar;
