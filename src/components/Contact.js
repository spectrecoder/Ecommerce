import React from 'react'
import PhoneCart from './PhoneCart'

export default function Contact() {
    return (
        <div className="contact">
            <h3>contact me</h3>
            <div className="container">
                <PhoneCart iconName="fas fa-map-marker-alt" text1="Address:" text2="Fornbacken 71, 134 56 Södertälje Stockholm"/>
                <PhoneCart iconName="fas fa-mobile-alt" text1="Phone:" text2="+01-123-456-789-90"/>
                <PhoneCart iconName="far fa-envelope" text1="Email:" text2="support@grocerystore.com"/>
            </div>
        </div>
    )
}
