import React from 'react';
import {connect} from 'react-redux'

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
          menu
      </div>
    )
  }
}

export default connect()(Menu)
