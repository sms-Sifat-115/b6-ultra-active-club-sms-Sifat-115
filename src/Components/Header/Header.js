import React from 'react';
import favicon from '../../Resources/favicon.ico'
import './Header.css'


const Header = () => {
    return (
        <div className='header'>
            <div className='brand'>
                <img src= {favicon} alt="" width="30" height="24"/>
                <p><i>Body Master </i></p>
            </div>
            <div>
                <a href="/home">Home</a>
                <a href="/about">About</a>
                <a href="/blogs">Blogs</a>
                <a href="/contacts">Contacts</a>
            </div>
        </div>
    );
};

export default Header;