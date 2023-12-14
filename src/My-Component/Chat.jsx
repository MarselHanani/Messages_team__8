import {Messages} from "./Messages";
import {useEffect, useState} from "react";
import {onValue, ref} from "firebase/database";
import {db} from "../config";
export function Chat({chat_id = 0, userData}) {
    const [chats, setChats] = useState([]);
    const[otherUser, setOtherUser] = useState({});
    useEffect(() => {
        onValue(ref(db, `chats/${chat_id}/messages`), (snapshot) => {
            const data = snapshot.val();
            setChats(data);
        })
    },[]);
    return (
        <div className='bg-light h-78 border-1 border-bottom border-secondary-light'>
            <Messages chats={chats} userData={userData}/>
        </div>
    )
}