import React from 'react';
import { connect } from 'react-redux';

import FigureGraph from '../../Components/FigureGraph';
import WolframAlphaGraph from '../../Components/WolframAlphaGraph';

import './index.css';

const Body = ({ isCustomLayout }) => {
  return (
    <div className="contain">
      {
        isCustomLayout
          ? <FigureGraph />
          : <WolframAlphaGraph />
      }
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
)(Body);
