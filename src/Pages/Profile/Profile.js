import React from 'react';
import './Profile.css';
import { Link } from 'react-router-dom';
import testImg from '../../img/test.jpg'

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
                <div className="profile-home">
                    <div className="blog-card">
                        <p className="timeago">2 days ago</p>
                        
                        <p className="card-title">Lorem Ipsum</p>

                        <div className="card-body">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero in commodi necessitatibus omnis. Voluptatum tenetur obcaecati quidem qui nesciunt provident unde, nihil quaerat? Iusto illum omnis quae nisi amet voluptate.
                            Provident, magnam eveniet error repellendus beatae sapiente amet optio odio repudiandae totam animi, sunt reiciendis, officia nobis aliquam ad libero! Recusandae laboriosam quibusdam dolorem nostrum a saepe est, ab non.
                            Libero ullam vel alias laboriosam eum cupiditate? Magnam, corporis aliquam possimus laudantium, blanditiis dolores perspiciatis repellendus enim, vero consequatur ipsa inventore? Reprehenderit nisi amet quam perferendis animi obcaecati magni quibusdam.
                            Odio deserunt reprehenderit distinctio sint aliquam quam perferendis molestiae tempore laboriosam itaque similique quibusdam esse molestias atque, obcaecati velit in cupiditate doloremque. Maiores, distinctio expedita! Corrupti odio similique ab maiores!
                            Corporis expedita, eum quidem perspiciatis, fugit magni, a officiis ratione aut nostrum eius mollitia nihil nobis impedit inventore! Libero dicta ex soluta quia! Ducimus sunt quis fugit molestias, cumque nemo?
                        </div>

                        <div className="card-footer">
                            <p className="timetoread">5 minutes to read</p>
                            <span className='mdi mdi-bookmark'></span>
                        </div>
                        
                        <img src={testImg} alt="" srcset="" />
                    </div>

                    <div className="blog-card">
                        <p className="timeago">2 days ago</p>
                        
                        <p className="card-title">Lorem Ipsum</p>

                        <div className="card-body">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero in commodi necessitatibus omnis. Voluptatum tenetur obcaecati quidem qui nesciunt provident unde, nihil quaerat? Iusto illum omnis quae nisi amet voluptate.
                            Provident, magnam eveniet error repellendus beatae sapiente amet optio odio repudiandae totam animi, sunt reiciendis, officia nobis aliquam ad libero! Recusandae laboriosam quibusdam dolorem nostrum a saepe est, ab non.
                            Libero ullam vel alias laboriosam eum cupiditate? Magnam, corporis aliquam possimus laudantium, blanditiis dolores perspiciatis repellendus enim, vero consequatur ipsa inventore? Reprehenderit nisi amet quam perferendis animi obcaecati magni quibusdam.
                            Odio deserunt reprehenderit distinctio sint aliquam quam perferendis molestiae tempore laboriosam itaque similique quibusdam esse molestias atque, obcaecati velit in cupiditate doloremque. Maiores, distinctio expedita! Corrupti odio similique ab maiores!
                            Corporis expedita, eum quidem perspiciatis, fugit magni, a officiis ratione aut nostrum eius mollitia nihil nobis impedit inventore! Libero dicta ex soluta quia! Ducimus sunt quis fugit molestias, cumque nemo?
                        </div>

                        <div className="card-footer">
                            <p className="timetoread">5 minutes to read</p>
                            <span className='mdi mdi-bookmark'></span>
                        </div>
                        
                        <img src={testImg} alt="" srcset="" />
                    </div>

                    <div className="blog-card">
                        <p className="timeago">2 days ago</p>
                        
                        <p className="card-title">Lorem Ipsum</p>

                        <div className="card-body">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero in commodi necessitatibus omnis. Voluptatum tenetur obcaecati quidem qui nesciunt provident unde, nihil quaerat? Iusto illum omnis quae nisi amet voluptate.
                            Provident, magnam eveniet error repellendus beatae sapiente amet optio odio repudiandae totam animi, sunt reiciendis, officia nobis aliquam ad libero! Recusandae laboriosam quibusdam dolorem nostrum a saepe est, ab non.
                            Libero ullam vel alias laboriosam eum cupiditate? Magnam, corporis aliquam possimus laudantium, blanditiis dolores perspiciatis repellendus enim, vero consequatur ipsa inventore? Reprehenderit nisi amet quam perferendis animi obcaecati magni quibusdam.
                            Odio deserunt reprehenderit distinctio sint aliquam quam perferendis molestiae tempore laboriosam itaque similique quibusdam esse molestias atque, obcaecati velit in cupiditate doloremque. Maiores, distinctio expedita! Corrupti odio similique ab maiores!
                            Corporis expedita, eum quidem perspiciatis, fugit magni, a officiis ratione aut nostrum eius mollitia nihil nobis impedit inventore! Libero dicta ex soluta quia! Ducimus sunt quis fugit molestias, cumque nemo?
                        </div>

                        <div className="card-footer">
                            <p className="timetoread">5 minutes to read</p>
                            <span className='mdi mdi-bookmark'></span>
                        </div>
                        
                        <img src={testImg} alt="" srcset="" />
                    </div>
                </div>
            </div>
            <div className="profile-info">
                info
            </div>
        </div>
    </div>
  )
}

export default Profile