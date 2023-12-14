import React from 'react'
import MessagingFeatureForm from './MessagingFeatureForm'
import { Sidebar } from './My-Component/Sidebar'
import { MessagingNavbar } from './My-Component/MessagingNavbar'

export default function MessagingFeature({userData}) {
  return (
    <div>
    <MessagingNavbar {...userData}/>
      <MessagingFeatureForm userData={userData} />
      <Sidebar {...userData}/>
      
    </div>
  )
}
