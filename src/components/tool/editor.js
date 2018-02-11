import React from 'react';
import {connect} from 'react-redux'

import Bread from '../include/bread'

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <Bread desArr={["工具" , "编辑器"]} iconType="tool" />
      </div>
    )
  }
}

export default connect()(Editor)
