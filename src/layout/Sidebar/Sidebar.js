import React from "react";
import { Layout, Menu } from "antd";
import {
	UserOutlined,
	VideoCameraOutlined,
	UploadOutlined,
} from "@ant-design/icons";

import "./Sidebar.css";

const { Sider } = Layout;

export const Sidebar = (props) => {
	const { collapsed } = props;
	return (
		<Sider
			theme="light"
			trigger={null}
			collapsible
			collapsed={collapsed}
			className="sidebarLayout">
			<div className="logo" />
			<Menu mode="inline" defaultSelectedKeys={["1"]}>
				<Menu.Item key="1" icon={<UserOutlined />}>
					nav 1
				</Menu.Item>
				<Menu.Item key="2" icon={<VideoCameraOutlined />}>
					nav 2
				</Menu.Item>
				<Menu.Item key="3" icon={<UploadOutlined />}>
					nav 3
				</Menu.Item>
			</Menu>
		</Sider>
	);
};
