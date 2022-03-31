import { StrictMode } from "react";
import ReactDomClient from "react-dom/client";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.scss";
import App from "./App";

const root = ReactDomClient.createRoot(document.getElementById("root")!);

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
