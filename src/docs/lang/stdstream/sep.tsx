import React from "react";
import CodeBlock from "../../../components/CodeBlock";

export default (
	<React.Fragment>
		<blockquote>
			This property of the <code>stdstream</code> defines the separator among the arguments passed to the <code>stdstream</code> as a function invocation when printing. [default is <code>" "</code>]
		</blockquote>
		<h3>Example: passing more than one argument to the stdstream</h3>
		<CodeBlock language="MiM">
			stdstream.sep = "-";
			<br />
			var username = stdstream("your", "username: ");
		</CodeBlock>
		The above will print <code>your-username: </code> to the console; which is separated by the <code>stdstream.sep</code> defined on line 1.
	</React.Fragment>
);
