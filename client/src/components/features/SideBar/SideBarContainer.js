import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { sort, getProductsSort } from '../../../redux/productsRedux';
import SideBar from './SideBar';

const SideBarContainer = ({ sort }) => {
  return <SideBar sort={sort} />;
};

const mapStateToProps = state => ({
  products: getProductsSort(state)
});

const mapDispatchToProps = {
  sort
};

SideBarContainer.propTypes = {
  sort: PropTypes.func.isRequired
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBarContainer);
