import React from 'react';
import { PropTypes } from 'prop-types';
//import Button from '../../common/Button/Button';
//import SmallTitle from '../../common/SmallTitle/SmallTitle';
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardLink
} from 'reactstrap';
import ProductModal from '../ProductModal/ProductModal';
import './ProductSummary.scss';

const ProductSummary = ({ name, price, image }) => (
  <div>
    <Card>
      <CardImg src={image} />
      <CardBody>
        <CardTitle>{name}</CardTitle>
        <CardText>{price}</CardText>
        <CardLink href={'/product'}>
          <ProductModal />
        </CardLink>
      </CardBody>
    </Card>
  </div>
);

ProductSummary.propTypes = {
  id: PropTypes.string,
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string
};

export default ProductSummary;
