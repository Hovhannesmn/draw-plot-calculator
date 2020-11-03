import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import * as actions from '../../store/actions';

import './index.css';

const ChooseType = ({
  isCustomLayout,
  toggleCustomLayout
}) => {
  return (
    <div className="checkbox">
      <h2 className="title">Choose Layout Type</h2>
      <label className="switch" >
        <input
          type="checkbox"
          checked={isCustomLayout}
          onChange={toggleCustomLayout}
        />
        <span className="slider round" />
      </label>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isCustomLayout: state.applicationReducer.isCustomLayout,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    toggleCustomLayout: () => dispatch(actions.toggleCustomLayout())
  };
};

ChooseType.propTypes = {
  isCustomLayout: PropTypes.bool.isRequired,
  toggleCustomLayout: PropTypes.func.isRequired,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChooseType);
