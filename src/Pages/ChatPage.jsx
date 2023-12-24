import React, { useEffect, useState } from "react";
import { ChatMessages } from "../My-Component/ChatMessages";
import { MessagingNavbar } from "../My-Component/MessagingNavbar.jsx";
import MessagingListOfUsers from "../My-Component/MessagingListOfUsers";
import { child, get, ref } from "firebase/database";
import { db } from "../config";
export function ChatPage({ userData }) {
  const [usersChats, setUsersChats] = useState([]);
  const [displayedChat, setDisplayedChat] = useState(usersChats[0]);
  const [showList, setShowList] = useState(true);
  useEffect(() => {
    const userChatsIds = userData.chats;

    get(child(ref(db), `chats`))
      .then((snapshot) => {
        const chats = snapshot.val();

        const usersChatsPromises = [];

        chats.forEach((chat, chatId) => {
          if (userChatsIds.includes(chatId)) {
            const otherUser =
              chat.users[0] !== userData.name ? chat.users[0] : chat.users[1];

            const userPromise = get(ref(db, `users/${otherUser}`)).then(
              (snapshot) => {
                const user = snapshot.val();
                return {
                  chatId,
                  user: {
                    name: user.name,
                    imageUrl: user.imageUrl,
                  },
                };
              }
            );
            usersChatsPromises.push(userPromise);
          }
        });
        return Promise.all(usersChatsPromises);
      })
      .then((usersChatsArray) => {
        setUsersChats(usersChatsArray);
        setDisplayedChat(usersChatsArray[0]);
      });
  }, [userData.name, userData.chats]);
  function handleShowList() {
    setShowList(!showList);
  }
  return (
    <div>
      <MessagingNavbar
        useimg={userData}
        chatId={displayedChat?.chatId}
        handleShowList={handleShowList}
      />
      <div className="Home">
        <div className="container d-flex">
          <MessagingListOfUsers
            userData={userData}
            usersChats={usersChats}
            setDisplayedChat={setDisplayedChat}
            showList={showList}
            handleShowList={handleShowList}
          />
          {displayedChat && (
            <ChatMessages
              userData={userData}
              chatId={displayedChat.chatId}
              otherUser={displayedChat.user}
              showList={showList}
            />
          )}
        </div>
      </div>
    </div>
  );
}
