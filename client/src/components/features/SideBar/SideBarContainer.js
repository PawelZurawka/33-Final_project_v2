import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sortOptions, getProductsSort } from '../../../redux/productsRedux';
import SideBar from './SideBar';

const SideBarContainer = ({ sortOptions }) => {
  return <SideBar sortOptions={sortOptions} />;
};

SideBarContainer.propTypes = {
  sortOptions: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  products: getProductsSort(state)
});

const mapDispatchToProps = {
  sortOptions
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);
