import { Hand, Play } from 'lucide-react'
import { useForm } from 'react-hook-form'

import { Button } from '../../components/button'
import { Timer } from '../../components/timer'
import { NewCycle } from '../../components/new-cycle'

import { useCycle } from '../../contexts/cycle'

import './home.css'

export function HomePage() {

    const { createNewCycle, activeCycle, interruptedCurrentCycle } = useCycle()

    const { register, handleSubmit, watch } = useForm({
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    })
    /**
     * 
     * @param {Object} data São todos os dados do formulario 
     * @param {String} data.task Nome da tarefa
     * @param {Number} data.minutesAmount Quantidade de minutos
    */
    function onSubmit(data) {
        createNewCycle(data)
    }

    const task = watch('task')
    const isDisabledForm = !task

    return (
        <form className='home--container' onSubmit={handleSubmit(onSubmit)}>
            {/* <input type="text" {...register('task')}/> */}
            <NewCycle register={register} />

            <Timer />

            {
                !activeCycle && (
                    <Button type="submit" disabled={isDisabledForm}>
                        <Play size={24} />
                        Começar
                    </Button>
                )
            }
            
            {
                activeCycle && (
                    <Button type="button" variant='pink' onClick={interruptedCurrentCycle}>
                        <Hand size={24} />
                        Interromper
                    </Button>
                )
            }
            
        </form>
    )
}

// exportação nomeada