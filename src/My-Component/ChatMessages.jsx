import React, { useRef } from "react";
import Chat from "./Chat";
import {HeaderChat} from "./HeaderChat";
import MessagingFeatureForm from "../MessagingFeatureForm";

export function ChatMessages({userData, chatId = 0}){
    const scrollDiv = useRef();
    return (
      <div className="chatMessages bg-light ">
        <HeaderChat userData={userData} chatId={chatId} />
        <Chat userData={userData} chatId={chatId} ref={scrollDiv} />

        <MessagingFeatureForm
          userData={userData}
          chatId={chatId}
          scrollDiv={scrollDiv}
        />
        
      </div>
    );
}