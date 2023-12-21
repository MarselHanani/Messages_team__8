import Search from "../Search";
import "./ListOfUsers.css"
export default function MessagingListOfUsers({
  showList,
  usersChats,
  setDisplayedChat,
  handleShowList
}) {
  return (
    <div className={`{ sidebar bg-light pt-5 border-end border border-2 border-secondary-light
     ${showList ? "display-block" : "display-none"} }`}>
      <h3>
        Active Chats{" "}
        <span style={{ color: "black", backgroundColor: "#198754" }}>
          {usersChats.length}
        </span>
      </h3>
      <Search {...{usersChats,setDisplayedChat,showList,handleShowList}} />
  
    </div>
  );
}
