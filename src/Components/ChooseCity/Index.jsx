import React from 'react'
import cities from '../../Data/IndianCities.json'

const ChooseCity = () => {
  return (
    <div>
        <div className="stateWrap">
            <select className="stateMenu">
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
