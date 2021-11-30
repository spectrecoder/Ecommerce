import React,{useState} from 'react'
import ContactInfo from './ContactInfo'
import {collection, addDoc, db} from '../firebase'
import { useDispatch } from 'react-redux'
import {msg} from '../slices/messSlice'

export default function ContactMe() {
    const collectionRef = collection(db, 'contact')
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    function setInput(e){
        let name = e.target.name
        let value = e.target.value
        setUserData(state=>({...state, [name]:value}))
    }
     
    async function handleClick(e){
        e.preventDefault()
        const res = await addDoc(collectionRef, userData)
        if(res){
            setUserData({
                name: "",
                email: "",
                subject: "",
                message: ""
            })
            dispatch(msg({class: 'active', message:'successfully sent'}))
        }else{
            dispatch(msg({class: 'active', message:'failed to sent'}))
        }
    }

    return (
        <div className="contactMe">
            <div className="leftSide">
                <h1 className="contactHeading">Contact Me</h1>
                <ContactInfo icon="far fa-map" header="address" text1="Fornbacken 71, 134 56 Södertälje Stockholm"/>
                <div className="divider"></div>
                <ContactInfo icon="fas fa-phone" header=" Phone" text1="Mobile: (08) 123 456 789" text2="Hotline: 1009 678 456"/>
                <div className="divider"></div>
                <ContactInfo icon="fas fa-envelope-open-text" header="Email" text1="yourmail@domain.com" text2="support@hastech.company"/>
            </div>

            <form className="rightSide">
                <h1 className="contactHeading">Tell Me Your Message</h1>
                <div className="box">
                    <label htmlFor="name">your name</label>
                    <input type="text" id="name" className="input" required onChange={setInput} name="name" value={userData.name}/>
                </div>
                <div className="box">
                    <label htmlFor="email">your email</label>
                    <input type="email" id="email" className="input" required onChange={setInput} name="email" value={userData.email}/>
                </div>
                <div className="box">
                    <label htmlFor="subject">subject</label>
                    <input type="text" id="subject" className="input" required onChange={setInput} name="subject" value={userData.subject}/>
                </div>
                <div className="box">
                    <label htmlFor="msg">your message</label>
                    <textarea id="msg" className="input" required onChange={setInput} name="message" value={userData.message}/>
                </div>
                <input type="submit" value="SEND" className="submit" onClick={handleClick}/>
            </form>
        </div>
    )
}
