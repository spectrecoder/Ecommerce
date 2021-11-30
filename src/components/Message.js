import React, {useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {showMessage,hideMessage} from '../slices/messSlice'

export default function Message() {
    const mess = useSelector(showMessage)
    const dispatch = useDispatch()

    useEffect(()=>{
        const timer = setTimeout(() => {
            dispatch(hideMessage())
        },1500)

        return ()=>{
            clearTimeout(timer)
        }
    },[mess])

    return (
        <div className={`message ${mess.class}`}>
            <h3>{mess.message}</h3>
            <i className="far fa-check-circle"></i>
        </div>
    )
}