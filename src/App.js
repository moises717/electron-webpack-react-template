import React, { useState } from "react";
import { Layout } from "antd";

import { Sidebar } from "@layouts/Sidebar";
import { TitleBar } from "@layouts/Header/TitleBar";

const { Content } = Layout;

const App = () => {
	const [collapsed, setCollapsed] = useState(false);

	const toggle = () => {
		setCollapsed(!collapsed);
	};

	return (
		<>
			<TitleBar toggle={toggle} collapsed={collapsed} />
			<Layout>
				<Sidebar collapsed={collapsed} />
				<Layout
					className="site-layout"
					style={{ marginLeft: !collapsed ? "200px" : "85px" }}>
					{/* <!--  herder content */}
					<Content
						className="site-layout-background"
						style={{
							margin: "55px 16px 0",
							padding: 24,
							minHeight: "calc(100vh - 55px)",
						}}>
						content
					</Content>
				</Layout>
			</Layout>
		</>
	);
};

export default App;
