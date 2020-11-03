export const EQ = ' = ';
export const ADD = ' + ';
export const SUB = ' - ';
export const DIV = ' / ';
export const MUL = ' * ';
export const CLEAR = 'C';

export const X_ADD_X = 'x+x';
export const X_SUB_X = 'x-x';
export const X_MUL_X = 'x*x';
export const X_DIV_X = 'x/x';

export const expressionFunctionObj = {
  [X_MUL_X]: x => x*x,
  [X_ADD_X]: x => x+x,
};
