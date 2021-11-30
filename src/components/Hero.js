import React, {useRef, useState, useEffect} from 'react'

const images = ['bg', 'bg1']

export default function Hero() {
    const [image, setImage] = useState(0);

    const h1 = useRef(null)
    const h2 = useRef(null)
    const p1 = useRef(null)
    const p2 = useRef(null)
    const p3 = useRef(null)
    const btn = useRef(null)
    const content = useRef(null)

    function removeAnimation(){
        h1.current.classList.remove('fromLeft')
        h2.current.classList.remove('fromLeft')
        p1.current.classList.remove('popUp')
        p2.current.classList.remove('popUp')
        p3.current.classList.remove('popUp')
        btn.current.classList.remove('fade')
        content.current.classList.add('up')
    }

    function addAnimation(){
        content.current.classList.remove('up')
        h1.current.classList.add('fromLeft')
        h2.current.classList.add('fromLeft')
        p1.current.classList.add('popUp')
        p2.current.classList.add('popUp')
        p3.current.classList.add('popUp')
        btn.current.classList.add('fade')
    }

    useEffect(()=>{
        const clear = setTimeout(()=>{
            removeAnimation()
            setTimeout(()=>{
                setImage(state => state===0?1:0)   
            },350)
        },15000)

        return ()=>{
            clearTimeout(clear)
        }
    },[image])

    useEffect(()=>{
        addAnimation()
    }, [image])
    
    function handleClick(e){
        if((e.target.classList.contains('0') && image === 1) || (e.target.classList.contains('1') && image === 0)){
            removeAnimation()
            setTimeout(()=>{
                setImage(state => state===0?1:0)
            }, 350)
        }else{
            return
        }
    }

    return (
        <div className="hero">
            <div className="content" ref={content}>
                <h1 style={{'--delay': '.3s'}} ref={h1}>
                    {image === 0 ? 'Fresh fruit & vegetable supplied' : 'Fresh meats & fresh fish supplied'}
                </h1>
                <h2 style={{'--delay': '1.5s'}} ref={h2}>up to <span>50% off</span></h2>
                <div className="icons">
                    <p style={{'--delay': '2.5s'}} ref={p1}><i className="fas fa-check"></i> SAVE UP TO 10%</p>
                    <p style={{'--delay': '3.5s'}} ref={p2}><i className="fas fa-check"></i> FREE SHIPPING</p>
                    <p style={{'--delay': '4.5s'}} ref={p3}><i className="fas fa-check"></i> RETURN IN 24 HOURS</p>
                </div>
                <a href="#"className="btn" style={{'--delay': '5.5s'}} ref={btn}>start at 9$</a>
            </div>
            <img src={`images/${images[image]}.png`} alt="image" />
            <div className="control">
                <span onClick={handleClick} className={`${image === 0?'active':''} 0`}></span>
                <span onClick={handleClick} className={`${image === 1?'active':''} 1`}></span>
            </div>
        </div>
    )
}
