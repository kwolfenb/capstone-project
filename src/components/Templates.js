import React from 'react';
import {   BrowserRouter as Router, Route,  Link } from 'react-router-dom'



function Templates() {

    return (
        <div>
            <h2><Link to='/template1'>Template 1</Link></h2>
            <h2><Link to='/template2'>Template 2</Link></h2>
            

        </div>
    )
}

export default Templates;