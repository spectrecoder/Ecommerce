import React, {useState} from 'react'
import Heading from './Heading'

export default function Menu() {
    const [expand, setExpand] = useState(false)

    return (
        <div className="menu">
            <Heading icon="far fa-arrow-alt-circle-right" text="all categories"/>

            <div className="menus">
                <div className="m-menu">Vegetables</div>
                <div className="subMenu m-menu">Salad <i className="fas fa-angle-right"></i>
                    <div className="megaMenu">
                        <div>
                            <h3>Vegetables</h3>
                            <a href="#">Salad</a>
                            <a href="#">Fast Foods</a>
                            <a href="#">Peanuts</a>
                        </div>
                        <div>
                            <h3>Fast Foods</h3>
                            <a href="#">Salad</a>
                            <a href="#">Fast Foods</a>
                            <a href="#">Peanuts</a>
                        </div>
                        <div>
                            <h3>Salad</h3>
                            <a href="#">Salad</a>
                            <a href="#">Fast Foods</a>
                            <a href="#">Peanuts</a>
                        </div>
                    </div>
                </div>
                <div className="subMenu m-menu">Fast Foods <i className="fas fa-angle-right"></i> 
                <div className="megaMenu">
                        <div>
                            <h3>Vegetables</h3>
                            <a href="#">Salad</a>
                            <a href="#">Fast Foods</a>
                            <a href="#">Peanuts</a>
                            <a href="#">Peanuts</a>
                        </div>
                        <div>
                            <h3>Fast Foods</h3>
                            <a href="#">Salad</a>
                            <a href="#">Fast Foods</a>
                            <a href="#">Peanuts</a>
                            <a href="#">Peanuts</a>
                        </div>
                        <div>
                            <h3>Salad</h3>
                            <a href="#">Salad</a>
                            <a href="#">Fast Foods</a>
                            <a href="#">Peanuts</a>
                            <a href="#">Peanuts</a>
                        </div>
                    </div>
                </div>
                <div className="m-menu">Beans</div>
                <div className="m-menu">Bread</div>
                <div className="m-menu">Fish & Meats</div>
                <div className="m-menu">Peanuts</div>
                <div className="m-menu">Birds</div>
                {
                    expand && 
                    <>
                    <div key={1}  className="m-menu">Meats</div>
                    <div key={2}  className="m-menu">Fruits</div>
                    </>
                }
                <div className="more m-menu" onClick={()=>setExpand(state=>!state)}>
                    <i className={`${expand?'far fa-minus-square':'far fa-plus-square'}`}></i>
                    {`${expand?'Less Categories':'More Categories'}`}
                </div>
            </div>

        </div>
    )
}
