import React,{Component} from 'react'
import { Row, Col } from 'antd';
import NavList from  '../../components/Layout/NavList'
import '../../style/common.less'

export default class EarlyWarningAnalysis extends Component {
  render() {
    return(
      <div className="container">
        <Row className="container-body">
          <Col span={4} className="nav-left">
            <NavList/>
          </Col>
          <Col span={20}>
            {this.props.children}
          </Col>
        </Row>
      </div>
    )
  }
}
