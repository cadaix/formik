import { createContext, useContext, useState, useEffect } from "react";

import { cityList } from "./cityList";

const CityContext = createContext();

const CityProvider = ({ children }) => {
	//cityList[6]
	const [city, setCity] = useState(cityList[6]);

	const setCityByName = (input) => {
		//input: cityName
		console.log("input", input);
		if (input) {
			console.log("processing");

			const result = cityList.filter(
				(city) => city.name.toLocaleLowerCase() === input.toLocaleLowerCase()
			)[0];
			console.log(result);
			setCity(result);
		}
	};

	const values = { city, setCityByName, cityList };

	return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

const useCity = () => useContext(CityContext);

export { CityProvider, useCity };
