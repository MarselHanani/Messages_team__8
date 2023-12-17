import Search from "../Search";
import "./ListOfUsers.css"
export default function MessagingListOfUsers({
  userdata,
  usersChats,
  setDisplayedChat,
}) {
  return (
    <div className="sidebar bg-light pt-5">
      <h3>
        Active Chats{" "}
        <span style={{ color: "black", backgroundColor: "#198754" }}>
          {usersChats.length}
        </span>
      </h3>
      <Search {...userdata} />
      <div>
        {usersChats.map((userchat) => (
          <button
            key={userchat.chatId}
            className="user-chat-btn"
            onClick={() => setDisplayedChat(userchat)}
          >
            <img
              src={userchat.user.imageUrl}
              style={{ width: "50px" }}
              alt=""
            />
            <p>{userchat.user.name}</p>
          </button>
        ))}
      </div>
    </div>
  );
}
