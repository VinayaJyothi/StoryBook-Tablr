import React from 'react'
import './option.css'

function Option (props) {
    const { className = 'radio', children, ...rest } = props
    return (
        <input className={'input ${class}'} {...rest}>
            {children}
        </input>
    )
}

export default Option
