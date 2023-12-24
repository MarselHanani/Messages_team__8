import React from "react";

export function Message({ message, userData, otherUser }) {
  function ownerMessage() {
    return (
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
    );
  }
  function otherMessage() {
    return (
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
    );
  }
  return (
    <>{message.sender === userData.name ? ownerMessage() : otherMessage()}</>
  );
}
