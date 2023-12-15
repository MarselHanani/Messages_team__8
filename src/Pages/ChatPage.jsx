import React from "react";
import {ChatMessages} from '../My-Component/ChatMessages'
import {Sidebar} from "../My-Component/Sidebar";
export function ChatPage({userData}) {

    return (
        <div className='Home'>
        <div className='container d-flex'>
            <Sidebar {...userData}/>
            <ChatMessages userData={userData}/>
        </div>
        </div>
    )
}