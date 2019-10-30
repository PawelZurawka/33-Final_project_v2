import React from 'react';
import { PropTypes } from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from '../ProductList/ProductList';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import Pagination from '../../common/Pagination/Pagination';

class Products extends React.Component {
  componentDidMount() {
    const { loadProductByPage, initialPage, productPerPage } = this.props;
    loadProductByPage(initialPage || 1, productPerPage || 6);
  }

  componentWillUnmount() {
    const { resetRequest } = this.props;
    resetRequest();
  }

  loadProductPage = page => {
    const { loadProductByPage, productPerPage } = this.props;
    loadProductByPage(page, productPerPage || 6);
  };

  render() {
    const { products, request, pages, presentPage } = this.props;
    const { loadProductPage } = this;

    if (
      request.pending === false &&
      request.success === true &&
      products.length > 0
    ) {
      return (
        <>
          <ProductList products={products} />
          <Pagination
            pages={pages}
            onPageChange={loadProductPage}
            initialPage={presentPage}
          />
        </>
      );
    } else if (request.pending === false && request.error != null) {
      return <Alert variant='error'>{request.error}</Alert>;
    } else if (
      request.pending === false &&
      request.success === true &&
      products.length === 0
    ) {
      return <Alert variant='info'>No products</Alert>;
    } else if (request.pending === true || request.success === null) {
      return <Spinner />;
    } else {
      return <Alert variant='info'>Something went wrong!</Alert>;
    }
  }
}

Products.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ),
  resetRequest: PropTypes.func.isRequired,
  loadProductByPage: PropTypes.func.isRequired
};

export default Products;
