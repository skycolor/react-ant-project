import React from 'react';
import Main from './Main';

//引入redux 相关包
import { createStore ,applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

//引入reducer相关
import reducer from '../reducers'

//redux 相关代码
const middleware = [ thunk ];
middleware.push(createLogger())
const store = createStore(reducer,
  applyMiddleware(...middleware)
)

const AppPage = () => (
  <Provider store={ store } >
      <Main />
  </Provider>
)

//导出redux以及antd的混合
export default AppPage;
