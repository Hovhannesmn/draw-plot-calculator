import React from 'react';
import { connect } from 'react-redux';

import Body from './Section/Body';
import RightBar from './Section/RightBar';

import * as actions from './store/actions';

import './index.css';

const Layout = () => {
  return (
    <section className="container">
      <div className="infos">
        <Body />
      </div>
      <div className="form">
        <RightBar />
      </div>
    </section>
  );
};

const mapStateToProps = state => {
  return {
    loading: state.applicationReducer.loading,
    isCustomLayout: state.applicationReducer.isCustomLayout,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleCustomLayout: () => dispatch(actions.toggleCustomLayout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
