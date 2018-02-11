import React from 'react';
import { Breadcrumb , Icon } from 'antd';


class Bread extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let itemArr = [] , str = this.props.iconType;
    this.props.desArr.forEach((val , index) => {
        itemArr.push(
            <Breadcrumb.Item key={index} >
                { index == 0 ? <Icon className="icon" type={str}  /> : ""  }
                {val}
            </Breadcrumb.Item>
        );
    });
    return (
        <Breadcrumb className="breadNav" >
            {itemArr}
        </Breadcrumb>
    )
  }
}

//导入样式
require('../../styles/include/bread.scss')

Bread.PropTypes = {
  desArr : React.PropTypes.array.isRequired ,
  iconType : React.PropTypes.string.isRequired
}

export default Bread
