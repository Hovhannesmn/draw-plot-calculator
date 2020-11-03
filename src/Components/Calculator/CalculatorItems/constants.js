import {
  EQ,
  X_ADD_X,
  X_SUB_X,
  X_MUL_X,
  X_DIV_X,
  ADD,
  SUB,
  DIV,
  MUL,
  CLEAR,
} from '../../../utils/defines';

const INPUT_DEFINES = [
  {
    value: '1',
  },
  {
    value: '2',
  },
  {
    value: '3',
  },
  {
    value: ADD,
    className: 'operator',
  },
  {
    value: '4',
  },
  {
    value: '5',
  },
  {
    value: '6',
  },
  {
    value: SUB,
    className: 'operator',
  },
  {
    value: '7',
  },
  {
    value: '8',
  },
  {
    value: '9',
  },
  {
    value: MUL,
    className: 'operator',

  },
  {
    value: X_ADD_X
  },
  {
    value: X_SUB_X
  },
  {
    value: X_MUL_X
  },
  {
    value: X_DIV_X
  },
  {
    value: CLEAR,
    className: 'clear',
  },
  {
    value: '0',
  },
  {
    value: EQ,
    className: 'equal',
  },
  {
    value: DIV,
    className: 'operator',
  },
];

export {
  INPUT_DEFINES,
};
