import React, { useMemo, useEffect } from 'react';
import { connect } from 'react-redux';

import useFigureGraph from '../../hooks/useFigureGraph';
import { X_MUL_X, X_SUB_X, expressionFunctionObj } from '../../utils/defines';

import PlotLine from './PlotLine';
import FigureGraphChart from './FigureGraphChart';
import FigureGraphDescription from './FigureGraphDescription';

import { getMaxX, getMinX, getMaxY, getMinY, getCoordinates } from './actions';

import './index.css';

const FigureGraph = ({
  minX,
  maxX,
  svgWidth,
  svgHeight,
  expression,
}) => {
  const {
    hasError,
    setHasError,
    plotLine,
    setPlotLine,
    result,
    setResult,
    chartCoordinates,
    setChartCoordinates,
  } = useFigureGraph(minX, maxX);

  const functionExpression = useMemo(() => (
    expressionFunctionObj[expression]
      ? expressionFunctionObj[expression]
      : expressionFunctionObj[X_MUL_X]
  ), [expression]);

  useEffect(() => {
    const coordinates = getCoordinates(maxX, minX, svgWidth, svgHeight, functionExpression);
    let path = '', x = 1, stroke = 1;

    try {
      if (!expressionFunctionObj[expression]) {
        x = eval(expression);

        if (x === 0 || expression === X_SUB_X) {
          path = 'M -2 0 2 0 2';
          stroke = 19;
        } else {
          path = 'M ' + coordinates
            .filter((d, i) => x >= 0 ? i > (coordinates.length / 2) + 1 : i < (coordinates.length / 2) - 1)
            .map((point) => `${point.x} ${point.y}`)
            .join(' L ');
        }

        maxX = Math.abs(x);
        minX = -Math.abs(x);

        if (x === Infinity) throw 'number cannot divided 0';
      } else {
        path = 'M ' + coordinates.map((point) => `${point.x} ${point.y}`).join(' L ');
      }
      setChartCoordinates({
        maxX,
        minX,
        maxSvgX: getMaxX(coordinates),
        minSvgX: getMinX(coordinates),
        maxSvgY: getMaxY(coordinates),
        minSvgY: getMinY(coordinates),
      });
      setPlotLine({ path, stroke });
      setResult(x);
      setHasError(false);
    } catch (e) {
      setResult(e);
      setHasError(true);
    }
  }, [expression, setChartCoordinates, setPlotLine]);

  return (
    <div className="figure">
      <FigureGraphDescription
        expression={expression}
        result={result.toString()}
      />
      {
        !hasError && (
          <svg
            className="svg"
            viewBox={`${chartCoordinates.minSvgX - 5} ${chartCoordinates.minSvgY - 5} ${svgWidth + 10} ${svgHeight + 10}`}
            transform="scale(1, -1)"
          >
            {
              result === 0
                ? <circle cx="0" cy="1" r="8" fill="#cc0505" />
                : <PlotLine
                    path={plotLine.path}
                    strokeWidth={plotLine.stroke}
                  />
            }

            <FigureGraphChart
              minX={minX}
              maxX={maxX}
              {...chartCoordinates}
            />
          </svg>
        )
      }
    </div>
  );
};

const mapStateToProps = state => ({
    loading: state.applicationReducer.loading,
    minX: state.applicationReducer.data.minX,
    maxX: state.applicationReducer.data.maxX,
    svgWidth: state.applicationReducer.svgWidth,
    svgHeight: state.applicationReducer.svgHeight,
    expression: state.applicationReducer.expression,
  }
);

export default connect(
  mapStateToProps,
)(FigureGraph);
