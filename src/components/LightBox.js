import React, {useState, useRef, useEffect} from 'react'
import {setting3} from "./settings"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import LightCard from './LightCard'
import data from './data'
import {useDispatch, useSelector} from 'react-redux'
import {addCart} from '../slices/cartSlice'
import {msg} from '../slices/messSlice'
import { item, hideItem } from '../slices/showSlice'
import ShareIcons from './ShareIcons'

export default function LightBox() {
    const [amount, setAmount] = useState(1)
    const dispatch = useDispatch()
    const lightBox = useRef()
    const close = useRef()
    const product = useSelector(item)

    useEffect(()=>{
        const node = lightBox.current
        const closeBtn = close.current
        let curr = null
        node.addEventListener('click', (e)=>{
            curr = e.target
            if(curr.classList.contains('lightBox')){
                setAmount(1)
                dispatch(hideItem())
            }
        })
        closeBtn.addEventListener('click', ()=>{
            dispatch(hideItem())
        })

        return ()=>{
            node.removeEventListener('click', (e)=>{
                if(curr.classList.contains('lightBox')){
                    setAmount(1)
                    dispatch(hideItem())
                }
            })
            closeBtn.removeEventListener('click', ()=>{
                dispatch(hideItem())
            })
        }
    },[dispatch])

    function increment(){
        if(amount === 10){
            return
        }
        setAmount(state => state + 1)
    }

    function decrement(){
        if(amount === 1){
            return
        }
        setAmount(state => state - 1)
    }

    function cartClick(){
        dispatch(addCart({id: product.id, amount}))
        dispatch(hideItem())
        dispatch(msg({class: 'active', message: 'successfully added to cart'}))
        setAmount(1)
    }
    return (
        <div ref={lightBox} className={`lightBox ${product.active}`}>
            <div className="box">
                <i className="fas fa-times close" ref={close}></i>
                <div className="imageSection">
                    <div className="image">
                        <img src={`images/${product.image && product.image}.png`} alt="images" />
                    </div>
                    <div className="sliders">
                        <Slider {...setting3}>
                            {
                                data.map(({image, sale, price, category, id}) => (<LightCard key={id} image={image} sale={sale} price={price} category={category} id={id}/>))
                            }
                        </Slider>
                    </div>
                </div>

                <div className="content">
                    <h2>Kaoreet lobortis sagittis laoreet</h2>
                    <div className="price">{product.sale && <span>{`$${product.sale}`}</span>} {`$${product.price && product.price}`}</div>
                    <div className="divider"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco,Proin lectus ipsum, gravida et mattis vulputate, tristique ut lectus</p>
                    <div className="divider"></div>

                    <div className="cart">
                        {/* ------ */}
                        <div className="total">
                            <div className="amount">{amount}</div>
                            <div className="buttons">
                                <div onClick={increment}>+</div>
                                <div onClick={decrement}>-</div>
                            </div>
                        </div>
                        {/* -------- */}
                        <div className="addCart" onClick={cartClick}><i className="fas fa-shopping-cart"></i>add to cart</div>
                    </div>

                    <h3>share this product</h3>
                    <ShareIcons/>
                </div>

            </div>
        </div>
    )
}
