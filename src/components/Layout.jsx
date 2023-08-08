import {
    BookOutlined,
    ShoppingCartOutlined,
    TeamOutlined,
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from "@ant-design/icons";
import { Grid, Layout, Menu } from "antd";
import { useRouter } from "next/router";
import { useState } from "react";
import PaddingPage from "./PaddingPage";
const { useBreakpoint } = Grid;

const { Sider, Content } = Layout;

const AppLayout = ({ children, activedTab }) => {
    const router = useRouter();
    const screens = useBreakpoint();

    const [sidebarCollapse, setSidebarCollapse] = useState(false);

    const [activeTab, setActiveTab] = useState([activedTab]);

    return (
        <Layout
            style={{
                minHeight: "100vh",
            }}
        >
            {!!screens["sm"] && (
                <Sider trigger={null} collapsible collapsed={!!screens["md"] ? false : true}>
                    <div
                        style={{
                            marginTop: "50px",
                        }}
                    ></div>

                    <div className="demo-logo-vertical" />
                    <Menu
                        theme="dark"
                        mode="inline"
                        onSelect={(e) => {
                            setActiveTab([e.key]);
                            router.push(`/${e.key}`);
                        }}
                        selectedKeys={activeTab}
                        items={[
                            {
                                key: "user-management",
                                icon: <TeamOutlined />,
                                label: "User Management",
                            },
                            {
                                key: "order-management",
                                icon: <ShoppingCartOutlined />,
                                label: "Order Management",
                            },
                            {
                                key: "book-management",
                                icon: <BookOutlined />,
                                label: "Book Management",
                            },
                        ]}
                    />
                </Sider>
            )}
            <PaddingPage>{children}</PaddingPage>
            {!screens["sm"] && (
                <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
                    <Menu
                        theme="dark"
                        mode="inline"
                        onSelect={(e) => {
                            setActiveTab([e.key]);
                            router.push(`/${e.key}`);
                        }}
                        style={{
                            flexDirection: "row",
                            display: "flex",
                        }}
                        selectedKeys={activeTab}
                        items={[
                            {
                                key: "dashboard",
                                icon: <UserOutlined />,
                                label: "Dashboard",
                            },
                            {
                                key: "user-management",
                                icon: <VideoCameraOutlined />,
                                label: "User Management",
                            },
                            {
                                key: "settings",
                                icon: <UploadOutlined />,
                                label: "Settings",
                            },
                        ]}
                    />
                </div>
            )}
        </Layout>
    );
};

export default AppLayout;
