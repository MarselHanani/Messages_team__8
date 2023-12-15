import React, {useRef, useState} from 'react'
import {onValue, ref} from "firebase/database";
import {db} from "../config";
export function Message({message , userData}) {
    const [otherUser, setOtherUser] = useState({});
    let isOhter = useRef(true)
    if(isOhter.current)
        if(message.sender !== userData.name){
            onValue(ref(db, `users/${message.sender}`), (snapshot) => {
                if (snapshot.exists()) {
                    setOtherUser(snapshot.val())
                    isOhter.current = false
                }
            });}
    function ownerMessage(){
        return (
            <div className='d-flex gap-3 flex-row-reverse m-2 '>

                <div className=' ms-2 mt-2-5 d-flex flex-column'>
                    <img src={`${userData.imageUrl}`} className='image' alt='there is no picture'/>
                    <span className='fs-8 '>{message.sender}</span>
                </div>
                <div className='ms-1 '>
                    <p className='mt-1 message-owner mx-mx-content'>{message.message}</p>
                </div>
            </div>
        )
    }
    function otherMessage(){
        return (
            <div className='d-flex gap-3 m-2'>

                <div className=' ms-2 mt-1 d-flex flex-column align-items-start '>
                    <img src={`${otherUser.imageUrl}`} className='image' alt='there is no picture'/>
                    <span className='fs-8 '>{message.sender}</span>
                </div>
                <div className='ms-1 '>
                    <p className='mt-1 message-other mx-mx-content'>{message.message}</p>
                </div>
            </div>
        )
    }
    return(
        <>
            {message.sender === userData.name ? ownerMessage() : otherMessage()}</>
    )
  }
