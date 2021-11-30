import React, {useCallback, useRef, useEffect} from 'react'
import PhoneCart from './PhoneCart'
import {cartItems} from '../slices/cartSlice'
import {useSelector} from 'react-redux'

export default function Information() {
    const items = useSelector(cartItems)

    useEffect(()=>{
        document.addEventListener('DOMContentLoaded', ()=>{
            const menu = document.getElementById('bar')
            const navbar = document.querySelector('.navbar')
            const searchBtn = document.getElementById('search')
            const searchBar = document.querySelector('[data-search]')

            window.addEventListener('scroll',()=>{
                navbar.classList.remove('active')
                searchBar.classList.remove('active')
            })

            menu.addEventListener('click',()=>{
                navbar.classList.toggle('active')
                searchBar.classList.remove('active')
            })

            searchBtn.addEventListener('click',()=>{
                navbar.classList.remove('active')
                searchBar.classList.toggle('active')
            })
        })
    },[])

    const totalItems = useCallback(()=>{
        const obj = Object.entries(items)
        let sum = 0
        let price = 0
        for(let i of obj){
            sum += i[1].amount
            price += i[1].price
        }
        return [price, sum]
    }, [items])

    return (
        <div className="information">
            <PhoneCart className="phone" iconName="fas fa-headphones" text1="phone" text2="+ 012-345-678-90 "/>
            <form data-search>
                <input type="text" placeholder="search your results"/>
                <div className="fas fa-search"></div>
            </form>
            <PhoneCart className="cart" cart iconName="fas fa-shopping-bag" text1="Shopping Cart" text2={`${totalItems()[1]} items - $${totalItems()[0]}.00`}/>
            <div className="menuIcons">
                <div id="search" className="fas fa-search"></div>
                <div id="bar" className="fas fa-bars"></div>
            </div>
        </div>
    )
}
