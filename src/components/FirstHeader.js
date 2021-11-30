import React from 'react'

export default function FirstHeader() {
    return (
        <div className="first-header">

            <form>
                <select id="languages">
                    <option selected value="en">English</option>
                    <option value="swe">Swedish</option>
                </select>

                <select id="value">
                    <option selected value="dollar">Dollar</option>
                    <option value="sek">Sek</option>
                </select>
            </form>

            <div className="info">
                <span>My account</span>
                <span>Checkout</span>
                <span>Wishlist</span>
            </div>

        </div>
    )
}
