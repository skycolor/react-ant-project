import React from 'react';
import {connect} from 'react-redux'

class Ele extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          ele
      </div>
    )
  }
}

export default connect()(Ele)
