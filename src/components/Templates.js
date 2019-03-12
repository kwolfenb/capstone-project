import React from 'react';
import {   BrowserRouter as Router, Route,  Link } from 'react-router-dom';

function Templates() {

    return (
        <div className='templates'>
            <h2>Sample Templates</h2>
            <div className='templatesGrid'>
            <div>
                <h2><Link to='/template1'>Template 1</Link></h2>
            </div>
            <div>
                <h2 onClick={ () => alert('under construction')}>Template 2</h2>
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