import React from 'react'

export default function Heading({icon, text}) {
    return (
        <div className="heading">
            {icon && <i className={icon}></i>}
            <h3>{text}</h3>
        </div>
    )
}
