import React from 'react'
import './background.css'

function Background (props) {
    const { className = 'color', children, ...rest } = props
    return (
        <p className={'p ${class}'} {...rest}>
            {children}
        </p>
    )
}

export default Background
