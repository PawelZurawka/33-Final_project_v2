import { connect } from 'react-redux';
import {
  getProductsSort,
  getRequest,
  loadProductByPageRequest,
  resetRequest,
  getPages,
  getPresentPage
} from '../../../redux/productsRedux';
import Products from './Products';

const mapStateToProps = state => ({
  products: getProductsSort(state),
  request: getRequest(state),
  pages: getPages(state),
  presentPage: getPresentPage(state)
});

const mapDispatchToProps = dispatch => ({
  loadProductByPage: (page, productPerPage) =>
    dispatch(loadProductByPageRequest(page, productPerPage)),
  resetRequest: () => dispatch(resetRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);
