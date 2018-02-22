import React from 'react';
import {connect} from 'react-redux'
import { Row , Col } from 'antd';
import ReactEcharts from 'echarts-for-react';

import Bread from '../include/bread'

//引入echart opt库
import echartOpts from '../../lib/echartOpts';

class Chart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="chart-container" >
          <Bread desArr={["图表"]} iconType="star-o" />
          <div className="tit" >
            此处使用的一个echart的react封装库，使用方式同echart，比较简单
            访问地址为：
            <a href="https://github.com/hustcc/echarts-for-react" >echarts-for-react</a>
          </div>
          <Row>
            <Col span={12}>
              <ReactEcharts
                option={echartOpts.getOpt1()}
                style={{height: '300px'}}
              />
            </Col>
            <Col span={12}>
              <ReactEcharts
                option={echartOpts.getOpt2()}
                style={{height: '300px'}}
              />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <ReactEcharts
                option={echartOpts.getOpt3()}
                style={{height: '300px'}}
              />
            </Col>
            <Col span={12}>
              <ReactEcharts
                option={echartOpts.getOpt4()}
                style={{height: '300px'}}
              />
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <ReactEcharts
                option={echartOpts.getOpt5()}
                style={{height: '300px'}}
              />
            </Col>
            <Col span={12}>
              <ReactEcharts
                option={echartOpts.getOpt6()}
                style={{height: '300px'}}
              />
            </Col>
          </Row>
      </div>
    )
  }
}

//导入样式
require('../../styles/chart/chart.scss')

export default connect()(Chart)
