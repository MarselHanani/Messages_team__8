import React, { useRef } from "react";
import Chat from "./Chat";
import {HeaderChat} from "./HeaderChat";
import MessagingFeatureForm from "../MessagingFeatureForm";

export function ChatMessages({ userData, chatId, otherUser }) {
  const scrollDiv = useRef();
  return (
    <div className="chatMessages bg-light ">
      <HeaderChat userData={userData} chatId={chatId} otherUser={otherUser} />
      <Chat
        userData={userData}
        chatId={chatId}
        ref={scrollDiv}
        otherUser={otherUser}
      />

      <MessagingFeatureForm
        userData={userData}
        chatId={chatId}
        scrollDiv={scrollDiv}
      />
    </div>
  );
}