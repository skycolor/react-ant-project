import React from 'react';
import {connect} from 'react-redux'

class Table extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          table
      </div>
    )
  }
}

export default connect()(Table)
