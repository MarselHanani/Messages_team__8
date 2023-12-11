import React from "react";
import {ChatMessages} from '../My-Component/ChatMessages'
import {Sidebar} from "../My-Component/Sidebar";
export function ChatPage() {
    return (
        <div className='Home'>
        <div className='container d-flex'>
            <Sidebar />
            <ChatMessages />
        </div>
        </div>
    )
}