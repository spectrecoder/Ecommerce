import React from 'react'

export default function OrganicCard({text, image, right, tag}) {
    return (
        <div className={`box ${right ? 'right' : ''}`}>
            <img src={`images/${image}.png`} alt="images"/>
            <div className="content">
                <p>{tag}</p>
                <h3>{text}</h3>
                <a href="#" className="shop">shop now</a>
            </div>
        </div>
    )
}
