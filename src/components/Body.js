import React from 'react';
import ChooseColor from './ChooseColor'
import ChoosePicture from './ChoosePicture'
import ColorScheme from './ColorScheme'

function Body() {

  return(
    <div>
      <h3>Body goes here</h3>
      <ChooseColor />
      <ChoosePicture />
      <ColorScheme />
    </div>
  )

}

export default Body;