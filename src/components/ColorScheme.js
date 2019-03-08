import React from 'react';
import './styles/ColorScheme.css'
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    colorScheme: state.colorScheme
  };
};

function ColorScheme(props) {
  console.log(props.colorScheme[0])
  return(
    <div className='colorScheme'>
      <style>
        {`
          #color1 {
            background: rgb(${props.colorScheme[0][0]}, ${props.colorScheme[0][1]}, ${props.colorScheme[0][2]});
          }
          #color2 {
            background: rgb(${props.colorScheme[1][0]}, ${props.colorScheme[1][1]}, ${props.colorScheme[1][2]});
          }
          #color3 {
            background: rgb(${props.colorScheme[1][0]}, ${props.colorScheme[2][1]}, ${props.colorScheme[2][2]});
          }
          #color5 {
            background: rgb(${props.colorScheme[3][0]}, ${props.colorScheme[3][1]}, ${props.colorScheme[3][2]});
          }
          #color5 {
            background: rgb(${props.colorScheme[4][0]}, ${props.colorScheme[4][1]}, ${props.colorScheme[4][2]});
          }
        `}
      </style>
      <h3>Color Scheme works</h3>
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