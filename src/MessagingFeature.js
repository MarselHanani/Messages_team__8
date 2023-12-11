import React from 'react'
import MessagingFeatureForm from './MessagingFeatureForm'

export default function MessagingFeature({userData}) {
  return (
    <div>
      <MessagingFeatureForm userData={userData} />
    </div>
  )
}
