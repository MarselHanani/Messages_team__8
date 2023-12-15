import {useEffect, useRef, useState} from "react";
import {onValue, ref, remove} from "firebase/database";
import {db} from "../config";

export function HeaderChat({ userData ,chats }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [otherUser, setOtherUser] = useState('');
    const [sender, setSender] = useState('');
    let isOhter = useRef(true)
    let isSender = useRef(true)
    useEffect(() => {
        if(isSender.current)
        chats.map((key) => {
            if(userData.name !== key.sender){
                if(isOhter.current)
                     onValue(ref(db , `users/${key.sender}`), (snapshot) => {
                     if (snapshot.exists()) {
                         setOtherUser(snapshot.val())
                         isOhter.current = false
                     }
            })
            }isSender.current = false
        })
    }, [chats]);
    function handleDropDownClick() {
        setShowDropdown(!showDropdown);
    }

    function handleDropDownClose() {
        setShowDropdown(false);
    }

    function handleDeleteChat() {
        const chatRef = ref(db, `chats/${0}`);
        remove(chatRef).then(()=> alert("Chat Deleted"));
    }

    return (
        <div
            className="h-15 d-flex align-items-center justify-content-between border-1 border-bottom border-secondary-light"
        >
            <div className="left-side d-flex align-items-center media">
                <img
                    src={`${otherUser.imageUrl}`}
                    className="w-7 mt-2 ms-2 border-radius-50"
                    alt="there is no image"
                />
                <h4 className="ms-2 pt-2">{otherUser.name}</h4>
            </div>
            <div className="row w-media m-media">
                <div className="col-4 col-md-3 col-sm-1 m-media-right">
                    <i
                        className="fa-solid fa-phone me-2 bg-circle text-center pt-2 m-media-right fs-5"
                    ></i>
                </div>
                <div className="col-4 col-md-3 col-sm-1 m-media-right">
                    <i
                        className="fa-solid fa-video me-2 bg-circle text-center pt-2 m-media-right fs-5"
                    ></i>
                </div>
                <div className="col-4 col-md-3 col-sm-1 m-media-right-5">
                    <i
                        onClick={handleDropDownClick}
                        className="fa-solid fa-ellipsis-vertical me-2 bg-circle text-center pt-2 fs-5"
                    ></i>
                    {showDropdown && (
                        <div className="-padding">
                            <div className='triangle'></div>
                        <div
                            className="dropdown dropdown-menu-dark p-0 position-absolute start-25"
                            onClick={handleDropDownClose}
                        >
                            <ul>
                                <li>
                                    <a href="#" onClick={handleDeleteChat}>
                                        delete chat
                                    </a>
                                </li>
                                <li>
                                    <a href="#">
                                        block user
                                    </a>
                                </li>
                            </ul>
                        </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
