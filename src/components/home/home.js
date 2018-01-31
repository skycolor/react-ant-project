import React from 'react';
import {connect} from 'react-redux'

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p>home</p>
      </div>
    )
  }
}

export default connect()(Home)
