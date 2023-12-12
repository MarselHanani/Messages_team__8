import React from 'react'
import MessagingFeatureForm from './MessagingFeatureForm'
import { Sidebar } from './My-Component/Sidebar'

export default function MessagingFeature({userData}) {
  return (
    <div>
      <MessagingFeatureForm userData={userData} />
      <Sidebar {...userData}/>
      
    </div>
  )
}
