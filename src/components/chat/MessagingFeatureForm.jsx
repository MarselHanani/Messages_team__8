import { child, get, ref, set } from "firebase/database";
import React, { useState } from "react";
import { db } from "../../assets/config";
import EmojiPicker from "emoji-picker-react";
import "./messagingForm.css";

export default function MessagingFeatureForm({
  userData,
  chatId = 0,
  scrollDiv,
}) {
  const [message, setMessage] = useState("");
  const [showPicker, setShowPicker] = useState(false);
  function sendMessage(e) {
    if (message.trim() !== "") {
      const dbRef = ref(db);
      e.preventDefault();
      get(child(dbRef, `chats/${chatId}/messages`)).then((snapshot) => {
        const messagesLength = snapshot.exists() ? snapshot.val().length : 0;
        set(ref(db, `chats/${chatId}/messages/${messagesLength}`), {
          sender: userData.name,
          message: message,
          time: new Date(Date.now()).toString(),
        }).then(() => {
          scrollDiv.current.scrollIntoView({
            behavior: "smooth",
            block: "end",
          });
        });
        setMessage("");
      });
    }
  }
  function onEmojiClick(emojiObject, e) {
    setMessage((prev) => prev + emojiObject.emoji);
    setShowPicker(false);
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
          onKeyDown={(e) => e.key === "Enter" && sendMessage(e)}
        />
        <div>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => setShowPicker((prev) => !prev)}
          >
            <i className="fa-solid fa-face-smile"></i>
          </button>
        </div>

        <button className="btn btn-secondary">
          <i className="fa-solid fa-paperclip"></i>
        </button>
        <button
          className="btn btn-primary"
          onClick={(e) => {
            sendMessage(e);
          }}
        >
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </form>
      {showPicker && (
        <div className="position-absolute position postition-emoji">
          <EmojiPicker
            width={"100%"}
            height={"400px"}
            onEmojiClick={onEmojiClick}
          />
        </div>
      )}
    </div>
  );
}
