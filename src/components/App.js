import React from 'react';
import {connect} from 'react-redux'
import {
  BrowserRouter as Router , Route
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
