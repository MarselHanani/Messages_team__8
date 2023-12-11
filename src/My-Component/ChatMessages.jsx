import React from "react";
import {Chats} from "./Chats";
import {HeaderChat} from "./HeaderChat";
import {FormChat} from "./FormChat";
export function ChatMessages(){
    return(
        <div className='chatMessages bg-light '>
            <HeaderChat />
            <Chats />
            <FormChat/>
        </div>
    )
}