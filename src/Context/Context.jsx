import React , { useReducer , useContext } from 'react'
import { WeatherReducer } from './Reducer'

const WeatherAppContext = React.createContext();

const WeatherAppProvider = ({ children }) => {
    const [state , dispatch] = useReducer(WeatherAppContext , {
        city: '',
        current: '',
        daily: ''
    })
    
    return (
        <>
            <WeatherAppContext.Provider value={{state , dispatch}}>
                {children}
            </WeatherAppContext.Provider>
        </>
    )
}

export default WeatherAppProvider

export const UseWeatherAppContext = () => {
    return useContext(WeatherAppContext);
}