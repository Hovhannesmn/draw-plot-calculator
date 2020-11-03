import { getEmptyArray } from '../../utils';

const getMinX = coordinates => coordinates.length && coordinates[0].x;

const getMaxX = coordinates => coordinates.length && coordinates[coordinates.length - 1].x || 1;

const getMinY = coordinates => {
  return coordinates.length && coordinates.reduce(
    (min, p) => (p.y < min ? p.y : min),
    coordinates[0].y
  );
};

const getMaxY = coordinates => {
  return coordinates.length && coordinates.reduce(
    (max, p) => (p.y > max ? p.y : max),
    coordinates[0].y
  );
};

const getCoordinates = (maxX, minX, svgWidth, svgHeight, functionExpression) => {
  const range = (maxX - minX) === 0 ? 1 : (maxX - minX);
  const kx = svgWidth / range;

  const minRawSvgX = kx * minX;
  const maxRawSvgX = kx * maxX;

  const rawPoints = getGraphPoints(minRawSvgX, maxRawSvgX, functionExpression, kx);

  const minRawSvgY = getMinY(rawPoints);
  const maxRawSvgY = getMaxY(rawPoints);

  return rawPoints.map(point => ({
    x: (svgWidth * point.x) / (maxRawSvgX - minRawSvgX),
    y: (svgHeight * point.y) / (maxRawSvgY - minRawSvgY),
  }));
};

const getGraphPoints = (
  min,
  max,
  func,
  koeff,
) => {
  if (func(0) == null) {
    return [
      {
        x: 0,
        y: 0,
      },
    ];
  }

  return getEmptyArray(max - min + 1).map((_, index) => {
    const x = (Number(min) + index);
    return {
      x,
      y: koeff * func(x / koeff),
    };
  });
};

export {
  getMaxX,
  getMinX,
  getMaxY,
  getMinY,
  getCoordinates,
  getGraphPoints,
}