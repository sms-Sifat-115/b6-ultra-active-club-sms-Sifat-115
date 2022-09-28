import React from 'react';
import favicon from '../../Resources/favicon.ico'
import './Header.css'


const Header = () => {
    return (
        <div className='header'>
            <div className='brand'>
                <img src= {favicon} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                <p><i>Body Master </i></p>
            </div>
            <div>
                <a href="">Home</a>
                <a href="">About</a>
                <a href="">Blogs</a>
                <a href="">Contacts</a>
            </div>
        </div>
    );
};

export default Header;