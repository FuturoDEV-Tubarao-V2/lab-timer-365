import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { differenceInSeconds } from 'date-fns'

import './timer.css'

export function Timer({ activeCycle }) {

    const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
        if(activeCycle) {
            // calc
            return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
        }

        return 0
    })

    const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0

    /** Formtação do timer */

    const minutesAmount = Math.floor(currentSeconds / 60)
    const secondsAmount = currentSeconds % 60 

    const minutes = String(minutesAmount).padStart(2, '0')
    const seconds = String(secondsAmount).padStart(2, '0')

    useEffect(() => {
        let intervalId;

        if(activeCycle) {
            intervalId = setInterval(() => {
                const secondsDifference = differenceInSeconds(new Date(), new Date(activeCycle.startDate))

                if(secondsDifference >= totalSeconds) {
                    setAmountSecondsPassed(totalSeconds)
                    clearInterval(intervalId)
                } else {
                    setAmountSecondsPassed(secondsDifference)
                }
            }, 1000)
        }
        // clean up
        return () => {
            clearInterval(intervalId)
        }
    }, [activeCycle, totalSeconds])

    

    return (
        <div className='timer--container'>
            {/* minutos */}
            <span>{minutes[0]}</span>
            <span>{minutes[1]}</span>
            {/* separador */}
            <div className='timer--separtor'>:</div>
            {/* segundos */}
            <span>{seconds[0]}</span>
            <span>{seconds[1]}</span>
        </div>
    )
}

Timer.propTypes = {
    activeCycle: PropTypes.object
}