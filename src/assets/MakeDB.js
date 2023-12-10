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
    writeUserData(
      "yahya",
      "yahya",
      "https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/347407153_294391069680811_7067768593276187616_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=bPgrKFEbIhIAX9MLZwr&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfAT7KFnVfItnQ7_brOHP8_hOb2mrmJn9UhRJIgJwo4pCw&oe=6579A69B",
      [0, 1, 2, 3]
    );
    writeUserData(
      "marsel",
      "marsel",
      "https://scontent.fjrs27-1.fna.fbcdn.net/v/t39.30808-6/321341825_550926246886199_1756010698932698148_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=efb6e6&_nc_ohc=T_6SE8XgPzoAX9UzMxr&_nc_ht=scontent.fjrs27-1.fna&oh=00_AfB_c_Uw_D9c4tg3VlLcvlkmGYQkGhtr4mI0Jq65_FFbwQ&oe=6579F95A",
      [0, 4, 5, 6]
    );
    writeUserData(
      "omar",
      "omar",
      "https://ca.slack-edge.com/T04NGLH3UJV-U0677DT57AN-ae1cc8d8e0e0-512",
      [1, 4, 7, 8]
    );
    writeUserData(
      "bisan",
      "bisan",
      "https://ca.slack-edge.com/T04NGLH3UJV-U05UN73N6TC-a30acb8fce89-512",
      [2, 5, 7, 9]
    );
    writeUserData(
      "rama",
      "rama",
      "https://ca.slack-edge.com/T04NGLH3UJV-U05V0MV06EM-gd72483c7276-512",
      [3, 6, 8, 9]
    );
  }, []);
  return <div></div>;
}
