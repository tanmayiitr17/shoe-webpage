import React from 'react'
import { images } from './constant/index';
import Search from './Search';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faUser, faHeart, faCartShopping, faAnglesDown, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    return (
        <div className='nav'>
            <div className='nav_logo'>
                <img src={images.logomilanese} alt='logo' />
            </div>
            <div className='nav_list'>
                <ul>
                    <li>Home</li>
                    <li>Collections</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className='nav_search'>
                <Search />
            </div>
            <div className='nav_icons'>
                <ul>
                    <li><FontAwesomeIcon icon={faUser} /></li>
                    <li><FontAwesomeIcon icon={faHeart} /></li>
                    <li><FontAwesomeIcon icon={faCartShopping} /></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar
