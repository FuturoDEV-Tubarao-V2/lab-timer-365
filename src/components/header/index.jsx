import { ScrollText, Timer, } from 'lucide-react'
import './header.css'

export function Header() {
    return (
        <header className='header--container'>
            <img src="/logotipo.png" alt="lab 365 - logotipo" />

            <nav>
                <a href="#"><Timer size={24} /></a>
                <a href="#"><ScrollText size={24} /></a>
            </nav>
        </header>
    )
}