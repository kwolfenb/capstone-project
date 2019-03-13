import React from 'react';
import { connect } from 'react-redux';
import {   BrowserRouter as Router, Route,  Link } from 'react-router-dom';
import './styles/Template2.css';
import './styles/W3.css';
import { fontColor } from './../actions';

const mapStateToProps = state => {
  return {
    state: state
  };
};


function Template2(props) {

  let color1 = `rgb(${props.state.colorScheme[0][0]}, ${props.state.colorScheme[0][1]}, ${props.state.colorScheme[0][2]})`;
  let color2 = `rgb(${props.state.colorScheme[1][0]}, ${props.state.colorScheme[1][1]}, ${props.state.colorScheme[1][2]})`;
  let color3 = `rgb(${props.state.colorScheme[2][0]}, ${props.state.colorScheme[2][1]}, ${props.state.colorScheme[2][2]})`;
  let color4 = `rgb(${props.state.colorScheme[3][0]}, ${props.state.colorScheme[3][1]}, ${props.state.colorScheme[3][2]})`;
  let color5 = `rgb(${props.state.colorScheme[4][0]}, ${props.state.colorScheme[4][1]}, ${props.state.colorScheme[4][2]})`;
  let fontColor1 = `#${props.state.primaryColor.font}`;
  let fontColor2 = `#${props.state.secondaryColor.font}`;
  let lighterColor1 = `rgba(${props.state.colorScheme[0][0]}, ${props.state.colorScheme[0][1]}, ${props.state.colorScheme[0][2]}, 0.25)`;
  let lighterColor2 = `rgba(${props.state.colorScheme[1][0]}, ${props.state.colorScheme[1][1]}, ${props.state.colorScheme[1][2]}, 0.25)`;



  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    console.log('hello')
  }

  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
  }

  const headerStyle= {
    display:'none',
    zIndex:'2',
    width:'40%',
    minWidth:'300px',
  }

  const style2 = {
    maxWidth:'1200px',
    margin:'auto'
  }

  return(
    <div className='template2'>
      <div>
      </div>
      <nav className="w3-sidebar w3-bar-block w3-card w3-top w3-xlarge w3-animate-left" style={headerStyle} id="mySidebar">
        <a href="javascript:void(0)" onclick={()=>{w3_close()}}
        className="w3-bar-item w3-button">Close Menu</a>
        <a href="#food" onclick={()=>{w3_close()}} className="w3-bar-item w3-button">Food</a>
        <a href="#about" onclick={()=>{w3_close()}} className="w3-bar-item w3-button">About</a>
      </nav>

      <div className="w3-top">
        <div className="w3-white w3-xlarge" style={style2}>
          <div className="w3-button w3-padding-16 w3-left" onclick={()=>w3_open()}>☰</div>
          <div className="w3-right w3-padding-16">Mail</div>
          <div className="w3-center w3-padding-16">My Food</div>
        </div>
      </div>
    </div>
  ) 





}

export default connect(mapStateToProps)(Template2);

