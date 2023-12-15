import Messages from "./Messages";
import {forwardRef, useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {db} from "../config";

export default forwardRef(function Chat({chatId, userData},refer) {
    const [chats, setChats] = useState([]);
    useEffect(() => {
        onValue(ref(db, `chats/${chatId}/messages`), (snapshot) => {
            const data = snapshot.val();
            setChats(data);
        })
    },[chatId]);
    return (
      <div className="bg-light h-78 border-1 border-bottom border-secondary-light">
        <Messages chats={chats} userData={userData} ref={refer}  />
      </div>
    );
})