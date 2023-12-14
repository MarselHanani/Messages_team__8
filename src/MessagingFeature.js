import React from 'react'
import MessagingFeatureForm from './MessagingFeatureForm'
import { Sidebar } from './My-Component/Sidebar'
import { Navbar } from './My-Component/Navbar'

export default function MessagingFeature({userData}) {
  return (
    <div>
    <Navbar {...userData}/>
      <MessagingFeatureForm userData={userData} />
      <Sidebar {...userData}/>
      
    </div>
  )
}
