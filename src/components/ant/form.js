import React from 'react';
import {connect} from 'react-redux'

import Bread from '../include/bread'

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <Bread desArr={["ant" , "表单"]} iconType="file-text" />
      </div>
    )
  }
}

export default connect()(Form)
