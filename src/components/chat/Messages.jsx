import { forwardRef } from "react";
import { Message } from "./Message";
import { DateMessage } from "./DateMessage";
export default forwardRef(function Messages(
  { chats, userData, otherUser },
  ref
) {
let groups;
if(chats)
{   groups = chats.reduce((groups, chat) => {
   let chatDate=new Date(chat.time);
    const date = chatDate.toDateString();
    
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(chat);
    return groups;
  }, {});
}
  return (
    <div className="messages d-flex flex-column">
      {chats ? (
    Object.entries(groups).map(([key,messages])=>{
      return(
     <div>
        <DateMessage date={key} />
 {  <div>
      {
      messages.map((value) => {
      
        return (
     
         
          <Message
            message={value}
            userData={userData}
            otherUser={otherUser}
          />
       
        );
      })
    }</div>}
    </div>
      )
    })
 
      ) : (
        <h2 style={{ textAlign: "center" }}>
          you have no messages with this user <br></br> say Hi!
        </h2>
      )}
      <div ref={ref}></div>
    </div>
  );
});
