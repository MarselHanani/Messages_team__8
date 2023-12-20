import React, { useEffect, useState } from "react";
import { db } from "./config";
import { ref, onValue, query, limitToLast } from "firebase/database";

export default function LastMessage({ chatId }) {
  const [lastMessage, setLastMessage] = useState("");

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
    <div>
      {lastMessage && (
        <p>
          Last message from {lastMessage.sender}: {lastMessage.message}
        </p>
      )}
    </div>
  );
}
