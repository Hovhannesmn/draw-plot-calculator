import * as actionTypes from './actionTypes';
import axios from '../../axios-wolfram';

export const fetchGraphicsSuccess = (wolframHtml) => {
  return {
    type: actionTypes.FETCH_GRAPHICS_SUCCESS,
    wolframHtml: wolframHtml,
  };
};

export const fetchGraphicsFail = (error) => {
  return {
    type: actionTypes.FETCH_GRAPHICS_FAIL,
    error: error
  };
};

export const fetchGraphicsStart = () => {
  return {
    type: actionTypes.FETCH_GRAPHICS_START
  };
};

export const toggleCustomLayout = () => {
  return {
    type: actionTypes.TOGGLE_CUSTOM_LAYOUT,
  };
};

export const fetchGraphics = expression => {
  return async dispatch => {
    dispatch(fetchGraphicsStart());

    try {
      const { data } = await axios.post('/wolfram-api-chunk-data', { expression });
      if (data) {
        dispatch(fetchGraphicsSuccess(data));
      }
    } catch (e) {
      dispatch(fetchGraphicsFail(e));
    }
  };
};