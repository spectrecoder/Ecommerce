import React from 'react'
import ProductsCard from './ProductsCard'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {setting2} from "./settings"
import Slider from "react-slick"
import {useSelector} from 'react-redux'
import {filterItems} from "../slices/filterSlice"

export default function ProductsBody() {
    const data = useSelector(filterItems)
    return (
        <div className="box-container">
            <Slider {...setting2}>
            {
                data.map(({image, sale, price, category, id}) => (<ProductsCard key={id} image={image} sale={sale} price={price} category={category} id={id}/>))
            }
            </Slider>
        </div>
    )
}
