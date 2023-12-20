import React from 'react'
import {ChatPage} from "./Pages/ChatPage";
import {MessagingNavbar} from "./My-Component/MessagingNavbar";
export default function MessagingFeature({userData}) {

  return (
    <div>
        
        <ChatPage userData={userData}/>
    </div>
  )
}
