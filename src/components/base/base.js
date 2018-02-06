import React from 'react';
import {connect} from 'react-redux'

class Base extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          base
      </div>
    )
  }
}

export default connect()(Base)
