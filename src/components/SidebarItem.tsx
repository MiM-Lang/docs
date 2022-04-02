import React from "react";
import Icon from "./Icon";
import styles from "./SidebarItem.module.scss";

interface Props {
	name: string;
	expanded?: boolean;
	active?: boolean;
	children?: any;
	id?: string;
	onClick?: (key?: string) => void;
}

interface State {
	expanded: boolean;
	deepHover: boolean;
}

export default class SidebarItem extends React.Component<Props, State> {
	private childrenContainer: React.RefObject<HTMLDivElement> = React.createRef();

	constructor(props: Props) {
		super(props);
		this.state = {
			expanded: props.expanded ?? false,
			deepHover: false,
		};
	}

	// shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
	// 	if ((nextProps.children && nextState.expanded !== this.state.expanded) || nextState.deepHover !== this.state.deepHover) return true;
	// 	else return false;
	// }

	private get expanded() {
		return this.props.expanded ?? this.state.expanded;
	}

	private onClick = (e: React.MouseEvent) => {
		e.stopPropagation();
		if (this.props.onClick) this.props.onClick(this.props.id);
		this.setState({ expanded: this.props.expanded ?? !this.state.expanded });
	};

	private onMouseOver = (e: React.MouseEvent) => {
		e.stopPropagation();
		this.setState({ deepHover: true });
	};

	private onMouseOut = (e: React.MouseEvent) => {
		e.stopPropagation();
		this.setState({ deepHover: false });
	};

	private stopPropagation = (e: React.MouseEvent) => {
		e.stopPropagation();
	};

	private get iconRotation() {
		if (this.props.children) return this.expanded ? 90 : 0;
		else return 0;
	}

	private get icon() {
		return this.props.children ? (this.props.active ? "chevron-double-right" : "chevron-right") : this.props.active ? "caret-right-fill" : "caret-right";
	}

	private get childrenHeight() {
		if (this.props.children) return this.expanded ? /* `${this.childrenContainer.current?.scrollHeight}px` */ "auto" : 0;
		else return 0;
	}

	private get childrenTopPadding() {
		if (this.props.children) return this.expanded ? "5px" : 0;
		else return 0;
	}

	private get deepHover() {
		return this.state.deepHover ? "deep-hover" : "";
	}

	render() {
		return (
			<div className={`SidebarItem ${styles.SidebarItem} ${this.deepHover}`} onClick={this.onClick} onMouseOver={this.onMouseOver} onMouseOut={this.onMouseOut}>
				<Icon glyph={this.icon} size={20} rotation={this.iconRotation} />
				{this.props.name}

				{this.props.children && (
					<div ref={this.childrenContainer} className="children" style={{ height: this.childrenHeight, paddingTop: this.childrenTopPadding }} onMouseOver={this.stopPropagation} onClick={this.stopPropagation}>
						{this.props.children}
					</div>
				)}
			</div>
		);
	}
}
