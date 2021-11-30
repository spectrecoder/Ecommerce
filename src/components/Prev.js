import React from 'react'

export default function Prev(props) {
    const { className, onClick } = props;
    return (
            <i className={`far fa-arrow-alt-circle-left slick-arrow one`} onClick={onClick}></i>
    )
}
