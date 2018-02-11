import React from 'react';
import {connect} from 'react-redux'

import Bread from '../include/bread'

class Ele extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <Bread desArr={["ant" , "基本"]} iconType="file-text" />
      </div>
    )
  }
}

export default connect()(Ele)
