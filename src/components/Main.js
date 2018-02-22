import React from 'react';
import {connect} from 'react-redux'
/*
此处不使用BrowserRouter，是因为它依赖于服务器，如果使用npm dist打包，在本地打开dist中的
index.html那么显示为空，主要是因为此处router不可用。所以用HashRouter的方式
参考的博客为 https://www.cnblogs.com/iny7/p/5485357.html
*/
import {
  HashRouter as Router , Route
} from 'react-router-dom'

//引入router相关页面
import Home from './home/home'
import Login from './login/login'


class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router >
        <div className="app-container" >
          <Route exact path='/' component={Login} />
          <Route path="/login" component={Login} />
          <Route path="/main" component={Home} />
        </div>
      </Router >
    );
  }
}

//导入样式
require('../styles/app.scss')

App.defaultProps = {};

//导出redux以及antd的混合
export default connect()( App );
