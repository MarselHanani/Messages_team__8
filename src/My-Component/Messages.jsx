import { forwardRef } from "react";
import { Message } from "./Message";
export default forwardRef(function Messages({ chats, userData },ref) {
  return (
    <div className="messages d-flex flex-column">
      {chats ? chats.map((value) => {
        return (
          <Message message={value} userData={userData} />
        );
      }) : <h2 style={{textAlign: "center"}}>you have no messages with this user <br></br> say Hi!</h2>}
      <div ref={ref}></div>
    </div>
  );
})
