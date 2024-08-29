import styles from './status.module.css'
import PropTypes from 'prop-types'

export function Status({ color = "green", children }) {
    return <span className={`${styles.container} ${styles[color]}`}>{children}</span>
}

Status.propTypes = {
    children: PropTypes.string.isRequired,
    color: PropTypes.oneOf(['green', 'orange', 'pink'])
} 