import React from "react";
import CodeBlock from "../../../components/CodeBlock";

export default (
	<React.Fragment>
		<blockquote>The magic variable <code>stdstream</code> is here for reading/writing from/to the console.</blockquote>
		{/* ----------------------- */}
		<h3>Example: Writing to the console</h3>
		<CodeBlock language="MiM">stdstream = "Hello, world!";</CodeBlock>
		The above will print <code>Hello, world!</code> to the console.
		<br />
		<i>By assigning something to <code>stdstream</code>, you will print that thing to the console.</i>
		{/* ----------------------- */}
		<h3>Example: Reading from the console</h3>
		<CodeBlock language="MiM">
			var username = stdstream;
			<br /># in the future you will learn about declaration of variables, so don't worry :)
		</CodeBlock>
		The above will read a line from the console and stores the value in the variable <code>username</code>.
		<br />
		<i>By getting the value of <code>stdstream</code>, you will read a line from the console.</i>
		{/* ----------------------- */}
		<h3>Example: First write, then read! (prompting)</h3>
		<CodeBlock language="MiM">var username = stdstream("username: ");</CodeBlock>
		The above will first print <code>username: </code> to the console and then will read a line and stores the value in the variable <code>username</code>.
		<br />
		<i>By invoking the <code>stdstream</code>, first you will print the arguments passed to the <code>stdstream</code> separated by <code>stdstream.sep</code>, and then read a line from the console.</i>
	</React.Fragment>
);
