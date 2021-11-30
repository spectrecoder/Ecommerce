import React,{useCallback} from 'react'
import Items from './Items'
import { useSelector, useDispatch } from 'react-redux'
import {cartItems, removeAll} from '../slices/cartSlice'
import {msg} from '../slices/messSlice'

export default function CartItems() {
    const value = useSelector(cartItems)
    const valueArr = Object.entries(value)
    const dispatch = useDispatch()

    const subCost = useCallback(()=>{
        let price = 0
        for(let i of valueArr){
            price += i[1].price
        }
        return price
    }, [valueArr])

    function orderClick(){
        dispatch(msg({class:'active', message:'thanks for ordering'}))
        setTimeout(()=>{
            dispatch(removeAll())
        }, 1600)
    }

    return (
        <div className="cartItems">
            {
                valueArr.length === 0 ? <div className="itemContainer empty">your cart is empty</div> :
                (
                    <>
                    <div className="itemContainer">
                        {
                            valueArr.map(elm=>(<Items key={elm[1].id} image={elm[1].image} amount={elm[1].amount} price={elm[1].price} id={elm[1].id}/>))
                        }
                    </div>
                    <div className="divider one"></div>
                    <div className="total">
                        <h3>subtotal</h3>
                        <h3>{`$${subCost()}`}</h3>
                    </div>
                    <div className="divider"></div>
                    <div className="buttons">
                        <div className="btn" onClick={orderClick}>order now</div>
                    </div>
                    </>
                )
            }
        </div>
    )
}
