import React, { useEffect, useState } from "react";
import { ChatMessages } from "../My-Component/ChatMessages";
import {MessagingNavbar} from "../My-Component/MessagingNavbar.jsx";
import MessagingListOfUsers from "../My-Component/MessagingListOfUsers";
import { child, get, onValue, ref } from "firebase/database";
import { db } from "../config";
export function ChatPage({ userData }) {
  const [usersChats, setUsersChats] = useState([]);
  const [displayedChat, setDisplayedChat] = useState(usersChats[0])

  useEffect(() => {
    const userChatsIds = userData.chats;

    get(child(ref(db), `chats`)).then((snapshot) => {
      const chats = snapshot.val();
      const usersChatsArray = [];

      chats.forEach((chat, chatId) => {
        if (userChatsIds.includes(chatId)) {
          const otherUser =
            chat.users[0] !== userData.name ? chat.users[0] : chat.users[1];
          onValue(ref(db, `users/${otherUser}`), (snapshot) => {
            const user = snapshot.val();
            usersChatsArray.push({chatId,user:{
                name: user.name,
                imageUrl: user.imageUrl
            }})
          });
        }
      });
      setUsersChats(usersChatsArray);
      setDisplayedChat(usersChatsArray[0]);
    });
  }, [userData.name, userData.chats]);
  console.log(displayedChat)
  return (<div>
    <MessagingNavbar useimg={userData} chatId={displayedChat?.chatId}/>
    <div className="Home">
      <div className="container d-flex">
        <MessagingListOfUsers userData={userData} usersChats={usersChats} setDisplayedChat={setDisplayedChat} />
        {displayedChat && <ChatMessages userData={userData} chatId={displayedChat.chatId} otherUser={displayedChat.user}/> }
      </div>
    </div></div>
  );
}
