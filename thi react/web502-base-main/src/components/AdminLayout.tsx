import React from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const items1 = [
    {
        key: "Dashboard",
        label: (<Link to="/admin">Dashboard</Link>),
    },


]

const items2: MenuProps['items'] = [{
    key: "Dashboard",
    label: (<Link to="/admin">Dashboard</Link>),
},
{
    key: "Product",
    label: (<Link to="/admin/products">Product Management Page</Link>),
    children: [
        {
            key: "Product",
            label: (<Link to="/admin/products">Product Management Page</Link>),
        },
        {
            key: "Productadd",
            label: (<Link to="/admin/products/add">Product add</Link>),
        }
    ]
},
{
    key: "logout",
    label: (<Link to="/">Logout</Link>),
},]
type Props = {

}
const AdminLayout = (props: Props) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    return (
        <div>
            <Layout>
                <Header className="header">
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} />
                </Header>
                <Layout>
                    <Sider width={200} style={{ background: colorBgContainer }}>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                            defaultOpenKeys={['sub1']}
                            style={{ height: '100%', borderRight: 0 }}
                            items={items2}
                        />
                    </Sider>
                    <Layout style={{ padding: '0 24px 24px' }}>
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            style={{
                                padding: 24,
                                margin: 0,
                                minHeight: 280,
                                background: colorBgContainer,
                            }}
                        >
                            <main><Outlet /></main>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        </div>
    )
}

export default AdminLayout