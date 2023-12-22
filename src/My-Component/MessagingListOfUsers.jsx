import Search from "../Search";
import "./ListOfUsers.css"
export default function MessagingListOfUsers({
  showList,
  usersChats,
  setDisplayedChat,
  handleShowList
}) {
  return (
    <div className={`{ vh-100 vw-100 sidebar bg-light pt-5 border-end border-end border-1 overflow-hidden border-secondary-light
     ${showList ? "display-block" : "display-none"} }`}>
        <div className='border-bottom border-1 mb-3 active-chat-margin-top '>
      <h5 className='position'>
        Active Chats{" "}
        <span className='bg-success-light text-success pe-2 ps-2 border-radius '>
          {usersChats.length}
        </span>
      </h5>
        </div>
      <Search {...{usersChats,setDisplayedChat,showList,handleShowList}} />
  
    </div>
  );
}
