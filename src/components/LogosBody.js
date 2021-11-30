import React from 'react'
import SectionHeader from './SectionHeader'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import {setting6} from "./settings"

export default function LogosBody() {
    return (
        <div className="logosBody">
            <SectionHeader/>
            <Slider {...setting6}>
                <div className="image"><img src="images/shop.png" alt="smalllikeart" /></div>
                <div className="image"><img src="images/goods.png" alt="smalllikeart" /></div>
                <div className="image"><img src="images/store.png" alt="smalllikeart" /></div>
                <div className="image"><img src="images/basket.png" alt="smalllikeart" /></div>
                <div className="image"><img src="images/groceries.png" alt="Freefik" /></div>

                <div className="image"><img src="images/shop.png" alt="smalllikeart" /></div>
                <div className="image"><img src="images/goods.png" alt="smalllikeart" /></div>
                <div className="image"><img src="images/store.png" alt="smalllikeart" /></div>
                <div className="image"><img src="images/basket.png" alt="smalllikeart" /></div>
                <div className="image"><img src="images/groceries.png" alt="Freefik" /></div>
            </Slider>
        </div>
    )
}
