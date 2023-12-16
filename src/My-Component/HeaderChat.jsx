import {useEffect, useState} from "react";
import {child, get, onValue, ref, remove} from "firebase/database";
import {db} from "../config";
import Swal from "sweetalert2";

export function HeaderChat({ userData, chatId }) {
    const [showDropdown, setShowDropdown] = useState(false);
    const [otherUser, setOtherUser] = useState('');

    useEffect(() => {
        const dbRef = ref(db);
        get(child(dbRef,`chats/${chatId}/users`)).then(snapshot => {
            const users = snapshot.val()
            return users[0] !== userData.name ? users[0] : users[1]
        }).then((user) => {
            onValue(ref(db, `users/${user}`), snapshot => {
                if(snapshot.exists()){
                    setOtherUser(snapshot.val())
                }else{
                    console.log(snapshot.val())
                }
            })
        })
    }, [chatId, userData.name])
    
    function handleDropDownClick() {
        setShowDropdown(!showDropdown);
    }

    function handleDropDownClose() {
        setShowDropdown(false);
    }

    function handleDeleteChat() {
        const chatRef = ref(db, `chats/${chatId}/messages`);
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, delete it!",
            cancelButtonText: "No, cancel!",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                remove(chatRef).then(() => {});
                swalWithBootstrapButtons.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                }).then(() =>{});
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Cancelled",
                    text: "Your imaginary file is safe :)",
                    icon: "error"
                }).then(() => {});
            }
        });
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
                            className="dropdown dropdown-menu-dark p-0 position-absolute position start-25"
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
