import LetsGo from "./intro/LetsGo";
import WhatIsMiM from "./intro/WhatIsMiM";
import end from "./lang/stdstream/end";
import sep from "./lang/stdstream/sep";
import stdstream from "./lang/stdstream/stdstream";
import TheLanguage from "./lang/TheLanguage";

export interface Page {
	title: string;
	content: React.ReactNode;
	children?: Page[];
}

const pages: Page[] = [
	{
		title: "Introduction",
		content: "",
		children: [
			{
				title: "What is MiM?",
				content: WhatIsMiM,
			},
			{
				title: "Lets go!",
				content: LetsGo,
			},
		],
	},
	{
		title: "The Language",
		content: TheLanguage,
		children: [
			{
				title: "stdstream",
				content: stdstream,
				children: [
					{
						title: ".sep",
						content: sep,
					},
					{
						title: ".end",
						content: end,
					},
				],
			},
		],
	},
];

export default pages;
