import React from 'react'

export default function Fruit({image, text, bg, bgh}) {
    return (
        <div className="fruit" style={{backgroundColor:bg}}>
            <img src={`images/${image}.png`} alt="images" />
            <h3 style={{backgroundColor:bgh}}>{text}</h3>
        </div>
    )
}
