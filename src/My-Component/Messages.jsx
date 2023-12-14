import {Message} from "./Message";
import {onValue, ref} from "firebase/database";
import {db} from "../config";
import {useReducer, useRef, useState} from "react";
export function Messages({chats , userData }) {
    const [otherUser, setOtherUser] = useState({});
    let isOhter = useRef(true)
  return (
      <div className='messages d-flex flex-column'>
          { chats.map((value) => {
              if(value.sender === userData.name){
                  return(
                      <Message message={value} userData={userData} key={value.message}/>
                  )
              }
              else {
                  if(isOhter.current)
                  if(value.sender !== userData.name){
                      onValue(ref(db, `users/${value.sender}`), (snapshot) => {
                          if (snapshot.exists()) {
                              setOtherUser(snapshot.val())
                              isOhter.current = false
                          }
                      });}
                  return(
                      <Message message={value} userData={userData} key={value.message} otherUser={otherUser}/>
                  )
              }
      })}
      </div>
)
}