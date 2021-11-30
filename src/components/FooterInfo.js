import React from 'react'

export default function FooterInfo({header, text1, text2, text3, text4}) {
    return (
        <div className="footerInfo">
            <h3>{header}</h3>
            <a href="#">{text1}</a>
            <a href="#">{text2}</a>
            <a href="#">{text3}</a>
            <a href="#">{text4}</a>
        </div>
    )
}
