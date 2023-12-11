import React, { useState } from "react";
import Login from "./Login";
import MessagingFeature from "./MessagingFeature";
import {ChatMessages} from "./My-Component/ChatMessages";
import {ChatPage} from "./Pages/ChatPage";

function App() {
  const [userData,setUserData] = useState(null)
  return(
      <>
{/*
        {userData == null ? <Login setUserData={setUserData} /> : <ChatMessages userData={userData} />}
*/}
          <ChatPage />
      </>
  )
}

export default App;
