import Serch from "../Search"
export function Sidebar(userdata) {
    return (
        <div className='sidebar bg-light'><h1>Sidebar</h1>
            <Serch {...userdata} />
        </div>
    )
}