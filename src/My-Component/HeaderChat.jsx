export function HeaderChat() {
    return (
        <div className='h-15 d-flex align-items-center justify-content-between border-1
        border-bottom border-secondary-light'>
            <div className='left-side d-flex align-items-center'>
                <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png'
                     className='w-7 mt-2 ms-2'/>
                <h4 className='ms-2'>Marsel</h4>
            </div>
            <div className='right-side me-4 position-relative'>
                <i className="fa-solid fa-phone me-2 bg-circle text-center pt-2 "></i>
                <i className="fa-solid fa-video me-2 bg-circle text-center pt-2 "></i>
                <i className="fa-solid fa-ellipsis-vertical bg-circle text-center pt-2 "></i>
            </div>
        </div>
    )
}
