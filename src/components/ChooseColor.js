import React from 'react';
import { connect } from 'react-redux';
import './../scripts/jscolor.js';
import './../scripts/colorPicker.js';
import { chooseColor } from './../actions';
import { fetchColorName } from './../actions';
import { fontColor } from './../actions';
// import { setColorScheme } from './../actions';

const mapStateToProps = state => {
  return {
    state: state
  };
};


function ChooseColor(props) {
  let primaryColor;
  let secondaryColor;
  // let colorScheme;

  function handleChooseColor(event) {
    const { dispatch } = props;
    event.preventDefault();
    let colors = [primaryColor.value, secondaryColor.value]
    let promises = [];
    for (let c of colors) {
      let promise = new Promise(
        (resolve, reject) => {
          let result = fetchColorName(c)
          resolve(result);
        });
      promises.push(promise);
    }

    Promise.all(promises).then((color) => {
      if (color[0] && color[1]) {
        console.log(color[0], color[1])
        let primaryTextColor = fontColor(color[0]);
        let secondaryTextColor = fontColor(color[1]);
        dispatch(chooseColor(
          primaryColor.value,
          secondaryColor.value,
          color[0].name.value,
          color[1].name.value,
          [color[0].rgb.r, color[0].rgb.g, color[0].rgb.b],
          [color[1].rgb.r, color[1].rgb.g, color[1].rgb.b],
          primaryTextColor,
          secondaryTextColor))
      }
    })
  }

  return (
    <div>
      <style>{`
        .primaryColor {
          text-align: center;
          background-color: #${props.state.primaryColor.hex};
          width: 50%;
          height: 150px;
          color: #${props.state.primaryColor.font};

        }
        .secondaryColor {
          text-align: center;
          height: 150px;
          width: 50%;
          background-color: #${props.state.secondaryColor.hex};
          color: #${props.state.secondaryColor.font};

        }
      `}</style>
      <h3>Choose Color works</h3>
      <form onSubmit={handleChooseColor}>

        <button className="jscolor {valueElement:'primary-chosen-value'}">
          Pick text color
	      </button>

        HEX value:
        <input id="primary-chosen-value"
          ref={(input) => { primaryColor = input; }} /> <br />

        <button className="jscolor {valueElement:'secondary-chosen-value'}">
          Pick text color
	      </button>

        HEX value:
        <input id="secondary-chosen-value"
          ref={(input) => { secondaryColor = input; }} /> <br />
        <button type='submit'>Submit</button>

      </form>

      <p className="primaryColor">Primary Color: {props.state.primaryColor.name}</p>
      <p className="secondaryColor">Secondary Color: {props.state.secondaryColor.name}</p>
    </div>

  )

}

export default connect(mapStateToProps)(ChooseColor);