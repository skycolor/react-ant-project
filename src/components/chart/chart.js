import React from 'react';
import {connect} from 'react-redux'

import Bread from '../include/bread'

class Chart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <Bread desArr={["图表"]} iconType="star-o" />
      </div>
    )
  }
}

export default connect()(Chart)
