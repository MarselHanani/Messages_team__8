import {  onValue, ref } from 'firebase/database';
import React, {  useState } from 'react'
import { db } from './config';
import "firebase/database";

function Serch(theuser){
const[inputname,setname]=useState('');
const uname=ref(db,`users/`);
let names=[];
 onValue(uname,(snapshot)=>{
const data=snapshot.val();

/*const filteredData = Object.entries(data)
  .filter(([name, user]) => name.startsWith(inputname));to show the object     */ 
   names = Object.entries(data)//to show name only
  .filter(([name, user]) => name.startsWith(inputname))
  .map(([name]) => name);

})

return(
<>
<div class="input-group mb-3" style={{width: "300px"}}>
<input type="text" class="form-control" placeholder="Search for chats" aria-label="Recipient's username" aria-describedby="button-addon2"
value={inputname}    onChange={(e)=>{setname(e.target.value)}}/>
</div>
<div className="search-results">
{names.map((name) => (
  <span key={name}>{name} <br/></span>
))}
</div>


</>
);

}
export default Serch;
