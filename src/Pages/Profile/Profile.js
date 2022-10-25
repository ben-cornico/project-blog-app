import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div className='profile'>
        <div className="profile-container">
            <div className="sidebar">
                <ul className="navbar">
                    <li className="navbar-item">
                        <Link to="/" className='navbar-link'>
                            <span className='mdi mdi-home'></span>
                        </Link>
                    </li>

                    <li className="navbar-item">
                        <Link to="/" className='navbar-link'>
                            <span className='mdi mdi-bell'></span>
                        </Link>
                    </li>



                    <li className="navbar-item">
                        <Link to="/" className='navbar-link'>
                            <span className='mdi mdi-post-outline'></span>
                        </Link>
                    </li>

                    <li className="navbar-item">
                        <Link to="/" className='navbar-link'>
                            <span className='mdi mdi-bookmark-multiple'></span>
                        </Link>
                    </li>

                    <li className="navbar-item">
                        <Link to="/" className='navbar-link'>
                            <span className='mdi mdi-pencil-box'></span>
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="main">
                MAIN
            </div>
            <div className="profile-info">
                info
            </div>
        </div>
    </div>
  )
}

export default Profile