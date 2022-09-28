import React from 'react';
import './Footer.css'
import favicon from '../../Resources/favicon.ico'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='brand'>
                <img src= {favicon} alt="" width="30" height="24" class="d-inline-block align-text-top"/>
                <p><i>Body Master </i></p>
            </div>
            <div>
                <h6>All Rights are Reserved to Body Master Pvt. LTD</h6>
                <p>Montana, USA || @2022</p>
            </div>
        </div>
    );
};

export default Footer;