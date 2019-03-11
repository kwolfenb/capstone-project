import React from 'react';
import './styles/ColorScheme.css'
import { connect } from 'react-redux';
import { setColorScheme } from './../actions';
import { randomColors } from './../actions';


const mapStateToProps = state => {
  return {
    state: state
  };
};




function ColorScheme(props) {

  function fetchColorScheme(e) {
    const { dispatch } = props;
    e.preventDefault();
    let rgb1 = props.state.primaryColor.rgb;
    let rgb2 = props.state.secondaryColor.rgb;
    let url = 'http://colormind.io/api/';
    let data = {
      model: 'default',
      input: [[rgb1.r, rgb1.g, rgb1.b], [rgb2.r, rgb2.g, rgb2.b], "N", "N", "N"]
    }
    let http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (http.readyState === 4 && http.status === 200) {
        let palette = JSON.parse(http.responseText).result;
        console.log(palette)
        dispatch(setColorScheme(palette))
      }
    }
    http.open('POST', url, true)
    http.send(JSON.stringify(data))
  }

  return(
    <div className='colorScheme'>
      <style>
        {`
          #color1 {
            background: rgb(${props.state.colorScheme[0][0]}, ${props.state.colorScheme[0][1]}, ${props.state.colorScheme[0][2]});
          }
          #color2 {
            background: rgb(${props.state.colorScheme[1][0]}, ${props.state.colorScheme[1][1]}, ${props.state.colorScheme[1][2]});
          }
          #color3 {
            background: rgb(${props.state.colorScheme[1][0]}, ${props.state.colorScheme[2][1]}, ${props.state.colorScheme[2][2]});
          }
          #color4 {
            background: rgb(${props.state.colorScheme[3][0]}, ${props.state.colorScheme[3][1]}, ${props.state.colorScheme[3][2]});
          }
          #color5 {
            background: rgb(${props.state.colorScheme[4][0]}, ${props.state.colorScheme[4][1]}, ${props.state.colorScheme[4][2]});
          }
        `}
      </style>
      <h3>Color Scheme works</h3>
      <form onSubmit={fetchColorScheme}>
        <button type='submit'>See Color Scheme</button>
      </form>
      <div className='colors'>
        <div id='color1'>
        </div>
        <div id='color2'>
        </div>
        <div id='color3'>
        </div>
        <div id='color4'>
        </div>
        <div id='color5'>
        </div>
      </div>
    </div>
  )

}

export default connect(mapStateToProps)(ColorScheme);