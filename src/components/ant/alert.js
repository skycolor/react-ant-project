import React from 'react';
import {connect} from 'react-redux'

import Bread from '../include/bread'

class Alert extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <Bread desArr={["ant" , "弹出框"]} iconType="file-text" />
      </div>
    )
  }
}

export default connect()(Alert)
