import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

//其他页面
import Home from '../home/home'

//引入lib包
import rainEffect from '../../lib/meteorRain';

//加入ant 控件
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleCommit = this.handleCommit.bind(this);
  }
  static contextTypes = {
		router: PropTypes.object
	}
  componentDidMount(){
    rainEffect.meteorRain.apply();
  }
  handleCommit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.context.router.history.push(`/main`);
      }
    });
  }
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
        <div className='login-container' >
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
    );
  }
}

//导入样式
require('../../styles/login/login.scss')

Login.defaultProps = {};

//导出redux以及antd的混合
export default connect()( Form.create()(Login) );
