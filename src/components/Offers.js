import React from 'react'

export default function Offers({icon, text}) {
    return (
        <div className="box">
            <i className={icon}></i>
            <h3>{text}</h3>
        </div>
    )
}
