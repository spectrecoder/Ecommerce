import React from 'react'

export default function Next(props) {
    const { className, onClick } = props;
    return (
            <i className={`far fa-arrow-alt-circle-right slick-arrow two`} onClick={onClick}></i>
    )
}
