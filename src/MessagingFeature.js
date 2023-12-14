import React from 'react'
import {ChatPage} from "./Pages/ChatPage";
import {MessagingNavbar} from "./My-Component/MessagingNavbar";
export default function MessagingFeature({userData}) {
  return (
    <div>
        <MessagingNavbar {...userData}/>
        <ChatPage userData={userData}/>
    </div>
  )
}
