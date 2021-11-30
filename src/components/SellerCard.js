import React from 'react'

export default function SellerCard({image, sale, price, id}) {
    return (
        <div className="sellerCard">
            <div className="image">
                <img src={`images/${image}.png`} alt="image" />
            </div>
            <div className="content">
                <p>fast foods, vegetables</p>
                <h3>Lorem ipsum dolor sit amet ipsum</h3>
                <div className="price">{sale && <span>{`$${sale}`}</span>} {`$${price}`}</div>
            </div>
        </div>
    )
}
