import React from 'react'

const Button = ({ children, className}) => {
    return (
        <button className={`${className}`}>{ children }</button>
    )
}

Button.defaultProps = {
    className:'hover:bg-blue radius rounded-full py-1 px-3 mr-3 text-black-light/60'
}

export default Button
