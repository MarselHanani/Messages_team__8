import {Message} from "./Message";
export function Messages({chats , userData }) {

  return (
      <div className='messages d-flex flex-column'>
          { chats.map((value) => {
              if(value.sender === userData.name){
                  return(
                      <Message message={value} userData={userData} key={value.message}/>
                  )
              }
              else {
                  return(
                      <Message message={value} userData={userData} key={value.message}/>
                  )
              }
      })}
      </div>
)
}