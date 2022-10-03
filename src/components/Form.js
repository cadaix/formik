import React, { useState } from "react";
import { Select } from "antd";
import { useCity } from "./../context/CityContext";

function Form() {
	const { Option } = Select;
	const { setCityByName, cityList } = useCity();
	return (
		<div>
			<Select
				showSearch
				placeholder={"Select City"}
				onChange={(value) => setCityByName(value)}
				onSearch={() => {}}
				onBlur={(e) => setCityByName(e.target.value)}
				filterOption={(input, option) =>
					option.value?.toLocaleLowerCase().includes(input.toLocaleLowerCase())
				}
				style={{ width: 200 }}
			>
				{cityList.map((option) => (
					<Option
						key={option.id}
						value={option.name}
						label={option.name || option}
					/>
				))}
			</Select>
		</div>
	);
}

export default Form;
