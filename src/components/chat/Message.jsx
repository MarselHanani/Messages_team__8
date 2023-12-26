import React from "react";
import { TimeMessage } from "./MessageTime";
export function Message({ message, userData, otherUser }) {
  const x=message.time;
  const styles = {
    display: "flex",
    justifyContent: "right",
    alignItems: "right",
  };
  function ownerMessage() {
    return (
      <>
      <div className="d-flex gap-3 flex-row-reverse m-2 ">
        <div className=" ms-2 mt-2-5 d-flex flex-column">
          <img
            src={`${userData.imageUrl}`}
            className="image"
            alt=""
          />
          <span className="fs-8 ">{message.sender}</span>
        </div>
        <div className="ms-1 ">
          <p className="mt-1 message-owner mx-mx-content">{message.message}</p>
        </div>
      </div>
      <div style={styles}>
      <TimeMessage tr={x}/>

      </div>
      </>
    );
  }
  function otherMessage() {
    const styles2 = {
      display: "flex",
      justifyContent: "left",
      alignItems: "left",
    };
    return (
      <>
      <div className="d-flex gap-3 m-2">
        <div className=" ms-2 mt-1 d-flex flex-column align-items-start ">
          <img
            src={`${otherUser.imageUrl}`}
            className="image"
            alt=""
          />
          <span className="fs-8 ">{message.sender}</span>
        </div>
        <div className="ms-1 ">
          <p className="mt-1 message-other mx-mx-content">{message.message}</p>
        </div>
      </div>
           <div style={styles2}>
           <TimeMessage tr={x}/>
     
           </div>
           </>
    );
  }
  return (
    <>{message.sender === userData.name ? ownerMessage() : otherMessage()}</>
  );
}
