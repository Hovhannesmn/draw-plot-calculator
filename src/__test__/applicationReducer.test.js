import reducers from '../store/reducers/applicationReducer';

describe('application reducer', () => {
  it('should return the initial state', () => {
    expect(reducers(undefined, {}))
      .toEqual({
        'data': {
          'maxX': 1,
          'minX': -1
        },
        'expression': 'x*x',
        'isCustomLayout': true,
        'loading': false,
        'svgHeight': 300,
        'svgWidth': 300,
        'wolframHtml': '',
      });
  });

  it('it should test x+x', () => {
    expect(reducers({
      loading: false,
      isCustomLayout: true,
      expression: 'x+x',
    }, { type: 'CHANGE_EXPRESSION', expression: 'x+x' }))
      .toEqual({
        loading: false,
        isCustomLayout: true,
        expression: 'x+x',
    });
  });

  it('it should test x/x', () => {
    expect(reducers({
      expression: 'x/x',
      data: { minX: -1, maxX: 1 }
    }, { type: 'CHANGE_EXPRESSION', expression: 'x/x' }))
      .toEqual({
        expression: 'x/x',
        data: { minX: -1, maxX: 1 }
      });
  });

  it('it should test FETCH_GRAPHICS_START', () => {
    expect(reducers({
      loading: false,
      isCustomLayout: false,
    }, { type: 'FETCH_GRAPHICS_START' }))
      .toEqual({
        loading: true,
        isCustomLayout: false,
      });
  });

});