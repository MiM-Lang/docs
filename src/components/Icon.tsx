import React from "react";
import styles from "./Icon.module.scss";

interface Props {
	glyph: string;
	size?: number;
	rotation?: number;
}

export default class Icon extends React.Component<Props> {
	private get size() {
		return this.props.size ? `${this.props.size}px` : undefined;
	}

	private get rotation() {
		return this.props.rotation ? `rotate(${this.props.rotation}deg)` : undefined;
	}

	render() {
		return <span className={`Icon ${styles.Icon} bi bi-${this.props.glyph}`} style={{ fontSize: this.size, transform: this.rotation }} />;
	}
}
