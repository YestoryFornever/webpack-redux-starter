import './index.less';
import $ from 'jquery';
import React from 'react';
import ReactDOM,{ render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import fnReducers from './reducers';
let store = createStore(fnReducers);
// 将动作(action) 变换成 state 转换函数(reducer) ，然后放到一个统一的地方(store)来 setState
import App from './containers/app';
render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('app')
);