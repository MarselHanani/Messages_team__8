import React from 'react'
import MessagingFeatureForm from './MessagingFeatureForm'
import {ChatPage} from "./Pages/ChatPage";

export default function MessagingFeature({userData}) {
  return (
    <div>
      {/*<MessagingFeatureForm userData={userData} />*/}
        <ChatPage userData={userData}/>
    </div>
  )
}
