import React from 'react'
<<<<<<< HEAD
import ConverstionDate from './ConverstionDate';
import MessagingFeatureForm from './MessagingFeatureForm'
import { Sidebar } from './My-Component/Sidebar'



=======
import {ChatPage} from "./Pages/ChatPage";
import {MessagingNavbar} from "./My-Component/MessagingNavbar";
>>>>>>> main
export default function MessagingFeature({userData}) {

  return (
    <div>
<<<<<<< HEAD
      <MessagingFeatureForm userData={userData} />
      <Sidebar {...userData}/>
  
=======
        <MessagingNavbar {...userData}/>
        <ChatPage userData={userData}/>
>>>>>>> main
    </div>
  )
}
