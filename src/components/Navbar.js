import React from 'react'
import {Link} from 'react-router-dom'

export default function Navbar({reference}) {
    return (
        <nav ref={reference} className="navbar">

        <div className="home-n active menuDiv">
            home 
            <i className="fas fa-angle-down"></i>
            <div className="subMenu1 subMenu">
                <a href="#">home shop 1</a>
                <a href="#">home shop 2</a>
                <a href="#">home shop 3</a>
                <a href="#">home shop 4</a>
                <a href="#">home shop 5</a>
                <a href="#">home shop 6</a>
            </div>
        </div>

        <div className="shop menuDiv">shop <i className="fas fa-angle-down"></i>
            <div className="subMenu2 subMenu">

                <div className="shop-grid">shop grid <i className="fas fa-angle-right"></i>
                    <div className="megaMenu grid">
                        <a href="#">shop 1</a>
                        <a href="#">shop 2</a>
                        <a href="#">shop 3</a>
                        <a href="#">shop 4</a>
                    </div>
                </div>

                <div className="shop-list">shop list <i className="fas fa-angle-right"></i>
                    <div className="megaMenu list">
                        <a href="#">shop list 1</a>
                        <a href="#">shop list 2</a>
                        <a href="#">shop list 3</a>
                    </div>
                </div>

                <div className="shop-products">shop products <i className="fas fa-angle-right"></i>
                    <div className="megaMenu products">
                        <a href="#">shop products 1</a>
                        <a href="#">shop products 2</a>
                        <a href="#">shop products 3</a>
                        <a href="#">shop products 4</a>
                        <a href="#">shop products 5</a>
                        <a href="#">shop products 6</a>
                        <a href="#">shop products 7</a>
                        <a href="#">shop products 8</a>
                        <a href="#">shop products 9</a>
                        <a href="#">shop products 10</a>
                    </div>
                </div>
            </div>
        </div>

        <div className="pages menuDiv">pages <i className="fas fa-angle-down"></i>
            <div className="subMenu3 subMenu">
                <div className="column1">
                    <a href="#">column 1</a>
                    <a href="#">column 2</a>
                    <a href="#">column 3</a>
                    <a href="#">column 4</a>
                </div>
                <div className="column2">
                    <a href="#">column 1</a>
                    <a href="#">column 2</a>
                    <a href="#">column 3</a>
                    <a href="#">column 4</a>
                </div>
                <div className="column3">
                    <a href="#">column 1</a>
                    <a href="#">column 2</a>
                    <a href="#">column 3</a>
                </div>
            </div>
        </div>
        <div className="blog menuDiv">blog <i className="fas fa-angle-down"></i>
            <div className="subMenu4 subMenu">
                <a href="#">home shop 1</a>
                <a href="#">home shop 2</a>
                <a href="#">home shop 3</a>
                <a href="#">home shop 4</a>
                <a href="#">home shop 5</a>
                <a href="#">home shop 7</a>
                <a href="#">home shop 8</a>
                <a href="#">home shop 9</a>
                <a href="#">home shop 10</a>
            </div>
        </div>
        <Link to="/contact"><div className="contact menuDiv">contact</div></Link>
    </nav>
    )
}
