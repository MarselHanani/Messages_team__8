import { forwardRef } from "react";
import { Message } from "./Message";
import { DateMessage } from "./DateMessage";
export default forwardRef(function Messages({ chats, userData, otherUser },ref) 
{
 
    return (
    <div className="messages d-flex flex-column">
   
      {chats ? (
        chats.map((value) => {
    
   
          return (
            <>
             <DateMessage time={value.time} prev={chats} /> 
            <Message
              message={value}
              userData={userData}
              otherUser={otherUser}
              {...value.time}
            />
               
            </>
          );
    
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
