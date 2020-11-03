import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';
import initialState from './initialState';

const fetchGraphicsStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchGraphicsSuccess = (state, action) => {
  return updateObject(state, {
    wolframHtml: action.wolframHtml,
    loading: false
  });
};

const fetchGraphicsFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const changeExpression = (state, action) => {
  return updateObject(state, { expression: action.expression });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_GRAPHICS_START:
      return fetchGraphicsStart(state, action);
    case actionTypes.FETCH_GRAPHICS_SUCCESS:
      return fetchGraphicsSuccess(state, action);
    case actionTypes.FETCH_GRAPHICS_FAIL:
      return fetchGraphicsFail(state, action);
    case actionTypes.TOGGLE_CUSTOM_LAYOUT:
      return { ...state, isCustomLayout: !state.isCustomLayout };
    case actionTypes.CHANGE_EXPRESSION:
      return changeExpression(state, action);
    default:
      return state;
  }
};

export default reducer;