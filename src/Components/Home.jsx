import React from 'react'
import ChooseCity from './ChooseCity/Index'
import WeekInfo from './Weekly/WeekInfo'
import Humidity from './Humidity/Humidity'
import Sidebar from './SideBar/Sidebar'

const Home = () => {
  return (
    <>
        <div className='homeWrap'>
            <div className="weatherSection">
                <Sidebar />
                <div className="rightSide">
                    <ChooseCity /> 
                    <WeekInfo /> 
                    <Humidity />
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
