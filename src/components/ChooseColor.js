import React from 'react';
import { connect } from 'react-redux';
import './../scripts/jscolor.js';
import { chooseColor } from './../actions';

const mapStateToProps = state => {
  return {
    state: state
  };
};




function ChooseColor(props) {
  let primaryColor;
  let secondaryColor;
  let userColor;

  function handleChooseColor (event) {
    const { dispatch } = props;
    event.preventDefault();
    dispatch(chooseColor(primaryColor.value, secondaryColor.value));

  }


  return(
    <div>
      <h3>Choose Color works</h3>
      <form onSubmit={handleChooseColor}>
        <input type='text'
          id='color'
          placeholder='blue'
          ref={(input) => {userColor=input;}}/><br />
        Primary Color: <input 
          className="jscolor" 
          value="ab2567"
          ref={(input) => {primaryColor=input;}}
          /><br />
        Secondary Color: <input 
          className="jscolor" 
          value="ab2567" 
          ref={(input) => {secondaryColor=input;}}
          /><br />
        <button type='submit'>Submit</button>
      </form>


      

      <p>Priamry Color: {props.state.primaryColor}</p>
      <p>Secondary Color: {props.state.secondaryColor}</p>
    </div>
  )

}

export default connect(mapStateToProps)(ChooseColor);