import React, { useState,useEffect } from 'react'

export function DateMessage(timeValue){
 const[st,setst]=useState(" ");
let key;
let prevMasseg;

for( key in timeValue.prev )
{
prevMasseg=(timeValue.prev[key]?.time)
}
prevMasseg=timeValue.prev[key-1]?.time;
const formatedprev=new Date(prevMasseg);
let pre=formatedprev.toDateString();
const formatreddate = new Date(timeValue?.time);
    const styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      };
   let DisplaydDate=formatreddate.toDateString();


   


        useEffect(() => {
        
if(!prevMasseg)
{
    setst(DisplaydDate)
}

             else if (DisplaydDate != pre) {
       
          setst(DisplaydDate);
          
   
          
        }
       
        else  {
          
            setst(" ");
            }      
      }, [st]);
        return(<div style={styles}>
        <span>{st}</span>
        </div>)
   
      
     

  

}