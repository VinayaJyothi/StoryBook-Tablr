import React from 'react'
import './text.css'

function Text (props) {
    const { className = 'sample', children, ...rest } = props
    return (
        <p className={' ${class}'} {...rest}>
            {children}
        </p>
    )
}

export default Text
