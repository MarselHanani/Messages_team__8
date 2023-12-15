import { forwardRef } from "react";
import { Message } from "./Message";
export default forwardRef(function Messages({ chats, userData },ref) {
  return (
    <div className="messages d-flex flex-column">
      {chats.map((value) => {
        return (
          <Message message={value} userData={userData} />
        );
      })}
      <div ref={ref}></div>
    </div>
  );
})
