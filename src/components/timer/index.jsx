import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { differenceInSeconds } from 'date-fns'
import { useCycle } from '../../contexts/cycle'

import './timer.css'

export function Timer() {

    const { activeCycle, markCurrentCycleAsFinished } = useCycle()
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

    function playSoundCountdown() {
        const audio = new Audio("/audios/countdown.mp3")
        audio.play()
    }

    useEffect(() => {
        let intervalId;

        if(activeCycle) {
            intervalId = setInterval(() => {
                const secondsDifference = differenceInSeconds(new Date(), new Date(activeCycle.startDate))

                if(secondsDifference >= totalSeconds) {
                    setAmountSecondsPassed(totalSeconds)
                    clearInterval(intervalId)
                    markCurrentCycleAsFinished()
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

    useEffect(() => {
        if(minutesAmount === 0 && secondsAmount === 3) {
            playSoundCountdown()
        }
    }, [secondsAmount, minutesAmount])
    
    useEffect(() => {
        if(activeCycle) {
            document.title = `${minutes}:${seconds} - ${activeCycle.task}`
        }
    }, [activeCycle, minutes, seconds])

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