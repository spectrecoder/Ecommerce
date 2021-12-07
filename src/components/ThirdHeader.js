import React, {useEffect, useRef} from 'react'
import {Link} from 'react-router-dom'
import Navbar from './Navbar'

export default function ThirdHeader() {
    const headerRef = useRef()
    const thirdNav = useRef()

    function clickMenu(){
        thirdNav.current.classList.toggle('active')
    }

    useEffect(()=>{
        const header = headerRef.current
        const navBar = thirdNav.current
        window.addEventListener('scroll', ()=>{
            if(window.scrollY > 350){
                header.classList.add('fixedHeader')
            }else{
                header.classList.remove('fixedHeader')
            }
            navBar.classList.remove('active')
        })

        return ()=>{
            window.removeEventListener('scroll', ()=>{
                if(window.scrollY > 350){
                    header.classList.add('fixedHeader')
                }else{
                    header.classList.remove('fixedHeader')
                }
                navBar.classList.remove('active')
            })
        }
      },[])

    return (
        <section className= "thirdHeader" ref={headerRef}>
            <div className="logo">
                 {/* <Link to="/" className="logoName">sunny<i className="fas fa-leaf"></i></Link> */}
                 <Link to="/" className="logoName"><img src="images/cartlogo.png" alt="cart logo"/></Link>
            </div>
            <div className="menuIcons">
                <div id="bar" className="fas fa-bars" onClick={clickMenu}></div>
            </div>
            <Navbar reference={thirdNav}/>
        </section>
    )
}
