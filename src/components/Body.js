import React from 'react';
import ChooseColor from './ChooseColor'
import ChoosePicture from './ChoosePicture'
import ColorScheme from './ColorScheme'
import './Body.css';

function Body() {

  return (
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
    </div >
  )

}

export default Body;