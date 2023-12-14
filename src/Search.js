import {  onValue, ref } from 'firebase/database';
import React, {  useState } from 'react'
import { db } from './config';
import "firebase/database";




function isfound(foundValue){
if(foundValue=='true')
 return console.log('found');
else{
  return  console.log('not found');
    }
}
function Serch(theuser){


    const[inputname,setname]=useState('');
const uname=ref(db,`users/`);
let   objectArray;
 onValue(uname,(snapshot)=>{
const data=snapshot.val();
objectArray = Object.entries(data).map(([key, user]) => ({ ...user, name: key }));

})




const handelserch=()=>{
    let hasFound='false';
  
    for(let key in objectArray )
    {
      if(inputname==objectArray[key].name )
      {
     
     
      
for(let key2 in theuser.chats)
{
  for(let key3 in theuser.chats){
if(objectArray[key].chats[key3]==theuser.chats[key2])
{

 hasFound='true';
 break;
}

}
}

        
      }

    }












isfound(hasFound);

}


return(<div class="input-group mb-3" style={{width: "300px"}}>
<input type="text" class="form-control" placeholder="Search for chats" aria-label="Recipient's username" aria-describedby="button-addon2"
value={inputname}    onChange={(e)=>{setname(e.target.value)}}/>
<button class="btn btn-outline-secondary" type="button" id="button-addon2"onClick={handelserch}>
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg>

</button>
</div>)

}
export default Serch;