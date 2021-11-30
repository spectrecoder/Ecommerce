import React from 'react'
import TopCard from './TopCard'
import Slider from "react-slick"
import settings from "./settings"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import SectionHeader from './SectionHeader'

export default function TopBody() {
    return (
        <div className="box">
            <SectionHeader/>
            <Slider {...settings}>
                <TopCard text="fruit"/>
                <TopCard text="beans"/>
                <TopCard text="bread"/>
                <TopCard text="meat"/>
                <TopCard text="potato"/>
                <TopCard text="spinach"/>

                <TopCard text="fruit"/>
                <TopCard text="beans"/>
                <TopCard text="bread"/>
                <TopCard text="meat"/>
                <TopCard text="potato"/>
                <TopCard text="spinach"/>
            </Slider>
        </div>
    )
}
