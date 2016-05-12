import React from 'react';

import ReactDOM from 'react-dom';

import App from './containers/App';

import { createStore, applyMiddleware } from 'redux';

import { Provider } from 'react-redux';

import reducer from './reducers/index';

import promiseMiddleware from 'redux-promise';

let store = applyMiddleware(promiseMiddleware)(createStore)(reducer);

ReactDOM.render(
  <Provider store={store}>
		<App />
	</Provider>,
  document.getElementById('app')
);
