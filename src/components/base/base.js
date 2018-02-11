import React from 'react';
import {connect} from 'react-redux'

import Bread from '../include/bread'

class Base extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          <Bread desArr={["简介"]} iconType="edit" />
      </div>
    )
  }
}

export default connect()(Base)
