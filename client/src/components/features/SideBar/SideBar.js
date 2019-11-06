import React from 'react';
import { Row, Col, Container, Button } from 'reactstrap';
//import sort from '../../../utils/sort/sort';

import './SideBar.scss';

class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <div className={'sidebar__header'}>
          <h1>Sort by:</h1>
        </div>
        <Row>
          <Col>
            <Button color='link'>Name A - Z</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color='link'>Name Z - A</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color='link'>Prices from lowest</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color='link'>Prices from highest</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SideBar;
