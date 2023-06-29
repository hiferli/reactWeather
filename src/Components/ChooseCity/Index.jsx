import React, { useEffect } from 'react'
import cities from '../../Data/IndianCities.json'

import { UseWeatherAppContext } from '../../Context/Context'

import axios from 'axios'

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

	// API Calls
	const API_KEY = '9a12834df62bc3ebee87c993a0e4c95e';
	let latitude = city && city.lat ? city.lat : ``;
	let longitude = city && city.lng ? city.lng : ``;
	let exclude = 'hourly,minutely';
	const URL =  `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=${exclude}&units=metric&lang=tr&appid=${API_KEY}`
    

	const fetchData = () => {
		axios(URL).then((data) => {
			// console.log(data)
			let _daily = data.data.daily
			dispatch({
				type: 'SET_DAILY',
				payload: _daily 
			})
		})
	}

	useEffect(() => {
		fetchData();
		// eslint-disable-next-line
	}, [city]);

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
