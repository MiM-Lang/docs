import React from "react";
import styles from "./CodeBlock.module.scss";
import Icon from "./Icon";

interface Props {
	language: string;
}

export default class CodeBlock extends React.Component<Props> {
	private codeHolder: React.RefObject<HTMLPreElement>;

	constructor(props: Props) {
		super(props);
		this.codeHolder = React.createRef<HTMLPreElement>();
	}

	private copyCode = () => {
		const codeToCopy = this.convertBrToNewline(this.codeHolder.current!.innerHTML);
		navigator.clipboard.writeText(codeToCopy);
	};

	private convertBrToNewline(text: string): string {
		const tmpEl = document.createElement("div");
		tmpEl.innerHTML = text.replace(/<br\s*\/?>/gi, "\n");
		return tmpEl.textContent!;
	}

	render() {
		return (
			<div className={styles.CodeBlock}>
				<div>
					{this.props.language}
					<Icon glyph="clipboard" onClick={this.copyCode} />
				</div>
				<pre ref={this.codeHolder}>{this.props.children}</pre>
			</div>
		);
	}
}
