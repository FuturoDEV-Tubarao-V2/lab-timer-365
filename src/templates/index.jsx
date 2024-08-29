import { Outlet } from 'react-router-dom'
import { Header } from "../components/header";

import './template.css'

export function Template() {
    return (
        <>
            <Header />

            <main className='template--container'>
                <div className='template-container-content'>
                    <Outlet />
                </div>
            </main>
        </>
    )
}
