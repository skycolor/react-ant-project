import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

//引入redux 相关包
import { createStore ,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

//引入reducer相关
import reducer from './reducers'

//redux 相关代码
const middleware = [ thunk ];
middleware.push(createLogger())
const store = createStore(reducer,
  applyMiddleware(...middleware)
)

//加入redux，开始渲染
ReactDOM.render(<Provider store={ store } >
     <App />
   </Provider>
	, document.getElementById('app'));
