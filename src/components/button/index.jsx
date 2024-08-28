import PropTypes from 'prop-types'

import './button.css'


/**
 * JS DOC
 * @param {Object} propriedades 
 * @param {String} propriedades.children Conteudo interno
 * @param {String} propriedades.variant Tipo de coloração do button
 * @returns 
 */
export function Button({ children, variant = 'orange' }) {
    return <button className={`button--container ${variant}`}>{children}</button>
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['orange', 'pink'])
}