import React from 'react';
import {connect} from 'react-redux'

class Upload extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          upload
      </div>
    )
  }
}

export default connect()(Upload)
