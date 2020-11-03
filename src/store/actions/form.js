import * as actionTypes from './actionTypes';

export const changeExpression = payload => {
  return {
    type: actionTypes.CHANGE_EXPRESSION,
    expression: payload,
  };
};