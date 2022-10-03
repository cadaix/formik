import "./App.css";
import React, { useState } from "react";
import { Select } from "antd";
import { useCity } from "./context/CityContext";
import Form from "./components/Form";
import Weather from "./components/Weather";

function App() {
	const { city, setCityByName, cityList } = useCity();

	return (
		<div className="App">
			<header className="App-header">React Weather App</header>
			<>
				<Form />
				<Weather city={city} />
			</>
		</div>
	);
}

export default App;
