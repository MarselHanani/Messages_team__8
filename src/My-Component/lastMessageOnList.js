import React, { useEffect, useState } from "react";
import { db } from "./config";
import { ref, onValue, query, limitToLast } from "firebase/database";

export default function LastMessage({ chatId }) {
  const [lastMessage, setLastMessage] = useState({ sender: "", message: "" });

  useEffect(() => {
    const lastMessageRef = query(ref(db, `chats/${chatId}/messages`), limitToLast(1));

    const unsubscribe = onValue(lastMessageRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const lastKey = Object.keys(data)[0];
        setLastMessage({
          sender: data[lastKey].sender,
          message: data[lastKey].message,
        });
      } else {
        setLastMessage({ sender: "", message: "No messages found." });
      }
    });

    return () => unsubscribe();
  }, [chatId]);

  return (
    <div className="user-message">
      <div className="user-name">{chatId}</div>
      {lastMessage.message && (
        <div className="last-message">
          <span className="message-sender">{lastMessage.sender}: </span>
          <span className="message-content">{lastMessage.message}</span>
        </div>
      )}
    </div>
    
  );

    
}
