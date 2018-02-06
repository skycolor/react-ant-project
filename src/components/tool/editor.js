import React from 'react';
import {connect} from 'react-redux'

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          editor
      </div>
    )
  }
}

export default connect()(Editor)
