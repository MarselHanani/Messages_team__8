import React from 'react'


export function TimeMessage(timeValue){//the new message time

  const dat = new Date(timeValue.tr);
    
    const hour = dat.getHours();
    const minutes = dat.getMinutes();
     return(<div >
        <span>{hour}:{minutes}</span>
        </div>)
   
      
      

  

}