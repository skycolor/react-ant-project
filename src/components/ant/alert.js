import React from 'react';
import {connect} from 'react-redux'

class Alert extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          alert
      </div>
    )
  }
}

export default connect()(Alert)
