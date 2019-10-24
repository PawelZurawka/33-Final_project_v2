import React from 'react';
import { Row, Col, Container, Button } from 'reactstrap';

import './SideBar.scss';

class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <div className={'sideBarHead'}>
          <h1>Sort by:</h1>
        </div>
        <Row>
          <Col>
            <Button color='link'>Name A-Z</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color='link'>Name Z-A</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color='link'>Price from higher</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button color='link'>Price from lower</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default SideBar;
