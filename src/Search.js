import { onValue, ref } from 'firebase/database';
import React, { useState } from 'react';
import { db } from './config';
import "firebase/database";
import"./My-Component/ListOfUsers.css"


function Serch({ usersChats, setDisplayedChat }) {
  const [inputName, setInputName] = useState('');
  const userNameRef = ref(db, `users/`);
  let filteredUserChats = [];

  onValue(userNameRef, (snapshot) => {
    const data = snapshot.val();
    const filteredNames = Object.entries(data)
      .filter(([name, user]) => name.includes(inputName))
      .map(([name]) => name);

    filteredUserChats = usersChats.filter((userChat) =>
      filteredNames.includes(userChat.user.name)
    );
  });

  return (
    <>
      <div className="input-group mb-3" style={{ width: "300px" }}>
        <input
          type="text"
          className="form-control"
          placeholder="Search for chats"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          value={inputName}
          onChange={(e) => setInputName(e.target.value)}
        />
      </div>
      <div className="search-results">
        {filteredUserChats.map((userChat) => (
          <button
            key={userChat.chatId}
            className="user-chat-btn"
            onClick={() => setDisplayedChat(userChat)}
          >
            <img
              src={userChat.user.imageUrl}
              style={{ width: "50px" }}
              alt=""
            />
            <p>{userChat.user.name}</p>
          </button>
        ))}
      </div>
    </>
  );
}

export default Serch;
