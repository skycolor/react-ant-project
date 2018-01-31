import React from 'react';
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

//其他页面
import Home from './home/home'

//引入lib包
import particle from '../lib/particle';

//加入ant 控件
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleCommit = this.handleCommit.bind(this);
  }
  componentDidMount(){
    particle.particleEffect.apply();
  }
  handleCommit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('commit');
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Router >
          <div className='container' >
              <div className='content' >
                  <p className="title">react全家桶管理系统</p>
                  <Form onSubmit={this.handleCommit}  className="login-form">
                    <FormItem>
                      {getFieldDecorator('用户名', {
                        rules: [{ required: true, message: '请输入用户名!' }],
                      })(
                        <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                      )}
                    </FormItem>
                    <FormItem>
                      {getFieldDecorator('密码', {
                        rules: [{ required: true, message: '请输入密码!' }],
                      })(
                        <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />
                      )}
                    </FormItem>
                    <Button type="primary" className="commit"  htmlType="submit" >
                      登录
                    </Button>
                    <p className="tip">Tips : 账号和密码随便填。</p>
                  </Form>
              </div>
              <canvas id="canvas"></canvas>
          </div>
      </Router >
    );
  }
}

//导入样式
require('../styles/app.scss')

App.defaultProps = {};

//导出redux以及antd的混合
export default connect()( Form.create()(App) );
