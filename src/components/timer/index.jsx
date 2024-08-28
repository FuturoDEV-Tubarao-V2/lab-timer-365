import './timer.css'

export function Timer() {

    return (
        <div className='timer--container'>
            {/* minutos */}
            <span>0</span>
            <span>0</span>
            {/* separador */}
            <div className='timer--separtor'>:</div>
            {/* segundos */}
            <span>0</span>
            <span>0</span>
        </div>
    )
}