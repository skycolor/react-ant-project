import React from 'react';
import {connect} from 'react-redux'
import {
  BrowserRouter as Router , Route
} from 'react-router-dom'

//引入主体页面
import Header from '../include/header'
import Menu from '../include/menu'
//引入router相关页面
import Base from '../base/base'
import Ele from '../ant/ele'
import Form from '../ant/form'
import Table from '../ant/table'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="container" >
          <Header />
          <section className="container-main" >
              <Menu />
              <Router >
                <div className="container-content" >
                  <Route exact path='/main/' component={Base} />
                  <Route path="/main/ele" component={Ele} />
                  <Route path="/main/form" component={Form} />
                  <Route path="/main/table" component={Table} />
                </div>
              </Router >
          </section>
      </section>
    )
  }
}

//导入样式
require('../../styles/home/home.scss')

export default connect()(Home)
