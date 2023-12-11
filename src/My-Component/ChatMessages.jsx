import React from "react";
import {Chats} from "./Chats";
import {HeaderChat} from "./HeaderChat";
import MessagingFeatureForm from "../MessagingFeatureForm";
export function ChatMessages({userData}){
    return(
        <div className='chatMessages bg-light '>
            <HeaderChat />
            <Chats />
            <MessagingFeatureForm userData={userData} />
        </div>
    )
}