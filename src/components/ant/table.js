import React from 'react';
import {connect} from 'react-redux'
import { Table, Button , Popconfirm } from 'antd';

import Bread from '../include/bread'

//获取table的数据
import userData from '../../data/userData.json';

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
          this.state.data.length > 1 ?
          (
            <Popconfirm title="确定删除么?" onConfirm={() => this.onDelete(record.key)}>
                <Button type="danger">删除</Button>
            </Popconfirm>
          ) : null
        );
      },
    }];
  }
  state = {
    data : userData.list
  };
  onDelete(key){
    const dataSource = [...this.state.data];
    this.setState({ data: dataSource.filter(item => item.key !== key) });
  }
  render() {
    const rowSelection = {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(selectedRowKeys);
      }
    };
    return (
      <div>
          <Bread desArr={["ant" , "表格"]} iconType="file-text" />
          <Table rowSelection={rowSelection} columns={this.columns} dataSource={this.state.data} />
      </div>
    )
  }
}

//导入样式
require('../../styles/ant/table.scss')

export default connect()(TablePage)
