import axios from "axios";

const api_key = "5d26592f223d4727b8a5f5eb60b9ec4c";

const base_url = `https://api.weatherbit.io/v2.0/forecast/daily`;

export const fetchForecast = async (lat, lon) => {
	const { data } = await axios(
		`${base_url}?days=7&lat=${lat}&lon=${lon}&key=${api_key}`
	);
	// console.log(data.data);
	return data.data;
};
