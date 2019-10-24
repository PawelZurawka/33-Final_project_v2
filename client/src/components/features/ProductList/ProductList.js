import React from 'react';
import { PropTypes } from 'prop-types';
import ProductSummary from '../ProductSummary/ProductSummary';
import './ProductList.scss';

const ProductList = ({ products }) => (
  <section className='products-list'>
    {products.map(product => (
      <ProductSummary key={product.id} {...product} />
    ))}
  </section>
);

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired
    })
  )
};

export default ProductList;
