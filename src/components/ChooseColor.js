import React from 'react';
import { connect } from 'react-redux';


const mapStateToProps = state => {
  return {
    state: state
  };
};




function ChooseColor(props) {
  let userColor;
  function handleChooseColor (event) {
    const { dispatch } = props;
    event.preventDefault();


    const action = {
      type: 'CHOOSE_COLOR',
      color1: userColor.value
    }
    dispatch(action);
    userColor.value='';

  }


  return(
    <div>
      <h3>Choose Color works</h3>
      <form onSubmit={handleChooseColor}>
        <input type='text'
          id='color'
          placeholder='blue'
          ref={(input) => {userColor=input;}}/>
        <button type='submit'>Submit</button>
      </form>

      <p>Color: {props.state.color1}</p>
    </div>
  )

}

export default connect(mapStateToProps)(ChooseColor);