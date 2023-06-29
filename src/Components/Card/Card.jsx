import React from 'react'
import dayjs from 'dayjs'

const Card = ({ item, className, onClick }) => {
    const WEEKDAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const weekDayIndex = dayjs.unix(item.dt).day();

    return (
        <>
            <li className={className} key={item.moonrise} onClick={onClick}>
                <img className="day-icon" alt="weather-icon"
                    src={`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                />

                <span className="day-name">
                    {WEEKDAYS[weekDayIndex].slice(0 , 3)}
                </span>

                <span className="day-temp">
                    {Math.round(item.temp.max)}<sup>o</sup>C
                </span>
            </li>
        </>
    )
}

export default Card
