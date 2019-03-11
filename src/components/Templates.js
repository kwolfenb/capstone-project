import React from 'react';
import {   BrowserRouter as Router, Route,  Link } from 'react-router-dom';

function Templates() {

    return (
        <div className='templates'>
            <h2><Link to='/template1'>Template 1</Link></h2>
            <h2 onClick={ () => alert('under construction')}>Template 2</h2>
        </div>
    )
}

export default Templates;