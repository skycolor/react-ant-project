import React from 'react';
import {connect} from 'react-redux'


class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <header style={{background : this.props.theme.menuBg}} >
          
      </header>
    )
  }
}

//导入样式
require('../../styles/include/header.scss')

const mapStateToProps = state => ({
  theme: state.theme,

})

export default connect(mapStateToProps)(Header)
