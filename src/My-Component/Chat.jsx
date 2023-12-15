import Messages from "./Messages";
import {forwardRef, useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {db} from "../config";
export default forwardRef(function Chat({chat_id, userData},refer) {
    const [chats, setChats] = useState([]);
    useEffect(() => {
        onValue(ref(db, `chats/${chat_id}/messages`), (snapshot) => {
            const data = snapshot.val();
            setChats(data);
        })
    },[]);
    return (
      <div className="bg-light h-78 border-1 border-bottom border-secondary-light">
        <Messages chats={chats} userData={userData} ref={refer}  />
      </div>
    );
})