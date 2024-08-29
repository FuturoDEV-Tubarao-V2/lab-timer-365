import { Hand, Play } from 'lucide-react'
import { useForm } from 'react-hook-form'

import { Button } from '../../components/button'
import { Timer } from '../../components/timer'
import { NewCycle } from '../../components/new-cycle'

import './home.css'
import { useState } from 'react'

export function HomePage() {

    const [cycles, setCycles] = useState([])
    const [activeCycleId, setActiveCycleId] = useState(null)

    const { register, handleSubmit } = useForm({
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
    function onSubmit({ task, minutesAmount }) {
        // id : string
        // task: string
        // minutesAmount: number
        // startDate: Date
        // interruptedDate?: Date | undefined
        // finishedDate?: Date | undefined
       const id = String(new Date().getTime())
       
       const newCycle = {
            id,
            task,
            minutesAmount,
            startDate: new Date()
       }

       setCycles([...cycles, newCycle])
       setActiveCycleId(id)
    }

    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

    return (
        <form className='home--container' onSubmit={handleSubmit(onSubmit)}>
            {/* <input type="text" {...register('task')}/> */}
            <NewCycle register={register} />

            <Timer activeCycle={activeCycle} />

            {
                activeCycle ? (
                    <Button variant='pink' type="button">
                        <Hand size={24} />
                        Interromper
                    </Button>
                ) : (
                    <Button variant='orange' type="submit">
                        <Play size={24} />
                        Começar
                    </Button>
                )
            }
            
        </form>
    )
}

// exportação nomeada