import React, { useState,useEffect } from 'react'
import { db } from '../config';
import { ref,onValue } from 'firebase/database';

export function DateMessage(timeValue){//the new message time

    let x=timeValue;
    const [date,setdate]=useState('0');
    const[st,setst]=useState();
    console.log(x.time);

    useEffect(() => {
        if (x.time != date) {
          setdate(x.time);
          setst(x.time);
          
          console.log(st);
          console.log(x.time != date);
          console.log(x.time);
          
        }
        
        else {
          setst(" ");
        }      

      }, [timeValue, date,x.time,st]);
     console.log(st);
     console.log(x.time);

const styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      };

/* console.log(timeValue)
      let messageTimes=[];
     const uname=ref(db,`chats/`);

     let   objectArray;
     onValue(uname,(snapshot)=>{
         const data=snapshot.val();
         objectArray = Object.entries(data).map(([key, user]) => ({ ...user, name: key }));
     })
      console.log(objectArray);
*/
//let meassageDate=timeValue
     return(<div style={styles}>
        <span>{date}</span>
        </div>)
   
      
      

  

}