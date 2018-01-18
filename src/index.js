import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';

//引入redux 相关包
import { createStore ,applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'


ReactDOM.render(<App />, document.getElementById('app'));
