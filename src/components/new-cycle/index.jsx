import './new-cycle.css'

export function NewCycle() {
    return (
        <div className='new-cycle--container'>
            <label htmlFor="">Vou trabalhar em</label>
            <input type="text" placeholder="Criar timer365..."/>

            <label htmlFor="">durante</label>
            <input type="number" />

            <span>minutos.</span>
        </div>
    )
}