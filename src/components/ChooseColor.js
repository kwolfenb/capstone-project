import React from 'react';
import { connect } from 'react-redux';
import './../scripts/jscolor.js';
import './../scripts/colorPicker.js';
import { chooseColor } from './../actions';
import { fetchColorName } from './../actions';
import { fontColor } from './../actions';

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

        .chooseColorForm {
          background-color: #EDEDED;
          border-radius: 6px;
          padding: 10px;
          margin: 10px;
          border: solid white 1px;
          box-shadow: 1px 1px 3px grey;
          transition: background-color 0.4s, border 0.4s, box-shadow 0.4s;
        }

        .chooseColorForm:hover {
          background-color: #EEEEEE;
          border: solid #CCFAFF 1px;
          box-shadow: 4px 4px 4px 3px #AAAAAA;
        }

        .chooseColorForm input, .chooseColorForm button {
          margin-top: 20px;
        }


        .chooseColorGrid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          margin-top: 20px;
          margin-bottom: 20px;
          font-size: 14px;
        }

        .primaryColor, .secondaryColor {
          margin: auto;
          text-align: center;
          width: 80%;
          height: 150px;
          padding-top: 25px;
          background-color: white;
          transition: background-color 1s; 
          border-radius: 3px;

        }

        .primaryColor {
          background-color: #${props.state.primaryColor.hex};
          color: #${props.state.primaryColor.font};
        }
        .secondaryColor {
          background-color: #${props.state.secondaryColor.hex};
          color: #${props.state.secondaryColor.font};
        }
      `}</style>
      <div className='chooseColorForm'>
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
        <div className='chooseColorGrid'>
          <div>
            <p className="primaryColor">Primary Color: <br />
            <strong>{props.state.primaryColor.name}</strong></p>
          </div>
          <div>
            <p className="secondaryColor">Secondary Color: <br />
            <strong>{props.state.secondaryColor.name}</strong></p>
          </div>
        </div>
      </div>
    </div>

  )

}

export default connect(mapStateToProps)(ChooseColor);