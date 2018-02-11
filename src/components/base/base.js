import React from 'react';
import {connect} from 'react-redux'
import { Collapse } from 'antd';

import Bread from '../include/bread'

const Panel = Collapse.Panel;

class Base extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="base-container">
          <Bread desArr={["简介"]} iconType="edit" />
          <h1 className="title" >react-ant-project</h1>
          <Collapse defaultActiveKey={['1']}  accordion>
            <Panel header="项目说明 Instructions" key="1">
              <p>
                  基于react，使用阿里的ant前端框架
                  使用的技术包括redux、router、fetch、echart等...
                  搭建这个项目的目的是为了个人熟悉react全家桶的使用
                  ，并且完成一个公共的 后端框架，用于日常开发
              </p>
            </Panel>
            <Panel header="功能 Function" key="2">
              <p>ant design</p>
              <p>登录/注销</p>
              <p>表格</p>
              <p>表单</p>
              <p>图表</p>
              <p>富文本编辑器</p>
              <p>图片拖拽/裁剪上传</p>
              <p>列表拖拽排序</p>
            </Panel>
            <Panel header="阿里云 Ali Cloud" key="3">
              <p>
                使用阿里云上的免费接口开发的功能，都是生活日常的小东西，主要包括以下
                天气、音乐、智能问答、IP地址查询、新闻等等
              </p>
            </Panel>
            <Panel header="个人 Personal" key="4">
              <p>
                前端菜鸟一枚，喜欢到处玩玩闹闹
              </p>
              <p>
                  个人git地址为：
                  <a class="link" href="https://skycolor.github.io" target="_blank" >
                    https://skycolor.github.io/
                  </a>
              </p>
              <p>
                欢迎关注
              </p>
            </Panel>
          </Collapse>
      </div>
    )
  }
}

//导入样式
require('../../styles/base/base.scss')

export default connect()(Base)
