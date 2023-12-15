import React, {useEffect, useState} from "react";
import {Chat} from "./Chat";
import {HeaderChat} from "./HeaderChat";
import MessagingFeatureForm from "../MessagingFeatureForm";
import {onValue, ref} from "firebase/database";
import {db} from "../config";
export function ChatMessages({chat_id = 0,userData}){
    const [chats, setChats] = useState([]);
    useEffect(() => {
        onValue(ref(db, `chats/${chat_id}/messages`), (snapshot) => {
            const data = snapshot.val();
            if(data) setChats(data);
        })
    },[]);
    return(
        <div className='chatMessages bg-light '>
            <HeaderChat userData={userData} chat_id={chat_id} chats={chats}/>
            <Chat userData={userData} chat_id={chat_id} chats={chats}/>
            <MessagingFeatureForm userData={userData} />
        </div>
    )
}