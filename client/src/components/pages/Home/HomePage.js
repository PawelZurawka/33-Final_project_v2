import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'reactstrap';
import Products from '../../features/Products/ProductsContainer';
import SideBar from '../../features/SideBar/SideBarContainer';
import ProductsCounter from '../../features/ProductsCounter/ProductsCounterContainer';

const HomePage = () => (
  <Container>
    <ProductsCounter />
    <Row>
      <Col xs={4}>
        <SideBar />
      </Col>
      <Col xs={8}>
        <Products />
      </Col>
    </Row>
  </Container>
);

export default HomePage;
