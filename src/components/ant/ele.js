import React from 'react';
import {connect} from 'react-redux'
import { Carousel , Tooltip , Button , Timeline , Row , Col } from 'antd'


import Bread from '../include/bread'

const text = <span>prompt text</span>;
const buttonWidth = 70;

class Ele extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    //轮播图列表
    let imgArr = [];
    for(let index = 1 ; index <= 6 ; index++){
        imgArr.push(<div key={index}><img src={require(`../../images/ele/banner${index}.jpg`)} /></div>)
    }
    return (
      <div className="ele-container">
          <Bread desArr={["ant" , "基本"]} iconType="file-text" />
          <Carousel autoplay >
              {imgArr}
          </Carousel>
          <div className="tooltip" >
              <div className="up" >
                <Tooltip placement="topLeft" title={text}>
                  <Button>TL</Button>
                </Tooltip>
                <Tooltip placement="top" title={text}>
                  <Button>Top</Button>
                </Tooltip>
                <Tooltip placement="topRight" title={text}>
                  <Button>TR</Button>
                </Tooltip>
              </div>
              <div className="left" >
                <Tooltip placement="leftTop" title={text}>
                  <Button>LT</Button>
                </Tooltip>
                <Tooltip placement="left" title={text}>
                  <Button>Left</Button>
                </Tooltip>
                <Tooltip placement="leftBottom" title={text}>
                  <Button>LB</Button>
                </Tooltip>
              </div>
              <div className="right" >
                <Tooltip placement="rightTop" title={text}>
                  <Button>RT</Button>
                </Tooltip>
                <Tooltip placement="right" title={text}>
                  <Button>Right</Button>
                </Tooltip>
                <Tooltip placement="rightBottom" title={text}>
                  <Button>RB</Button>
                </Tooltip>
              </div>
              <div className="bottom" >
                <Tooltip placement="bottomLeft" title={text}>
                  <Button>BL</Button>
                </Tooltip>
                <Tooltip placement="bottom" title={text}>
                  <Button>Bottom</Button>
                </Tooltip>
                <Tooltip placement="bottomRight" title={text}>
                  <Button>BR</Button>
                </Tooltip>
              </div>
          </div>
          <Row>
            <Col span={8}>
                <Timeline>
                    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item color="green">Create a services site 2015-09-01</Timeline.Item>
                    <Timeline.Item color="red">
                      <p>Solve initial network problems 1</p>
                      <p>Solve initial network problems 2</p>
                      <p>Solve initial network problems 3 2015-09-01</p>
                    </Timeline.Item>
                    <Timeline.Item>
                      <p>Technical testing 1</p>
                      <p>Technical testing 2</p>
                      <p>Technical testing 3 2015-09-01</p>
                    </Timeline.Item>
                </Timeline>
            </Col>
            <Col span={8}>
              <Timeline>
                  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                  <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
                  <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
              </Timeline>
            </Col>
            <Col span={8}>
              <Timeline pending="Recording...">
                  <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
                  <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
                  <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
              </Timeline>
            </Col>
          </Row>
      </div>
    )
  }
}

//导入样式
require('../../styles/ant/ele.scss')

export default connect()(Ele)
