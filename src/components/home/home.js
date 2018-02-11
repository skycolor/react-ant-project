import React from 'react';
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'

//引入主体页面
import Header from '../include/header'
import MenuContent from '../include/menu'
//引入router相关页面
import Base from '../base/base'
import Ele from '../ant/ele'
import Form from '../ant/form'
import Table from '../ant/table'
import Alert from '../ant/alert'
import Editor from '../tool/editor'
import Upload from '../tool/upload'
import Chart from '../chart/chart'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="container" >
          <Header />
          <section className="container-main" >
              <MenuContent />
              <Route >
                <div className="container-content" >
                  <Route exact path='/main' component={Base} />
                  <Route path="/main/base" component={Base} />
                  <Route path="/main/ele" component={Ele} />
                  <Route path="/main/form" component={Form} />
                  <Route path="/main/table" component={Table} />
                  <Route path="/main/alert" component={Alert} />
                  <Route path="/main/editor" component={Editor} />
                  <Route path="/main/upload" component={Upload} />
                  <Route path="/main/chart" component={Chart} />
                </div>
              </Route >
          </section>
      </section>
    )
  }
}

//导入样式
require('../../styles/home/home.scss')

export default connect()(Home)
