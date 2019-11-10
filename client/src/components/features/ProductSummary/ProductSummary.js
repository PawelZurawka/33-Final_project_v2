import React from 'react';
import { PropTypes } from 'prop-types';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '../../common/Button/Button';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardLink
} from 'reactstrap';
import './ProductSummary.scss';

const ProductSummary = ({ name, price, image }) => (
  <Card className='col-6'>
    <CardImg src={image} />
    <CardBody>
      <CardTitle>{name}</CardTitle>
      <CardText>$ {price}</CardText>
      <Button variant='primary'>See details</Button>
      <Button variant='primary'>Add to cart</Button>
      <CardLink href={'/product'}></CardLink>
    </CardBody>
  </Card>
);

ProductSummary.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number
};

export default ProductSummary;
