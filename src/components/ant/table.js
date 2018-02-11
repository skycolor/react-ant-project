import React from 'react';
import {connect} from 'react-redux'

import Bread from '../include/bread'

class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <Bread desArr={["ant" , "表格"]} iconType="file-text" />
      </div>
    )
  }
}

export default connect()(Table)
