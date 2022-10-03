import React from "react";
import ReactDOM from "react-dom/client";

import "antd/dist/antd.css";
// import "antd/dist/antd.less";
import "./index.css";
import App from "./App";
import { CityProvider } from "./context/CityContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	// <React.StrictMode>
	<CityProvider>
		<App />
	</CityProvider>
	// </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
