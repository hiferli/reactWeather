import React from 'react'
import cities from '../../Data/IndianCities.json'

import { UseWeatherAppContext } from '../../Context/Context'

const ChooseCity = () => {
	console.log(`UseWeatherAppContext: ` , UseWeatherAppContext())

	const {state: {city} , dispatch} = UseWeatherAppContext();
	// console.log(city);

	const handleChange = (e) => {
		const selectedCity = cities.filter((city) => {
			return city.city === e.target.value.split(',')[0];			;
		})[0];

		// console.log(selectedCity);
		dispatch({
			type: 'SET_CITY',
			payload: selectedCity
		})
	}

  return (
    <div>
        <div className="stateWrap">
            <select className="stateMenu" defaultValue={city} onChange={handleChange}>
				{
					cities && cities.length > 0 && cities.map( (city) => {
						return (
							<option key={city.lat + city.lng}>
								{city.city}, {city.admin_name}
							</option>
						)
					} )
				}
			</select>
        </div>
    </div>
  )
}

export default ChooseCity
