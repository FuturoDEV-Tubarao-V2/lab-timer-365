import { Header } from "../components/header";
import PropTypes from 'prop-types'

import './template.css'

export function Template({ children }) {
    return (
        <>
            <Header />

            <main className='template--container'>
                <div className='template-container-content'>
                    {children}
                </div>
            </main>
        </>
    )
}

Template.propTypes = {
    children: PropTypes.node,
}