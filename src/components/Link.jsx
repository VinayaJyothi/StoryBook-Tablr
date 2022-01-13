import React from 'react'
import './link.css'

function Link (props) {
    const { className = 'dash', children, ...rest } = props
    return (
        <a className={'a ${class}'} {...rest}>
            {children}
        </a>
    )
}

export default Link
