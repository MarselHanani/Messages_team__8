import { child, get, ref, set } from "firebase/database";
import React, { useState } from "react";
import { db } from "./config";
import EmojiPicker from "emoji-picker-react";
import "./messagingForm.css"

export default function MessagingFeatureForm({ userData, chatId = 0 }) {
  const [message, setMessage] = useState("");
  const [showPicker,setShowPicker] = useState(false)
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
  function onEmojiClick(emojiObject,e){
    e.preventDefault()
    setMessage(prev => prev + emojiObject.emoji)
    setShowPicker(false)
  }
  return (
    <div className="d-flex flex-column form">
      <form
        onSubmit={(e) => e.preventDefault()}
        className="d-flex gap-2 m-2 mt-5 "
        action=""
      >
        <input
          placeholder="Type a message"
          className="form-control"
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <div>
          <button className="btn btn-danger" onClick={() => setShowPicker(prev => !prev)}>
            <i className="fa-solid fa-face-smile"></i>
          </button>
        </div>

        <button className="btn btn-secondary">
          <i className="fa-solid fa-paperclip"></i>
        </button>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            if (message) {
              sendMessage(e);
            }
          }}
        >
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </form>
      {showPicker && <EmojiPicker width={"100%"} height={"400px"} onEmojiClick={onEmojiClick} />}
    </div>
  );
}
