import React from 'react'
import ChooseCity from './ChooseCity/Index'

const Home = () => {
  return (
    <>
        <div className='homeWrap'>
            <div className="weatherSection">
                <div className="rightSegment">
                    <ChooseCity />
                    2. Week Information
                    3. Humidity
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
