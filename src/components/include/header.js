import React from 'react';
import {connect} from 'react-redux'
import { Icon , Menu , Dropdown } from 'antd';
import { changeTheme , foldingMenu } from '../../actions'
import {Link} from 'react-router-dom'

//定义变量
let dispatch;

//图片
const userLogo = require('../../images/logo.jpg');

//主题切换下拉框
const themeClick = function ({ key }) {     //切换主题
  dispatch(changeTheme(key))
};
const themeMenu = (
  <Menu onClick={themeClick} >
    <Menu.Item key="theme1">
        默认
    </Menu.Item>
    <Menu.Item key="theme2">
        绿色
    </Menu.Item>
    <Menu.Item key="theme3">
        蓝色
    </Menu.Item>
    <Menu.Item key="theme4">
        紫色
    </Menu.Item>
    <Menu.Item key="theme5">
        黄色
    </Menu.Item>
  </Menu>
);
//用户下拉框
const userMenu = (
  <Menu>
    <Menu.Item>
        <Link to="/login">退出</Link>
    </Menu.Item>
  </Menu>
);

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount(){
    dispatch = this.props.dispatch;
  }
  changeFolding = () => {     //切换菜单栏是否折叠
    dispatch(foldingMenu(!this.props.folding.isMenuFolding));
  }
  render() {
    return (
      <header style={{background : this.props.theme.headBg}} >
          <Icon type={this.props.folding.isMenuFolding ? "menu-unfold" : "menu-fold"}
              className="fold-control" onClick={this.changeFolding}  />
          <span className="title" >react全家桶管理系统</span>
          <div className="theme-control" >
              <Dropdown overlay={themeMenu} trigger={['click']}>
                  <a href="#">
                      更换主题
                  </a>
              </Dropdown>
          </div>
          <div className="user-logo" >
              <img src={userLogo}  />
              <Dropdown overlay={userMenu} trigger={['click']}>
                  <a href="#">
                      hf
                  </a>
              </Dropdown>
          </div>
      </header>
    )
  }
}

//导入样式
require('../../styles/include/header.scss')

const mapStateToProps = state => ({
  theme: state.theme ,
  folding: state.folding
})

export default connect(mapStateToProps)(Header)
