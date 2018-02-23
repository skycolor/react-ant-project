import React from 'react';
import {connect} from 'react-redux'
import { Table, Button , Popconfirm } from 'antd';
import { getAllUsers , delUser } from '../../actions'

import Bread from '../include/bread'

class TablePage extends React.Component {
  constructor(props) {
    super(props);
    this.columns = [{
      title: '姓名',
      dataIndex: 'name',
    }, {
      title: '日期',
      dataIndex: 'date',
    }, {
      title: '地址',
      dataIndex: 'address',
    },{
      title: '操作',
      dataIndex: 'operation',
      render: (text, record) => {
        return (
          this.props.user.length > 1 ?
          (
            <Popconfirm title="确定删除么?" onConfirm={() => this.onDelete(record.key)}>
                <Button type="danger">删除</Button>
            </Popconfirm>
          ) : null
        );
      },
    }];
  }
  onDelete(key){
    this.props.dispatch(delUser(key));
  }
  componentDidMount(){
    let users = this.props.user;
    if(users.length == 0){
       this.props.dispatch(getAllUsers());
    }
  }
  render() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(selectedRowKeys);
      }
    };
    return (
      <div className="tableDyn-container" >
          <Bread desArr={["ant" , "动态表格"]} iconType="file-text" />
          <div className="tit" >
             此处使用的table数据为网络请求来的，使用redux的action对数据进行操作
          </div>
          <Table rowSelection={rowSelection} columns={this.columns} dataSource={this.props.user} />
      </div>
    )
  }
}

//导入样式
require('../../styles/ant/tableDyn.scss')

const mapStateToProps = state => ({
  user: state.user
})

export default connect(mapStateToProps)(TablePage)
