import React from 'react';
import { connect } from 'react-redux';

import ChooseType from '../../Components/ChooseType';
import Calculator from '../../Components/Calculator';

import './index.css';

const RightBar = ({ isCustomLayout }) => {
  return (
    <div className="right-bar">
      <h1 className="right-bar__text">{isCustomLayout ? 'Custom' : 'Wolfram Alpha'} Implementation</h1>
      <ChooseType />
      <Calculator />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isCustomLayout: state.applicationReducer.isCustomLayout,
  };
};

export default connect(
  mapStateToProps,
)(RightBar);
