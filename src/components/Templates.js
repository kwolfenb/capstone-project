import React from 'react';
import {   BrowserRouter as Router, Route,  Link } from 'react-router-dom';
import template1 from '../assets/images/template1.png';
import template2 from '../assets/images/template2.png';
import './styles/Templates.css';

function Templates() {

    return (
        <div className='templates'>
            <h2>Sample Templates</h2>
            <div className='templatesGrid'>
            <div>
                <Link to='/template1'>
                    <h2>Template 1</h2>
                    <img className='templateImg' src={template1} />
                    <p>Click to view</p>
                </Link>
            </div>
            <div>
                <Link to='/template2'>
                    <h2>Template 2</h2>
                    <img className='templateImg' src={template2} />
                    <p>Click to view</p>
                </Link>
            </div>
            <div className='templatePreview'>
            </div>
            <div className='templatePreview'>
            </div>
            </div>

        </div>
    )
}

export default Templates;