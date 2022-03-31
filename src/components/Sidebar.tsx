import React from "react";
import styles from "./Sidebar.module.scss";

interface Props {
}

export default class Sidebar extends React.Component<Props> {
	render() {
		return <nav className={`Sidebar ${styles.Sidebar}`}>{this.props.children}</nav>;
	}
}
