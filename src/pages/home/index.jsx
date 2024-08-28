import { Play } from 'lucide-react'

import { Button } from '../../components/button'
import { Timer } from '../../components/timer'
import { NewCycle } from '../../components/new-cycle'

import './home.css'

export function HomePage() {

    return (
        <div className='home--container'>
            <NewCycle />

            <Timer />

            <Button variant='orange'>
                <Play size={24} />
                Começar
            </Button>
        </div>
    )
}

// exportação nomeada