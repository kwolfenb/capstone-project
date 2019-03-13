import React from 'react';
import Header from './Header';
import ChooseColor from './ChooseColor';
import ChoosePicture from './ChoosePicture';
import ColorScheme from './ColorScheme';
import Templates from './Templates';
import './styles/Body.css';
import { Switch, Route, withRouter } from 'react-router-dom';

import { colorPicker } from './../actions/jscolor.js';


class Body extends React.Component {

  componentWillMount() {
    colorPicker();
  }

  render() {
  
  return (
    <div>
      <Header />
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
        <Templates />
      </div>
    </div >
  )

}
}

export default Body;