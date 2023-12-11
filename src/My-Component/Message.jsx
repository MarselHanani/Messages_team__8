export function Message() {
    return (
        <div className='d-flex gap-3 flex-row-reverse m-2 '>
            <div className=' ms-2 mt-2-5 d-flex flex-column'>
                <img src='https://cdn-icons-png.flaticon.com/512/149/149071.png' className='image'/>
                <span className='fs-8 '>just now</span>

            </div>
            <div className='ms-1 mt-1 '>
                <p className='mt-1 fs-5 message-text mx-mx-content'>hello</p>
            </div>
        </div>
    )
}