import { Layout } from "antd";
import React from "react";
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	MinusOutlined,
	BorderOutlined,
	CloseOutlined,
} from "@ant-design/icons";

const { Header } = Layout;

import "./UserHeader.css";

export const UserHeader = (props) => {
	const { toggle, collapsed } = props;

	return (
		<div>
			<Header className="user-header">
				<div className="user-header__left-items">
					{collapsed ? (
						<MenuUnfoldOutlined className="trigger" onClick={toggle} />
					) : (
						<MenuFoldOutlined className="trigger" onClick={toggle} />
					)}
				</div>
				<div className="user-header__right-items draggable">
					<div className="right-items__window-actions">
						<span className="windows-actions-item">
							<MinusOutlined />
						</span>
						<span className="windows-actions-item">
							<BorderOutlined />
						</span>
						<span className="windows-actions-item">
							<CloseOutlined />
						</span>
					</div>
				</div>
			</Header>
		</div>
	);
};
