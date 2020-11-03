import React, { useState } from 'react';
import { connect } from 'react-redux';

import CalculatorItems from './CalculatorItems';

import * as actions from '../../store/actions';
import { EQ, CLEAR, X_ADD_X, X_SUB_X, X_MUL_X, X_DIV_X } from '../../utils/defines';

import './index.css';

const Calculator = (props) => {
  const [state, setState] = useState({ displayValue: '' });

  const { displayValue } = state;

  const handleChange = (value) => {
    switch (value) {
      case EQ:
        return props.changeExpression(displayValue);
      case CLEAR:
        return setState(prev => ({ ...prev, displayValue:  ''}));
      case X_ADD_X:
      case X_SUB_X:
      case X_MUL_X:
      case X_DIV_X:
        setState(prev => ({ ...prev, displayValue: value}));
        return props.changeExpression(value);
      default:
        return setState(prev => ({ ...prev, displayValue:  displayValue.concat(value)}));
    }
  };

  return (
    <form name="calculator">
      <table>
        <tr>
          <td>
            <input type="text" name="input" id="answer" value={displayValue} disabled />
            <br/>
          </td>
        </tr>
        <tr>
          <td>
            <CalculatorItems
              loading={props.loading}
              handleChange={handleChange}
            />
            <br/>
          </td>
        </tr>
      </table>
    </form>
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
    toggleCustomLayout: () => dispatch(actions.toggleCustomLayout()),
    changeExpression: val => dispatch(actions.changeExpression(val)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Calculator);