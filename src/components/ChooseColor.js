import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    state: state
  };
};

const action = {
  type: 'CHOOSE_COLOR',
}

function ChooseColor(state) {
  console.log(state)
  return(
    <div>
      <h3>Choose Color works</h3>
    </div>
  )

}

export default connect(mapStateToProps)(ChooseColor);