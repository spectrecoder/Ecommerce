import React from 'react'
import NewsCard from './NewsCard'
import SectionHeader from './SectionHeader'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import {setting5} from "./settings"

export default function NewsBody() {
    return (
        <div className="newsBody">
            <SectionHeader/>
            <Slider {...setting5}>
                <NewsCard image="news1"/>
                <NewsCard image="news2"/>
                <NewsCard image="news3"/>
                <NewsCard image="news1"/>
                <NewsCard image="news2"/>
                <NewsCard image="news3"/>
            </Slider>
        </div>
    )
}
