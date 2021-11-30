import React from 'react'
import {msg} from '../slices/messSlice'
import {useDispatch} from 'react-redux'

export default function Subscribe() {
    const dispatch = useDispatch()

    function handleClick(e){
        e.preventDefault()
        dispatch(msg({class:'active', message:'thanks for subscribing'}))
    }
    
    return (
        <div className="subscribe">
            <p>Sign up for our newsletter to get up-to-date from us</p>
            <form>
                <input type="email" placeholder="your email address" className="box"/>
                <input type="submit" value="subscribe!" className="btn" onClick={handleClick}/>
            </form>
        </div>
    )
}
