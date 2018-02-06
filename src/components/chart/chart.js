import React from 'react';
import {connect} from 'react-redux'

class Chart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          chart
      </div>
    )
  }
}

export default connect()(Chart)
