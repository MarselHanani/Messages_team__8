import React, { useState } from "react";
import Login from "./components/Login";
import { ChatPage } from "./Pages/ChatPage";
function App() {
  const [userData, setUserData] = useState(null);
  return !userData ? (
    <Login setUserData={setUserData} />
  ) : (
    <ChatPage userData={userData} />
  );
}

export default App;
