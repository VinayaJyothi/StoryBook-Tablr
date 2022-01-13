import React from 'react'
import './form.css'

function Form (props) {
    const { className = 'textbox', children, ...rest } = props
    return (
        <input className={'a ${class}'} {...rest}>
            {children}
        </input>
    )
}

export default Form
