import PropTypes from 'prop-types'
import { useCycle } from '../../contexts/cycle'

import './new-cycle.css'

export function NewCycle({ register }) {
    const { activeCycle } = useCycle()

    const isInputDisabled = !!activeCycle

    return (
        <div className='new-cycle--container'>
            <label htmlFor="task">Vou trabalhar em</label>
            
            <input 
                id="task"
                disabled={isInputDisabled} 
                type="text" 
                placeholder="Criar timer365..." 
                {...register('task', { required: true })} 
                list='autocomplete'
                // {...register('task', { required: { value: true, message: '' } })} 
            />

            <datalist id='autocomplete'>
                <option value="Projeto timer 365" />
                <option value="Projeto final do modulo 3" />
                <option value="Exercicios da semana de revisão" />
                <option value="Exercicio de contexto" />
            </datalist>
            
            <label htmlFor="minutesAmount">durante</label>

            <input 
                id="minutesAmount"
                disabled={isInputDisabled} 
                type="number" 
                {...register('minutesAmount', { valueAsNumber: true, min: 1 })}
            />

            <span>minutos.</span>
        </div>
    )
}

NewCycle.propTypes = {
    register: PropTypes.func,
}