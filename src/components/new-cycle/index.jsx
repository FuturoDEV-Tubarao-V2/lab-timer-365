import PropTypes from 'prop-types'
import './new-cycle.css'

export function NewCycle({ register }) {

    return (
        <div className='new-cycle--container'>
            <label htmlFor="">Vou trabalhar em</label>
            
            <input type="text" placeholder="Criar timer365..." {...register('task')} />
            
            <label htmlFor="">durante</label>

            <input type="number" {...register('minutesAmount', { valueAsNumber: true })}/>

            <span>minutos.</span>
        </div>
    )
}

NewCycle.propTypes = {
    register: PropTypes.func,
}