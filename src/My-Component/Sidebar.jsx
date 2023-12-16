import { serverTimestamp } from "firebase/database"
import Serch from "../Search"
export function Sidebar(userdata) {
    console.log(serverTimestamp().value);
    return (
        <div className='sidebar bg-light'><h1>Sidebar</h1>
        <Serch {...userdata} />
       
        </div>
    )
}