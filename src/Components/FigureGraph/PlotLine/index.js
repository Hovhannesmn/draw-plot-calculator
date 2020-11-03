import React from 'react'
import PropTypes from 'prop-types';

const PlotLine = ({ path, stroke, strokeWidth }) => {
  return (
    <path
      fill='none'
      stroke={stroke}
      d={path}
      strokeWidth={strokeWidth}
    />
  );
};

PlotLine.propTypes = {
  strokeWidth: PropTypes.number,
  path: PropTypes.string,
  stroke: PropTypes.string,
};

PlotLine.defaultProps = {
  stroke: '#cc0505',
  strokeWidth: 1,
};

export default PlotLine;
