import React from 'react'
import { useDispatch } from 'react-redux'
import {removeCart} from '../slices/cartSlice'

export default function Items({image, amount, price, id}) {
    const dispatch = useDispatch()
    return (
        <div className="items">
            <div className="image"><img src={`images/${image}.png`} alt="images" /></div>
            <div className="content">
                <h3>Duis pulvinar obortis eleifend</h3>
                <p>{`x${amount}`} {`$${price}`}</p>
            </div>
                <i className="fas fa-times" onClick={()=>dispatch(removeCart({id}))}></i>
        </div>
    )
}
