import React, { Component } from "react";
import "./App.scss";
import DocView from "./components/DocView";
import Sidebar from "./components/Sidebar";
import SidebarItem from "./components/SidebarItem";

export default class App extends Component {
	render() {
		return (
			<React.Fragment>
				<Sidebar>
					<SidebarItem name="Item 1" />
					<SidebarItem name="Item 2" />

					<SidebarItem name="Item Group" expanded={true}>
						<SidebarItem name="Item 3" />
						<SidebarItem name="Item 4" />

						<SidebarItem name="Item Group 222222">
							<SidebarItem name="Item 5" />
							<SidebarItem name="Item 6" />
						</SidebarItem>
					</SidebarItem>
				</Sidebar>

				<DocView>
					<h1>Some header</h1>
					some text
					<blockquote>
						some quote <code>some code</code>
					</blockquote>
					<pre>
						some code here
						<br />
						which is multiline
					</pre>
				</DocView>
			</React.Fragment>
		);
	}
}
