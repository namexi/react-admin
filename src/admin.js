import React from 'react'
import { Row } from 'antd';
import { Header } from './components/Layout'
import './style/common.less'


class Admin extends React.Component {
    render() {
        return (
          <div className="container">
            <Row className="container-herder">
              <Header/>
            </Row>
            <Row className="container-body">
              {this.props.children}
            </Row>
          </div>
        )
    }
}
export default Admin
