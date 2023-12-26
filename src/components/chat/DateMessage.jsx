import React from 'react'

export function DateMessage(timeValue){

  
    const styles = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      };

   return(<div style={styles}>
        
        <span>  { <span>{timeValue.date}</span>}</span>
        </div>)
   


     







}