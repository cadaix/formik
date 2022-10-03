import React from "react";
import { subDays } from "date-fns";
import styles from "./WeatherCard.module.css";

function WeatherCard({ data, index }) {
	const { high_temp, low_temp, weather } = data;
	// console.log(data);

	const day = subDays(new Date(), -index)
		.toLocaleTimeString("en", {
			weekday: "long",
		})
		.split(" ")[0];
	// const day = moment(datetime, "MM-DD-YYYY").format("DD");
	return (
		<div className={styles.Container}>
			<div
				className={index === 0 ? `${styles.Card} ${styles.CardW}` : styles.Card}
			>
				<h2>{day}</h2>
				<img
					src={`https://www.weatherbit.io/static/img/icons/${weather.icon}.png`}
					alt="img"
				/>
				<div className={styles.Temps}>
					<p>Max: {high_temp} °C</p>
					<p>Min: {low_temp} °C</p>
				</div>
			</div>
		</div>
	);
}

export default WeatherCard;
