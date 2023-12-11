import { onValue, ref } from 'firebase/database';
import React, { useState } from 'react'
import { db } from './config';
import {ChatMessages, showMessages} from "./My-Component/ChatMessages";

export default function Login({setIsLoggedin,setUserData}) {
  const [myId,setMyId] = useState("yahya")
  const styles = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh"
  }
  function getUserData(){
    onValue(ref(db, `users/${myId}`), (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        setUserData(data);
          console.log(db.ref(`chats/${myId}`));
      }
    });
  }
  return (
    <div style={styles}>
      <select onChange={(e) => setMyId(e.target.value)} id="">
        <option value="yahya">yahya</option>
        <option value="marsel">marsel</option>
        <option value="omar">omar</option>
        <option value="bisan">bisan</option>
        <option value="rama">rama</option>
      </select>
      <button
        onClick={() => {
          getUserData()
        }}
      >
          login
      </button>
    </div>
  );
}
