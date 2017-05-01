import './index.less';
import $ from 'jquery';
import React from 'react';
import ReactDOM,{ render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import fnReducers from './reducers';

let store = createStore(fnReducers);

let Hello = ()=>{
	return (<h1>Hello</h1>);
}

ReactDOM.render(<Hello/>,document.getElementById('app'));