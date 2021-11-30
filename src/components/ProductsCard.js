import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { showItem } from '../slices/showSlice'

export default function ProductsCard({image, sale, price, category, id}) {
    const dispatch = useDispatch()
    return (
        <>
        <div className="box">
            {sale && <div className="sale">sale</div>}
            <div className="image">
                <div className="icons">
                    <div className="fas fa-search"></div>
                    <div className="far fa-heart"></div>
                    <div className="fas fa-exchange-alt"></div>
                    <div onClick={() => dispatch(showItem({image, sale, price, id}))} className="fas fa-shopping-cart"></div>
                </div>
                <img src={`images/${image}.png`} alt="images" />
            </div>
            <div className="content">
                <p>Fast Foods, Vegetables</p>
                <h3>Lorem ipsum dolor sit amet.</h3>
                <div className="price"> {sale && <span>{`$${sale}`}</span>} {`$${price}`}</div>
            </div>
        </div>
        </>
    )
}
