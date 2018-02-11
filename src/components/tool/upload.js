import React from 'react';
import {connect} from 'react-redux'

import Bread from '../include/bread'

class Upload extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <Bread desArr={[ "工具" , "上传"]} iconType="tool" />
      </div>
    )
  }
}

export default connect()(Upload)
