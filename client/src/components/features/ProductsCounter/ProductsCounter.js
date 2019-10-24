import React from 'react';
import { PropTypes } from 'prop-types';

class ProductsCounter extends React.Component {
  render() {
    const { count } = this.props;
    let number;
    if (count === 0) {
      number = 'No products';
    } else {
      number = count;
    }
    return <div>Number of products: {number}</div>;
  }
}
ProductsCounter.propTypes = {
  count: PropTypes.number
};

export default ProductsCounter;
