import React from 'react';
import Search from "../Search";
import "./ListOfUsers.css"
import './listOfUser2.css';
export default function MessagingListOfUsers( {
  userdata,
  usersChats,
  setDisplayedChat,
})

{
  
return (
  <div className="sidebar bg-light pt-5">
    <h3>Active Chats <span style={{ color: "black", backgroundColor: "#198754" }}>{usersChats.length}</span></h3>
    <Search usersChats={usersChats} setDisplayedChat={setDisplayedChat} />
    <div className="users-list">
      {usersChats.map((chat, index) => (
        <div key={index} className="user-item" onClick={() => setDisplayedChat(chat)}>
          {chat.userImage && <img src={chat.userImage} className="user-img" alt={`${chat.userName}`} />}
          <span className="user-name">{chat.userName}</span>
        </div>
      ))}
    </div>
  </div>
); 

}