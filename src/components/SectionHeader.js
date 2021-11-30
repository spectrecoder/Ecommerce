import React, {useRef} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {filtering} from "../slices/filterSlice"

export default function SectionHeader({filter}) {
    const dispatch = useDispatch()
    const node = useRef()

    function handleClick(e){
        node.current.classList.remove('active')
        e.target.classList.add('active')
        node.current = e.target
        dispatch(filtering(e.target.innerHTML))
    }

    return (
        <div className="sectionHeader">
            {
            filter && 
            <>
                <div onClick={handleClick} className="filter active" ref={node}>featured</div>
                <div onClick={handleClick} className="filter">new arrival</div>
                <div onClick={handleClick} className="filter">on sale</div>
            </>
            }
        </div>
    )
}
