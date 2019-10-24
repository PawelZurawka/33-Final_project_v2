import React from 'react';
import { PropTypes } from 'prop-types';
import Spinner from '../../common/Spinner/Spinner';
import Alert from '../../common/Alert/Alert';
import SmallTitle from '../../common/SmallTitle/SmallTitle';
import { withRouter } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';
import './SingleProduct.scss';

class SingleProduct extends React.Component {
  componentDidMount() {
    const { loadProducts, resetRequest, match } = this.props;
    loadProducts(match.params.id);
    resetRequest();
  }

  render() {
    const { product, request } = this.props;

    if (request.pending === false && request.success === true && product) {
      return (
        <div>
          <SmallTitle>{product.name}</SmallTitle>
          <Card>
            <CardImg src={product.image} />
            <CardBody>
              <CardTitle>{product.name}</CardTitle>
              <CardText>{product.price}</CardText>
              <CardText>{product.content}</CardText>
            </CardBody>
          </Card>
        </div>
      );
    } else if (request.pending === true || request.success === null) {
      return <Spinner />;
    } else if (request.pending === false && request.error !== null) {
      return <Alert variant='error'>{request.error}</Alert>;
    } else if (request.pending === false && request.success === true) {
      return <Alert variant='info'>No product</Alert>;
    } else {
      return <Alert variant='info'>Something went wrong!</Alert>;
    }
  }
}

SingleProduct.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired
    })
  ),
  loadProducts: PropTypes.func.isRequired,
  resetRequest: PropTypes.func.isRequired
};

export default withRouter(props => <SingleProduct {...props} />);
