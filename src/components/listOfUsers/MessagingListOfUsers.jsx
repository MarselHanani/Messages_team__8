import { useState } from "react";
import "./ListOfUsers.css"
export default function MessagingListOfUsers({
  showList,
  usersChats,
  setDisplayedChat,
  handleShowList
}) {
  const [inputName, setInputName] = useState("");
  return (
    <div
      className={`{ vh-100 vw-100 sidebar bg-light pt-5 border-end border-end border-1 overflow-hidden border-secondary-light
     ${showList ? "display-block" : "display-none"} }`}
    >
      <div className="border-bottom border-1 mb-3 active-chat-margin-top ">
        <h5 className="position">
          Active Chats{" "}
          <span className="bg-success-light text-success pe-2 ps-2 border-radius ">
            {usersChats.length}
          </span>
        </h5>
      </div>
      <div className="input-group mb-3 w-95 m-auto">
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
      <div className="search-result w-95 m-auto">
        {usersChats.filter(userChat => userChat.user.name.includes(inputName)).map((userChat) => (
          <button
            key={userChat.chatId}
            className="user-chat-btn border-radius mb-2"
            onClick={() => {
              setDisplayedChat(userChat);
              handleShowList();
            }}
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
    </div>
  );
}
