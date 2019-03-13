import React from 'react';
import './styles/ChoosePicture.css';
import { fetchColorByPicture, setColorScheme } from './../actions';
import { connect } from 'react-redux';

import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.jpg';
import img8 from '../assets/images/img8.jpg';
import img9 from '../assets/images/img9.jpg';

const mapStateToProps = state => {
  return {
      state: state
  };
};


class ChoosePicture extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      loading: false
    }
    this.fetchPictureColors = this.fetchPictureColors.bind(this);
    this.handlePictureClick = this.handlePictureClick.bind(this);
    this.setLoading = this.setLoading.bind(this);
  }

  imgUrl;

  fetchPictureColors(link) {
    const { dispatch } = this.props;
      let promise = new Promise(
        (resolve, reject) => {
            let result = fetchColorByPicture(link)
            resolve(result);
          });
    promise.then((colors) => {
        console.log(colors.colors);
        let color1 = colors.colors.dominant;
        let accent1=colors.colors.accent[0];
        let color3 = colors.colors.other[0];
        let color4 = colors.colors.other[1];
        let color5 = colors.colors.other[2];

        let result = 
          [[color1.r, color1.g, color1.b], 
          [accent1.r, accent1.g, accent1.b],
          [color3.r, color3.g, color3.b],
          [color4.r, color4.g, color5.b], 
          [color5.r, color5.g, color5.b]];
          dispatch(setColorScheme(result));
    })
}

  handlePictureClick(link) {
    this.fetchPictureColors(link);
  }

  setLoading() {
    this.setState({
      loading: !this.state.loading
    })
  }

  render() {

  
  return (
    <div className='choosePictures'>
      <h3>Choose A Picture</h3>
      <div className='pictures'>
        <div>
          <img onClick={()=>this.handlePictureClick(imgUrlArr[0])} src={img1} alt='img1' />
        </div>
        <div>
          <img onClick={()=>this.handlePictureClick(imgUrlArr[1])} src={img2} alt='img2' />
        </div>
        <div>
          <img onClick={()=>this.handlePictureClick(imgUrlArr[2])} src={img3} alt='img3' />
        </div>
        <div>
          <img onClick={()=>this.handlePictureClick(imgUrlArr[3])} src={img4} alt='img4' />
        </div>
        <div>
          <img onClick={()=>this.handlePictureClick(imgUrlArr[4])} src={img5} alt='img5' />
        </div>
        <div>
          <img onClick={()=>this.handlePictureClick(imgUrlArr[5])} src={img6} alt='img6' />
        </div>
        <div>
          <img onClick={()=>this.handlePictureClick(imgUrlArr[6])} src={img7} alt='img7' />
        </div>
        <div>
          <img onClick={()=>this.handlePictureClick(imgUrlArr[7])} src={img8} alt='img8' />
        </div>
        <div>
          <img onClick={()=>this.handlePictureClick(imgUrlArr[8])} src={img9} alt='img9' />
        </div>

      </div>
      <div>
        <h5>Or manually enter an image URL</h5>
        <form>
          <input type='text' ref={(input) => { this.imgUrl = input; }}/>
          <button type='button' onClick={()=>this.handlePictureClick(this.imgUrl.value)}>Submit</button>
        </form>
      </div>
    </div>
  )
  }

}

const imgUrlArr = [
  'https://www.wallpapersin4k.org/wp-content/uploads/2017/04/Orange-Sky-Wallpaper-5.jpg',
  'https://www.wallpapers.net/web/wallpapers/sunny-day-hd-wallpaper/3840x2160.jpg',
  'http://www.cashadvance6online.com/data/archive/img/4198587588.jpeg', 
  'https://photographicsworld.com/wp-content/uploads/2018/07/adventure-alpine-alps-7142581.jpg',
  'https://png.pngtree.com/back_origin_pic/04/26/47/bde9eb7161268d2e9ada8334cd08517d.jpg',
  'https://a-static.besthdwallpaper.com/minimal-aber-kunstlerischer-hintergrund-tapete-3440x1440-9625_15.jpg',
  'https://images-na.ssl-images-amazon.com/images/I/A1Edzr8-%2BwL._SL1500_.jpg',
  'http://2014.skjaladagur.is/wp-content/uploads/sites/8/2014/10/bkgr_sunset-431894.jpg',
  'http://sadcasm.co/wp-content/uploads/2018/07/forests-natural-leaves-gesture-yellow-smiling-fallen-making-scenery-autumn-impressive-bright-nature-welcoming-forest-river-wallpapers-desktop-1920x1080.jpg'
]

export default connect(mapStateToProps)(ChoosePicture);