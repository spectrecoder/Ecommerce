import React from 'react'

export default function TopCard({text}) {
    return (
        <div className="topCard">
            <div className="image">
                <img src={`images/${text}.png`} alt="image" />
            </div>
            <h3>{text}</h3>
        </div>
    )
}
