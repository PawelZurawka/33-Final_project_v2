import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Products from '../../features/Products/ProductsContainer';
import SideBar from '../../features/SideBar/SideBar';
import ProductsCounter from '../../features/ProductsCounter/ProductsCounterContainer';

const HomePage = () => (
  <Container>
    <ProductsCounter />
    <Row>
      <Col xs={3}>
        <SideBar />
      </Col>
      <Col xs={9}>
        <Products />
      </Col>
    </Row>
  </Container>
);

export default HomePage;
