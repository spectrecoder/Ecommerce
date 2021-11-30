import React from 'react'
import CartItems from './CartItems'

export default function PhoneCart({className, iconName, text1, text2, cart}) {
    return (
        <div className={`iconText ${className ? className : ''}`}>
            <i className={iconName}></i>
            <div className="info">
                <p>{text1}</p>
                <p>{text2}</p>
            </div>
            {cart && <CartItems/>}
        </div>
    )
}
