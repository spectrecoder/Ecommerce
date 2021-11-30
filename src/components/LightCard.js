import React from 'react'
import {useDispatch} from 'react-redux'
import { showItem } from '../slices/showSlice'

export default function LightCard({image, sale, price, category, id}) {
    const dispatch = useDispatch()
    return (
        <div className="wrapper">
            <div onClick={()=> dispatch(showItem({image, sale, price, id}))} className="s-image">
                <img src={`images/${image}.png`} alt="images" />
            </div>
        </div>
    )
}
