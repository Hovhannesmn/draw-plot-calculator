import React from "react";
import PlotAxis from "./PlotAxis";

import { getEmptyArray } from "../../../utils";

const FigureGraphChart = ({
  minSvgX,
  minSvgY,
  maxSvgX,
  maxSvgY,
  minX,
  maxX,
}) => {
  const unitX = (maxSvgX - minSvgX) / (maxX - minX);

  const vLinesArr = getEmptyArray(maxX - minX + 1).map((_, index) => (
    <line
      key={index}
      x1={(Number(minX) + index) * unitX}
      y1={minSvgY}
      x2={(Number(minX) + index) * unitX}
      y2={maxSvgY}
    />
  ));

  return (
    <g className="plot-axis">
      <PlotAxis  minX={minSvgX} minY={minSvgY} maxX={maxSvgX} maxY={maxSvgY} />
      {vLinesArr}
    </g>
  );
};

export default FigureGraphChart;

