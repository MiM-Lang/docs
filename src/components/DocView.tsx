import React from "react";
import styles from "./DocView.module.scss";

export default class DocView extends React.Component {
	render() {
		return <div className={`DocView ${styles.DocView}`}>{this.props.children}</div>;
	}
}
