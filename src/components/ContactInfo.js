import React from 'react'

export default function ContactInfo({icon, header, text1, text2}) {
    return (
        <div className="contactInfo">
            <div className="reachMe">
            <i className={icon}></i>
                <h3>{header}</h3>
            </div>
            <p>{text1}</p>
            {text2 && <p className="extraP">{text2}</p>}
        </div>
    )
}
