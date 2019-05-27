import React from 'react'
import { Menu, Icon } from 'antd';
import {NavLink, withRouter} from "react-router-dom";
import siderbarList from '../../config/siderbarList.js'

const SubMenu = Menu.SubMenu;

@withRouter
class NavList extends React.Component{
  state = {
    theme: 'light',
    current: this.props.location.pathname
  };

  changeTheme = value => {
    this.setState({
      theme: value ? 'dark' : 'light',
    });
  };
  siderbarListInit = (siderbarList) =>{
    return siderbarList.map(items =>{
      // if (items.children) {
      //   return this.siderbarListInit(items.children)
      // }
      return (
          items.children? <SubMenu
            key={items.key}
            title={
              <span>
                <Icon type="mail" />
                <span>{items.title}</span>
              </span>
            }
          >{this.siderbarListInit(items.children)}</SubMenu>: <Menu.Item key={items.key}><NavLink to={items.key}>
            <Icon type="pie-chart" />
            <span>{items.title}</span>
          </NavLink></Menu.Item>

      )
    })
  };
  handleClick = e => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };
  render() {
        return(
          <div>
            {/*<Switch*/}
            {/*  checked={this.state.theme === 'dark'}*/}
            {/*  onChange={this.changeTheme}*/}
            {/*  checkedChildren="Dark"*/}
            {/*  unCheckedChildren="Light"*/}
            {/*/>*/}
            {/*<br />*/}
            {/*<br />*/}
            <Menu
              theme={this.state.theme}
              onClick={this.handleClick}
              defaultOpenKeys={['sub1']}
              selectedKeys={[this.state.current]}
              mode="inline"
            >
              {this.siderbarListInit(siderbarList)}
            </Menu>
          </div>
        )
    }
}
export default NavList
