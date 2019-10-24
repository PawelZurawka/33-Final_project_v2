import { connect } from 'react-redux';
import { getProductsCounter } from '../../../redux/productsRedux';
import ProductsCounter from './ProductsCounter';

const mapStateToProps = state => ({
  count: getProductsCounter(state)
});

export default connect(mapStateToProps)(ProductsCounter);
