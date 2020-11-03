import React from 'react';
import PropTypes from 'prop-types';

import { INPUT_DEFINES } from './constants';
import noop from '../../../utils/noop';

const CalculatorItems = ({
  loading,
  handleChange,
}) => (
  INPUT_DEFINES.map(({ value, className }, index) => (
    <>
      <input
        key={value}
        type="button"
        value={value}
        className={className}
        disabled={loading}
        onClick={() => handleChange(value)}
      />
      {index && index % 3 === 0 ? <br/> : null}
    </>
  ))
);

CalculatorItems.propTypes = {
  loading: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};

CalculatorItems.defaultProps = {
  loading: false,
  handleChange: noop,
};

export default CalculatorItems;
