import React from 'react'
import SectionHeader from './SectionHeader'
import SellerCard from './SellerCard'
import data from './data'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import {setting4} from "./settings"

export default function SellerBody() {
    return (
        <div className="sellerBody">
            <SectionHeader/>
            <Slider {...setting4}>
            {
                data.map(({image, sale, price, id}) => (<SellerCard key={id} image={image} sale={sale} price={price} id={id}/>))
            }
            </Slider>
        </div>
    )
}
