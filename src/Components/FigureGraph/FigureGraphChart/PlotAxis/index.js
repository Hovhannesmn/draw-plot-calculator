import React from "react";

const PlotAxis = ({
  minX,
  maxX,
  minY,
  maxY
}) => {
  return (
    <g className="plot-axis">
      <defs>
        <marker
          id="triangle"
          viewBox="0 0 5 5"
          refX="5"
          refY="2.5"
          markerUnits="strokeWidth"
          markerWidth="5"
          markerHeight="5"
          orient="auto"
        >
          <path d="M 0 0 L 5 2.5 L 0 5 z" fill="#bdc3c7" />
        </marker>
      </defs>
      <line
        className="main-line axis"
        id="y"
        x1={0}
        y1={minY}
        x2={0}
        y2={maxY}
        markerEnd="url(#triangle)"
      />
      <line
        className="main-line axis"
        id="x"
        x1={minX}
        y1={0}
        x2={maxX}
        y2={0}
        markerEnd="url(#triangle)"
      />
    </g>
  );
};

export default PlotAxis;

