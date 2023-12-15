import {Messages} from "./Messages";
export function Chat({userData , chats}) {

    return (
        <div className='bg-light h-78 border-1 border-bottom border-secondary-light'>
            <Messages chats={chats} userData={userData}/>
        </div>
    )
}