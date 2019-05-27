import React from 'react'
import { Menu, Row, Col } from 'antd/lib/index';
import headerNavList from '../../config/headerNavList'
import {NavLink, withRouter} from "react-router-dom";

const SubMenu = Menu.SubMenu;
@withRouter
class Header extends React.Component{
  state = {
    current:this.props.location.pathname ==='/'? '/MapDisplay' : this.props.location.pathname
  };
  headerNavListInit = (headerNavList) => {
   return headerNavList.map(items =>{
      return (
        items.children? (
          <SubMenu
            key={items.key}
            title={
              <span className="submenu-title-wrapper">
                {items.title}
            </span>
            }>
            {this.headerNavListInit(items.children)}
          </SubMenu>
        ) :  <Menu.Item key={items.key}><NavLink to={items.key}>{items.title}</NavLink></Menu.Item>
      )
    })
  };
  handleClick = e => {
    console.log(this.props.location,this.state.current);
    this.setState({
      current: e.key,
    });
  };
    render() {
        return(
          <Row>
            <Col span={8}>
              {this.state.current}
            </Col>
            <Col span={16}>
              <Menu
                onClick={this.handleClick}
                theme="light"
                mode="horizontal"
                selectedKeys={[this.state.current]}
                style={{ lineHeight: '64px' }}
              >
                {this.headerNavListInit(headerNavList)}
              </Menu>
            </Col>
          </Row>
        )
    }
}
export default Header
