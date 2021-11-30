import React from 'react'

export default function ShareIcons({extra, circle}) {
    return (
        <div className={`share ${circle ? 'circle': ''}`}>
            <div className="icon fab fa-twitter" style={{'--color': '#00ccff'}}></div>
            <div className="icon fab fa-facebook-f" style={{'--color': '#0084ff'}}></div>
            <div className="icon fab fa-instagram" style={{'--color': '#ff002b'}}></div>
            <div className="icon fab fa-linkedin-in" style={{'--color': '#0044ff'}}></div>
            {
                extra && <div className="icon fab fa-pinterest-p" style={{'--color': '#d63031'}}></div>
            }
        </div>
    )
}
