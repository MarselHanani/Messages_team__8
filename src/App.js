import React, { useState } from "react";
import Login from "./Login";
import MessagingFeature from "./MessagingFeature";
import Bell_notification from "./components/Bell_notification";
import Navebar_all_page_chat from "./components/Navebar_all_page_chat";
function App() {
  const [userData,setUserData] = useState(null)
  
  return(<> {userData == null ?<Login setUserData={setUserData} /> : <Navebar_all_page_chat {...userData}/>}
  
  </>);
}

export default App;
