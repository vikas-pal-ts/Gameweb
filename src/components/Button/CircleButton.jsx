import React from 'react'

const CircleButton = ({ children, className }) => {
    return (
        <button className={`rounded-full h-7 w-7 flex items-center justify-center border-2 ${className}`}>
            { children }
        </button>
    )
}

CircleButton.defaultProps = {
    // className: 'rounded-full h-7 w-7 flex items-center justify-center border-2'
}

export default CircleButton
