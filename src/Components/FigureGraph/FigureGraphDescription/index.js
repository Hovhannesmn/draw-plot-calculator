import React from 'react';
import PropTypes from 'prop-types';

import { X_ADD_X, X_DIV_X, X_MUL_X, X_SUB_X } from '../../../utils/defines';

const mapResult = new Map();
mapResult.set(X_MUL_X, 'x*x');
mapResult.set(X_ADD_X, '2x');
mapResult.set(X_SUB_X, '0');
mapResult.set(X_DIV_X, '1');
mapResult.set(Infinity, '--');

const FigureGraphDescription = ({
  result,
  expression,
}) => (
  <>
    <div>
      <h2>Input</h2>
    </div>
    <div>
      <h3>{expression}</h3>
    </div>
    <div>
      <h2>Result</h2>
    </div>
    <div>
      <h3>{mapResult.has(expression) ? mapResult.get(expression) : result}</h3>
    </div>
  </>
);

FigureGraphDescription.propTypes = {
  result: PropTypes.string.isRequired,
  expression: PropTypes.string.isRequired,
};

export default React.memo(FigureGraphDescription);