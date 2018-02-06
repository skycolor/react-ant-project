import React from 'react';
import {connect} from 'react-redux'

class Form extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          form
      </div>
    )
  }
}

export default connect()(Form)
