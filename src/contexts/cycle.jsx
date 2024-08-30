import { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

export const CycleContext = createContext({
    cycles: [],
    activeCycle: null,
    createNewCycle: () => {},
    interruptedCurrentCycle: () => {},
    markCurrentCycleAsFinished: () => {}
})

export function CycleProvider({ children }) {
    const [cycles, setCycles] = useState(() => {
        const cycleStorage = localStorage.getItem('@lab-timer:cycles-v.1.0.0')
        
        if(cycleStorage) {
            return JSON.parse(cycleStorage)
        }

        return []
    })
    const [activeCycleId, setActiveCycleId] = useState(() => {
        const activeCycleStorage = localStorage.getItem('@lab-timer:active-cycle-v.1.0.0')
        
       return activeCycleStorage
    })

    /**
     * 
     * @param {Object} data São todos os dados do formulario 
     * @param {String} data.task Nome da tarefa
     * @param {Number} data.minutesAmount Quantidade de minutos
    */
    function createNewCycle({ task, minutesAmount }) {
       const id = String(new Date().getTime())
       
       const newCycle = {
            id,
            task,
            minutesAmount,
            startDate: new Date()
       }

       const newStateCycles = [...cycles, newCycle]

       setCycles(newStateCycles)
       setActiveCycleId(id)

       localStorage.setItem('@lab-timer:cycles-v.1.0.0', JSON.stringify(newStateCycles))
       localStorage.setItem('@lab-timer:active-cycle-v.1.0.0', id)
    }

    function updateStorageCycles(updateCycles, updateActiveCycleId) {
        localStorage.setItem('@lab-timer:cycles-v.1.0.0', JSON.stringify(updateCycles))
        localStorage.setItem('@lab-timer:active-cycle-v.1.0.0', updateActiveCycleId)
    }

    function interruptedCurrentCycle() {
        const newStateCycles = cycles.map(cycle => {
            if(cycle.id === activeCycleId) {
                return {
                    ...cycle,
                    interruptedDate: new Date()
                }
            }
            return cycle
        })

        setCycles(newStateCycles)
        setActiveCycleId(null)
        // atualizando o localstorage dos ciclos
        updateStorageCycles(newStateCycles, null)
    }

    function markCurrentCycleAsFinished() {
        const newStateCycles = cycles.map(cycle => {
            if(cycle.id === activeCycleId) {
                return {
                    ...cycle,
                    finishedDate: new Date()
                }
            }
            return cycle
        })

        setCycles(newStateCycles)
        setActiveCycleId(null)
        // atualizando o localstorage dos ciclos
        updateStorageCycles(newStateCycles, null)
        
    }
    
    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId)

    return (
        <CycleContext.Provider 
            value={{ 
                cycles, 
                activeCycle, 
                createNewCycle, 
                interruptedCurrentCycle, 
                markCurrentCycleAsFinished,
            }}
        >
            {children}
        </CycleContext.Provider>
    )
}

CycleProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export function useCycle() {
    const context = useContext(CycleContext)

    return context
}