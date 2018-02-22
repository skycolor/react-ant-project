import React from 'react';
import {connect} from 'react-redux'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // ES6

import Bread from '../include/bread'

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this)
  }
  state = {
    text: '',
  };
  handleChange(value) {
    this.setState({ text: value })
  }
  render() {
    return (
      <div className="editor-container" >
          <Bread desArr={["工具" , "编辑器"]} iconType="tool" />
          <div className="tit" >
            一款基于Quill的react富文本编辑器组件，访问地址为：
            <a href="https://github.com/zenoamaro/react-quill" >react-quill</a>
          </div>
          <ReactQuill value={this.state.text}
                  style={{height: '380px'}}
                  onChange={this.handleChange} />
      </div>
    )
  }
}

//导入样式
require('../../styles/tool/editor.scss')

export default connect()(Editor)
