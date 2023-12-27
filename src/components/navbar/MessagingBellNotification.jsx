import React, { useState, useEffect } from "react";
import audio from "../../assets/livechat-129007.mp3";
import { db } from "../../assets/config";
import { ref, onValue } from "firebase/database";
function MessagingBellNotification({ userlogin, chatIdchat }) {
  const databaseRef = ref(db, `chats/${chatIdchat}/messages`);
  const userforthischat = ref(db, `chats/${chatIdchat}/users/`);
  const [PreviousLength, setPreviousLength] = useState(0);
  const [chatid, setchatid] = useState(-1);
  const [isFirstRender, setisFirstRender] = useState(true);
  let user;

  if (chatid != chatIdchat) {
    setPreviousLength(0);
    setchatid(chatIdchat);
    setisFirstRender(true);
  }

  onValue(userforthischat, (snapshot) => {
    if (snapshot.exists()) {
      const value = snapshot.val();
      user = value;
    }
  });

  const [imgbell, setimgbell] = useState("https://i.ibb.co/T8XVXzV/bell1.png");

  useEffect(() => {
    onValue(databaseRef, (snapshot1) => {
      const value = snapshot1.val();

      if (value !== null && Array.isArray(value)) {
        const currentLength = value.length;

        if (
          currentLength != PreviousLength &&
          isFirstRender != true &&
          value[value.length - 1].sender != userlogin.name &&
          (userlogin.name == user?.[0] || userlogin.name == user?.[1])
        ) {
          let pretime = new Date(value[value.length - 2].time);
          let newtimeM = new Date(value[value.length - 1].time);

          setimgbell("https://i.ibb.co/10k581W/bell2.png");

          if (Math.floor(newtimeM - pretime) >= 1000) {
            new Audio(audio).play();
          }
          setTimeout(function () {
            setimgbell("https://i.ibb.co/T8XVXzV/bell1.png");
          }, 5000);
          // this code will run after 5 seconds
        } else {
          if (isFirstRender) {
            setisFirstRender(false);
          }

          setTimeout(function () {
            setimgbell("https://i.ibb.co/T8XVXzV/bell1.png");
          }, 5000);
          // this code will run after 5 seconds
        }
        setPreviousLength(currentLength);
      }
    });
  }, [databaseRef, PreviousLength, imgbell, isFirstRender]);

  return (
    <>
      <img
        className="navbar-brand"
        src={imgbell}
        width="30"
        height="40"
        alt=""
      />
    </>
  );
}

export default MessagingBellNotification;
