import React from 'react'

export default function NewsCard({image}) {
    return (
        <div className="newsCard">
            <img src={`images/${image}.jpg`} alt="image" />
            <div className="content">
                <p>29.09.2021</p>
                <h3>Blog With Video</h3>
                <p className="icon">Continue <i className="fas fa-arrow-right"></i></p>
            </div>
        </div>
    )
}
