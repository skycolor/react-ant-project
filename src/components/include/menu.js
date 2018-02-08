import React from 'react';
import {connect} from 'react-redux'
import { Menu, Icon } from 'antd';
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

//ant 相关
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

//菜单的默认长度
let menuWidth = 280;

class MenuContent extends React.Component {
  constructor(props) {
    super(props);
  }
  static contextTypes = {
		router: PropTypes.object
	}
  handleClick = ({ key }) => {
    this.context.router.history.push(`/main/${key}`);
  }
  render() {
    return (
      <Menu
        className={`menu-content  ${this.props.theme.key}`}
        onClick={this.handleClick}
        style={{ width: this.props.folding.isMenuFolding ? 80  : menuWidth }}
        defaultSelectedKeys={['base']}
        mode="inline"
        inlineCollapsed={this.props.folding.isMenuFolding}
      >
        <Menu.Item key="base">
          <Icon type="edit" />
          <span>
              简介
          </span>
        </Menu.Item>
        <SubMenu key="sub1" title={<span><Icon type="file-text" /><span>ant</span></span>} >
          <Menu.Item key="ele">
              基本
          </Menu.Item>
          <Menu.Item key="form">
              表单
          </Menu.Item>
          <Menu.Item key="table">
              表格
          </Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" title={<span><Icon type="tool" /><span>工具</span></span>}>
          <Menu.Item key="editor">
              编辑器
          </Menu.Item>
          <Menu.Item key="upload">
              上传
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="chart">
          <Icon type="star-o" />
          <span>
              图表
          </span>
        </Menu.Item>
      </Menu>
    )
  }
}

//导入样式
require('../../styles/include/menu.scss')

const mapStateToProps = state => ({
  theme: state.theme ,
  folding: state.folding
})

export default connect(mapStateToProps)(MenuContent)
