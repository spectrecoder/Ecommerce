import React from 'react'
import Information from './Information'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default function SecondHeader() {
    return (
        <div className="second-header">
            <div className="logo">
                <Link to="/" className="logoName">sunny<i className="fas fa-leaf"></i></Link>
            </div>

            <div className="content">
                <Information/>
                <Navbar/>
            </div>
        </div>
    )
}
