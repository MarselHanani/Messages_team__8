import Search from "../Search";
import "./ListOfUsers.css"
export default function MessagingListOfUsers({
  userdata,
  usersChats,
  setDisplayedChat
}) {
  return (
    <div className="sidebar bg-light pt-5">
      <h3>
        Active Chats{" "}
        <span style={{ color: "black", backgroundColor: "#198754" }}>
          {usersChats.length}
        </span>
      </h3>
      <Search {...{usersChats,setDisplayedChat}} />
      
  
    </div>
  );
}
