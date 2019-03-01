import React, { Component } from 'react';
import './Header.css';

function Header() {
    return (
        <div className='header'>
            <h1>Colors Web App</h1>
            <div className='headerButtons'>
                <div>
                    <h6>Home</h6>
                </div>
                <div>
                    <h6>Random Color Scheme</h6>
                </div>
                <div>
                    <h6>About</h6>
                </div>
            </div>
        </div>

    );

}

export default Header;