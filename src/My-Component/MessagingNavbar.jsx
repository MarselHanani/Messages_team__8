import React from 'react'
import MessagingBellNotification from '../components/MessagingBellNotification';



import "firebase/database";


export function MessagingNavbar({useimg , chatId, handleShowList}){


    return (
        <nav  className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100
        border-bottom border-2 border-secondary-light">
            <div className="navbar-nav nav-fill w-100">
                <div  className="collapse navbar-collapse">

                    <img className="navbar-brand"
                         src="https://i.ibb.co/JBhg3zQ/Screenshot-2023-12-11-193717.png"
                         width="40" height="50"
                         alt=""
                         loading="lazy"
                         style={{marginLeft:'10rem'}}
                    />

                    <form className="nav-item">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{width: '15rem'}}/>

                    </form></div>
                <div className="d-flex">
                    <div className='nav-item'>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Demo</a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Demo</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">Demo</a></li>
                                        <li><a className="dropdown-item" href="#">Demo</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">pages</a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Home</a></li>
                                        <li><hr className="dropdown-divider" /></li>
                                        <li><a className="dropdown-item" href="#">page1</a></li>
                                        <li><a className="dropdown-item" href="#">page2</a></li>
                                    </ul>
                                </li>  <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Account</a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">My Account</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">yomrb</a></li>
                                    <li><a className="dropdown-item" href="#">Log out</a></li>
                                </ul>
                            </li>
                                <li className="nav-item"><a className="nav-link" aria-current="page" href="#">My Network</a></li>


                            </ul>

                        </div>
                    </div>
                    <div className='nav-item'  onClick={handleShowList}>
                        <img className="navbar-brand"
                             src="https://i.ibb.co/RHNY2Lt/Screenshot-2023-12-12-151443.png"
                             width="30" height="40"
                             alt=""
                             loading="lazy"
                             style={{ marginLeft: '1rem' , cursor:'pointer'}}
                        />
                        <img className="navbar-brand "
                             src="https://i.ibb.co/dc3M5Cm/Screenshot-2023-12-12-151708.png"
                             width="30" height="40"
                             alt=""
                             loading="lazy"
                        />
                        <MessagingBellNotification userlogin={useimg} chatIdchat={chatId}/>
                        <img className="navbar-brand"
                             src={useimg.imageUrl}
                             width="30" height="40"
                             alt=""
                             loading="lazy"
                             style={{marginRight:'2rem'}}
                        />

                    </div>
                </div>
            </div>
        </nav>



    );
}
