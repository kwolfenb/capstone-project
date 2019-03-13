import React from 'react';
import './styles/ColorScheme.css'
import { connect } from 'react-redux';
import { setColorScheme } from './../actions';
import { randomColors } from './../actions';
import Loading from './Loading';


const mapStateToProps = state => {
  return {
    state: state
  };
};


class ColorScheme extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
    this.fetchColorScheme = this.fetchColorScheme.bind(this);
    this.setLoading = this.setLoading.bind(this)
  }

  fetchColorScheme(e) {
    const { dispatch } = this.props;
    e.preventDefault();
    this.setLoading()
    let rgb1 = this.props.state.primaryColor.rgb;
    let rgb2 = this.props.state.secondaryColor.rgb;
    let url = 'http://colormind.io/api/';
    let data = {
      model: 'default',
      input: [[rgb1.r, rgb1.g, rgb1.b], [rgb2.r, rgb2.g, rgb2.b], "N", "N", "N"]
    }
    let http = new XMLHttpRequest();
    http.onreadystatechange = () => {
      if (http.readyState === 4 && http.status === 200) {
        let palette = JSON.parse(http.responseText).result;
        console.log(palette)
        dispatch(setColorScheme(palette))
        this.setLoading();
      }
    }
    http.open('POST', url, true)
    http.send(JSON.stringify(data))
  }

  setLoading() {
    this.setState({
      loading: !this.state.loading
    })
  }

  render() {

  
  return(
    <div className='colorScheme'>
      <style>
        {`
          #color1 {
            background: rgb(${this.props.state.colorScheme[0][0]}, ${this.props.state.colorScheme[0][1]}, ${this.props.state.colorScheme[0][2]});
            transition: background 0.6s;
          }
          #color2 {
            background: rgb(${this.props.state.colorScheme[1][0]}, ${this.props.state.colorScheme[1][1]}, ${this.props.state.colorScheme[1][2]});
            transition: background 0.6s;
          }
          #color3 {
            background: rgb(${this.props.state.colorScheme[1][0]}, ${this.props.state.colorScheme[2][1]}, ${this.props.state.colorScheme[2][2]});
            transition: background 0.6s;
          }
          #color4 {
            background: rgb(${this.props.state.colorScheme[3][0]}, ${this.props.state.colorScheme[3][1]}, ${this.props.state.colorScheme[3][2]});
            transition: background 0.6s;
          }
          #color5 {
            background: rgb(${this.props.state.colorScheme[4][0]}, ${this.props.state.colorScheme[4][1]}, ${this.props.state.colorScheme[4][2]});
            transition: background 0.6s;
          }
        `}
      </style>
      <form onSubmit={this.fetchColorScheme}>
        <button id='colorSchemeButton' type='submit'>
          {this.state.loading ? <Loading /> :  <h4>Generate Scheme By Selected Colors</h4>}
          </button>
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

}

export default connect(mapStateToProps)(ColorScheme);