import React, { useState } from "react";
import Login from "./Login";
import MessagingFeature from "./MessagingFeature";

function App() {
  const [userData,setUserData] = useState(null)
  return userData == null ? <Login setUserData={setUserData} /> : <MessagingFeature />;
}

export default App;
