import React, { useEffect, useState } from "react";

import { fetchForecast } from "./../api";
import WeatherCard from "./WeatherCard";

function Weather({ city }) {
	const { latitude, longitude, name } = city;
	const [data, setData] = useState();
	// console.log(latitude, longitude, name);

	useEffect(() => {
		(async () => {
			const response = await fetchForecast(latitude, longitude);
			setData(response);
		})();
	}, [city]);

	return (
		<div>
			{<h1>{city.name}</h1>}
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-around",
				}}
			>
				{data &&
					data.map((dayForecast, index) => (
						<WeatherCard key={index} data={dayForecast} index={index} />
					))}
			</div>
		</div>
	);
}

export default Weather;
