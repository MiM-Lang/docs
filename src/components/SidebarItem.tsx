import React from "react";
import Icon from "./Icon";
import styles from "./SidebarItem.module.scss";

interface Props {
	name: string;
	expanded?: boolean;
	children?: any;
}

interface State {
	expanded: boolean;
	deepHover: boolean;
}

export default class SidebarItem extends React.Component<Props, State> {
	constructor(props: Props) {
		super(props);
		this.state = {
			expanded: props.expanded ?? false,
			deepHover: false,
		};
	}

	shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
		if ((nextProps.children && nextState.expanded !== this.state.expanded) || nextState.deepHover !== this.state.deepHover) return true;
		else return false;
	}

	private onClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		this.setState({ expanded: !this.state.expanded });
	};

	private onMouseOver = (e: React.MouseEvent) => {
		e.stopPropagation();
		this.setState({ deepHover: true });
	};

	private onMouseOut = (e: React.MouseEvent) => {
		e.stopPropagation();
		this.setState({ deepHover: false });
	};

	private get iconRotation() {
		if (this.props.children) return this.state.expanded ? 90 : 0;
		else return 0;
	}

	private get icon() {
		return this.props.children ? "chevron" : "caret";
	}

	private get childrenHeight() {
		if (this.props.children) return this.state.expanded ? "auto" : 0;
		else return 0;
	}

	private get childrenTopPadding() {
		if (this.props.children) return this.state.expanded ? "5px" : 0;
		else return 0;
	}

	private get deepHover() {
		return this.state.deepHover ? "deep-hover" : "";
	}

	render() {
		return (
			<div className={`SidebarItem ${styles.SidebarItem} ${this.deepHover}`} onClick={this.onClick} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
				<Icon glyph={`${this.icon}-right`} size={20} rotation={this.iconRotation} />
				{this.props.name}

				{this.props.children && (
					<div className="children" style={{ height: this.childrenHeight, paddingTop: this.childrenTopPadding }}>
						{this.props.children}
					</div>
				)}
			</div>
		);
	}
}
