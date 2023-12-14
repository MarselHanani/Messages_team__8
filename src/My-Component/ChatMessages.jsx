import React from "react";
import {Chat} from "./Chat";
import {HeaderChat} from "./HeaderChat";
import MessagingFeatureForm from "../MessagingFeatureForm";
export function ChatMessages({userData}){
    return(
        <div className='chatMessages bg-light '>
            <HeaderChat userData={userData} />
            <Chat userData={userData}/>
            <MessagingFeatureForm userData={userData} />
        </div>
    )
}