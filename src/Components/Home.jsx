import React from 'react'
import ChooseCity from './ChooseCity/Index'
import WeekInfo from './Weekly/WeekInfo'

const Home = () => {
  return (
    <>
        <div className='homeWrap'>
            <div className="weatherSection">
                <div className="rightSegment">
                    <ChooseCity />
                    <WeekInfo /> <br />
                    3. Humidity
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
