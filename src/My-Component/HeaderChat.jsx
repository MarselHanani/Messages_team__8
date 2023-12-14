export function HeaderChat({userData}) {
    return (
        <div className='h-15 d-flex align-items-center justify-content-between border-1
        border-bottom border-secondary-light'>
            <div className='left-side d-flex align-items-center media'>
                <img src={`${userData.imageUrl}`}
                     className='w-7 mt-2 ms-2 border-radius-50 '/>
                <h4 className='ms-2 pt-2'>{userData.name}</h4>
            </div>
            <div className='row w-media m-media'>
                <div className='col-4 col-md-3 col-sm-1 m-media-right'>
                    <i className="fa-solid fa-phone me-2 bg-circle text-center pt-2 m-media-right"></i>
                </div>
                <div className='col-4 col-md-3 col-sm-1 m-media-right'>
                    <i className="fa-solid fa-video me-2 bg-circle text-center pt-2 m-media-right"></i>
                </div>
                <div className='col-4 col-md-3 col-sm-1 m-media-right-5'>
                    <i className="fa-solid fa-ellipsis-vertical me-2 bg-circle text-center pt-2"></i>
                </div>
            </div>
        </div>
    )
}
