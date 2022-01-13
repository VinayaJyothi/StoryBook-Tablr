import React from 'react'
import './control.css'

function Control (props) {
    const { className = 'date', children, ...rest } = props
    return (
        <input className={'input ${class}'} {...rest}>
            {children}
        </input>
    )
}

export default Control
