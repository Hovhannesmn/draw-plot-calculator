import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import './index.css';

import Layout from './Layout';
import applicationReducer from './store/reducers/applicationReducer';

const rootReducer = combineReducers({
  applicationReducer,
});

const store = createStore(rootReducer,
  applyMiddleware(thunk)
);

const app = (
  <Provider store={store}>
    <Layout />
  </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
