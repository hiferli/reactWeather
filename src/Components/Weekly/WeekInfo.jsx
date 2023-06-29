import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'

import { UseWeatherAppContext } from '../../Context/Context'

const WeekInfo = () => {
    const { state: { daily }, dispatch } = UseWeatherAppContext();
    const [selectedCard, setSelectedCard] = useState(0);
    const updateCurrent = () => {
        return (
            dispatch({
                type: 'SET_CURRENT',
                payload: daily[selectedCard]
            })
        )
    }

    useEffect(() => {
        updateCurrent();
        // eslint-disable-next-line
    }, [daily , selectedCard]);
    
    console.log(`daily:`, daily)
    return (
        <div>
            <div className="cardWrap">
                <ul className="cardList">
                    {
                        daily && daily.length > 0 ? daily.map((item, index) => {
                            if (index < 7) {
                                return (
                                    <Card className={index === selectedCard ? "active" : ""}  onClick={() => {
                                        setSelectedCard(index)
                                        updateCurrent();
                                    }} item={item} key={index} />
                                )
                            }
                            return '';

                        }) : ''
                    }

                </ul>
            </div>
        </div>
    )
}

export default WeekInfo
