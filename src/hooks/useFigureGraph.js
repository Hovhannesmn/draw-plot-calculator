import { useState } from 'react';

const useFigureGraph = (minX, maxX) => {
  const [plotLine, setPlotLine] = useState({ path: '', stroke: 1 });
  const [result, setResult] = useState(1);
  const [hasError, setHasError] = useState(false);

  const [chartCoordinates, setChartCoordinates] = useState({
    minX,
    maxX,
    maxSvgX: 1,
    minSvgX: -1,
    maxSvgY: 1,
    minSvgY: -1,
  });

  return {
    result,
    setResult,
    hasError,
    setHasError,
    plotLine,
    setPlotLine,
    chartCoordinates,
    setChartCoordinates,
  };
};

export default useFigureGraph;