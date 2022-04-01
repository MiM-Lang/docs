import React from "react";
import styles from "./DocView.module.scss";

interface Props {
	title: string;
}

export default class DocView extends React.Component<Props> {
	render() {
		return (
			<div className={`DocView ${styles.DocView}`}>
				<div className={styles.DocView_title}>{this.props.title}</div>
				{this.props.children}
			</div>
		);
	}
}
