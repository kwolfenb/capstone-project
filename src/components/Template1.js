import React from 'react';
import { connect } from 'react-redux';
import {   BrowserRouter as Router, Route,  Link } from 'react-router-dom';


const mapStateToProps = state => {
  return {
    state: state
  };
};


function Template1(props) {
  let color1 = `rgb(${props.state.colorScheme[0][0]}, ${props.state.colorScheme[0][1]}, ${props.state.colorScheme[0][2]})`;
  let color2 = `rgb(${props.state.colorScheme[1][0]}, ${props.state.colorScheme[1][1]}, ${props.state.colorScheme[1][2]})`;
  let color3 = `rgb(${props.state.colorScheme[2][0]}, ${props.state.colorScheme[2][1]}, ${props.state.colorScheme[2][2]})`;
  let color4 = `rgb(${props.state.colorScheme[3][0]}, ${props.state.colorScheme[3][1]}, ${props.state.colorScheme[3][2]})`;
  let color5 = `rgb(${props.state.colorScheme[4][0]}, ${props.state.colorScheme[4][1]}, ${props.state.colorScheme[4][2]})`;
  let fontColor1 = `#${props.state.primaryColor.font}`;
  let fontColor2 = `#${props.state.secondaryColor.font}`;
  let lighterColor1 = `rgba(${props.state.colorScheme[0][0]}, ${props.state.colorScheme[0][1]}, ${props.state.colorScheme[0][2]}, 0.25)`;

  return (
    <div className='template'>
      <style>{`

      body { 
        margin: 0;
        font-family: Arial, Helvetica, sans-serif;
        background-color: ${lighterColor1};
      }
      .templateHeader {
        overflow: hidden;
        background-color: ${color1};
        padding: 4% 5%;
      }

      a:visited {
        color: ${fontColor1};
      }

      .templateHeader a {
        float: left;
        color: ${fontColor1};
        text-align: center;
        padding: 12px;
        text-decoration: none;
        font-size: 18px; 
        line-height: 25px;
        border-radius: 4px;
      }

      .templateHeader a.logo {
        font-size: 25px;
        font-weight: bold;
      }

      .templateHeader a:hover {
        background-color: ${color3};
        color: ${fontColor1};
      }

      .templateHeader a:visited {
        color: ${fontColor1};
      }

      .templateHeader a.active {
        background-color: ${color2};
        color: ${fontColor2};
      }

      .header-right {
        float: right;
      }
      
      .sidenav {
        float: left;
        height: 500px;
        width: 140px;
        z-index: 1;
        top: 0;
        left: 0;
        padding-top: 20px;
        background-image: linear-gradient(${color4}, ${color3});
      }
      .sidenav a {
        padding: 6px 8px 6px 16px;
        margin-bottom: 20px;
        text-decoration: none;
        font-size: 25px;
        color: ${fontColor1};
        display: block;
      }
      .sidenav a:hover {
        color: ${fontColor2};
        font-weight: bold;
        background-color: ${color5};
      }

      #back {
        text-align: center;
        background-color: ${color5};
        margin-left: auto;
        margin-right: auto;
        width: 30%;
        border: solid ${color1};
        height: 50px;
        padding-top: 18px;
        border-radius: 4px;
      }

      #back:hover {
        background-color: ${color4};
      }
    `}
      </style>
      <div className="templateHeader">
        <a href="#" className="logo">Webpage Header</a>
        <div className="header-right">
          <a className="active" href="#">Home</a>
          <a href="#">Contact</a>
          <a href="#">About</a>
        </div>
      </div>
      <div className='templateRow'>
          <div className='templateCol'>
          </div>
          <div className='templateCol'>
          </div>
        </div>
        <div className='sidenav'> 
          <Link to='/'>About</Link>
          <a href='#'>Contact</a>
          <a href='#'>Links</a>
          <a href='#'>Other</a>
        </div>
        <h3 id='back'><Link to='/'>Click to Go Back</Link>
</h3>
    </div>
  )

}

export default connect(mapStateToProps)(Template1);