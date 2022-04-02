import React, { Component } from "react";
import "./App.scss";
import DocView from "./components/DocView";
import Sidebar from "./components/Sidebar";
import SidebarItem from "./components/SidebarItem";
import pages, { Page } from "./docs";

interface AppProps {}

interface AppState {
	pageId: string;
}

export default class App extends Component<AppProps, AppState> {
	constructor(props: AppProps) {
		super(props);
		this.state = {
			pageId: "0",
		};
	}

	private parseChildren(page: Page, key: string) {
		return page.children?.map((child, index) => {
			const childKey = `${key}-${index}`;
			const isActive = this.state.pageId.startsWith(childKey);

			return (
				<SidebarItem key={childKey} id={childKey} name={child.title} onClick={this.updateDocView} active={isActive} expanded={isActive}>
					{this.parseChildren(child, childKey)}
				</SidebarItem>
			);
		});
	}

	private get sidebarItems() {
		return pages.map((page, index) => {
			const key = `${index}`;
			const isActive = this.state.pageId.startsWith(key);

			return (
				<SidebarItem key={key} id={key} name={page.title} onClick={this.updateDocView} active={isActive} expanded={isActive}>
					{this.parseChildren(page, key)}
				</SidebarItem>
			);
		});
	}

	private get docView() {
		const pageIds = this.state.pageId.split("-");
		let targetPage: Page;
		pageIds.forEach((id) => {
			targetPage = targetPage ? targetPage.children![+id] : pages[+id];
		});

		return <DocView title={targetPage!.title}>{targetPage!.content}</DocView>;
	}

	private updateDocView = (pageId?: string) => {
		this.setState({ pageId: pageId! });
	};

	render() {
		return (
			<React.Fragment>
				<Sidebar>{this.sidebarItems}</Sidebar>
				{this.docView}
			</React.Fragment>
		);
	}
}
