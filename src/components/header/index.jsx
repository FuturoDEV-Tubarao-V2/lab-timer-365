import { ScrollText, Timer, } from 'lucide-react'
import { NavLink } from 'react-router-dom'

import './header.css'

export function Header() {
    return (
        <header className='header--container'>
            <img src="/logotipo.png" alt="lab 365 - logotipo" />

            <nav>
                <NavLink to="/"><Timer size={24} /></NavLink>
                <NavLink to="/historico"><ScrollText size={24} /></NavLink>
            </nav>
        </header>
    )
}