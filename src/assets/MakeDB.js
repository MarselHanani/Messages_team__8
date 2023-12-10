//DON'T USE THIS FILE UNLESS U WANT TO WRITE THE DATABASE
//THIS FILE WRITES A STATIC DATABASE FOR TEAM-8 MEMBERS
//WHEN U RENDER THIS FILE U'LL RETURN THE DATABASE TO ITS ORIGINAL STATE (WITHOUT ANY MESSAGES)

import React, { useEffect } from "react";
import { db } from "../config";
import { ref, set } from "firebase/database";

export default function MakeDB() {
  function writeUserData(userId, name, imageUrl, chats) {
    set(ref(db, `users/${userId}`), {
      name: name,
      imageUrl: imageUrl,
      chats: chats,
    });
  }

  function writeChatData(chatId, user1, user2) {
    set(ref(db, `chats/${chatId}`), {
      users: [user1, user2],
      messages: [],
    });
  }
  useEffect(() => {
    writeChatData(0, "yahya", "marsel");
    writeChatData(1, "yahya", "omar");
    writeChatData(2, "yahya", "bisan");
    writeChatData(3, "yahya", "rama");
    writeChatData(4, "marsel", "omar");
    writeChatData(5, "marsel", "bisan");
    writeChatData(6, "marsel", "rama");
    writeChatData(7, "omar", "bisan");
    writeChatData(8, "omar", "rama");
    writeChatData(9, "bisan", "rama");
    writeUserData("yahya", "yahya", "imageUrl", [0, 1, 2, 3]);
    writeUserData("marsel", "marsel", "imageUrl", [0, 4, 5, 6]);
    writeUserData("omar", "omar", "imageUrl", [1, 4, 7, 8]);
    writeUserData("bisan", "bisan", "imageUrl", [2, 5, 7, 9]);
    writeUserData("rama", "rama", "imageUrl", [3, 6, 8, 9]);
  }, []);
  return <div></div>;
}
