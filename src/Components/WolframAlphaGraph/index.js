import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import Spinner from '../UI/Spinner';

import * as actions from '../../store/actions';

import './index.css';

const WolframAlphaChart = props => {
  const { loading, getData, wolframHtml, expression="3+4" } = props;

  useEffect(() => {
    getData(expression);
  }, [expression]);

  return (
    loading
      ? <Spinner/>
      : <div dangerouslySetInnerHTML={{ __html: wolframHtml ? wolframHtml : 'no-message' }}
          className="wolfram-api"
        />
  );
};

const mapStateToProps = state => {
  return {
    loading: state.applicationReducer.loading,
    expression: state.applicationReducer.expression,
    wolframHtml: state.applicationReducer.wolframHtml,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getData: (expression) => dispatch(actions.fetchGraphics(expression))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WolframAlphaChart);

