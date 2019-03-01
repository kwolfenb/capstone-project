import React from 'react';
import ChooseColor from './ChooseColor';
import ChoosePicture from './ChoosePicture';
import ColorScheme from './ColorScheme';
import Template1 from './Template1';
import Template2 from './Template2';
import './Body.css';
import { Switch, Route, withRouter } from 'react-router-dom';

function Body() {

  return (
    <div>
      <div>

        <div className='bodyRow'>
          <div className='bodyCol'>
            <ChooseColor />
          </div>
          <div className='bodyCol'>
            <ChoosePicture />
          </div>
        </div>
        <ColorScheme />
      </div>
      <div>
        <Template1 />
        <Template2 />
      </div>
    </div >
  )

}

export default Body;