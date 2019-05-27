import React from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd/lib/index';
export default class Footer extends React.Component{
    render() {
        return(
            <div>
                <Layout.Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Layout.Footer>
            </div>
        )
    }
}
