import { child, get, ref, set } from "firebase/database";
import React, { useState } from "react";
import { db } from "./config";

export default function MessagingFeatureForm({ userData, chatId = 1 }) {
  const [message, setMessage] = useState("");
  function sendMessage(e) {  //maybe change the function after we progress the project 
    const dbRef = ref(db);
    e.preventDefault();
    get(child(dbRef, `chats/${chatId}/messages`)).then(snapshot => {
        const messagesLength = snapshot.exists() ? snapshot.val().length : 0;
        set(ref(db, `chats/${chatId}/messages/${messagesLength}`), {
          sender: userData.name,
          message: message,
        });
        setMessage("");
    })
  }
  return (
    <form action="">
      <input
        placeholder="Type a message"
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button>
        <i class="fa-solid fa-face-smile"></i>
      </button>
      <button>
        <i class="fa-solid fa-paperclip"></i>
      </button>
      <button onClick={(e) => {sendMessage(e)}}>
        <i class="fa-solid fa-paper-plane"></i>
      </button>
    </form>
  );
}
