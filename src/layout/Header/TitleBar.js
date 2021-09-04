import React from "react";
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	MinusOutlined,
	BorderOutlined,
	CloseOutlined,
} from "@ant-design/icons";

import imgTer from "../../assets/icon/user.png";

import "./TitleBar.css";

export const TitleBar = (props) => {
	const { toggle, collapsed } = props;
	return (
		<div className="topBar">
			<div className="titleBar">
				<button id="showHiddenMenus" className="toggleButton" onClick={toggle}>
					{collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
				</button>
				<img src={imgTer} alt="" />
				<div className="title">MY TOP BAR TITLE </div>
			</div>
			<div className="titleBarBtns">
				<button
					id="minimizeBtn"
					className="topBtn minimizeBtn"
					onClick={() => window.elecApi.sendSync("windowsActions", "minimize")}>
					<MinusOutlined />
				</button>
				<button
					id="maxResBtn"
					className="topBtn maximinizeBtn"
					onClick={() => window.elecApi.sendSync("windowsActions", "maxUnmax")}>
					<BorderOutlined />
				</button>
				<button
					id="closeBtn"
					className="topBtn closeBtn"
					onClick={() => window.elecApi.sendSync("windowsActions", "closeApp")}>
					<CloseOutlined />
				</button>
			</div>
		</div>
	);
};
