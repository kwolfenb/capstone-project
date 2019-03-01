import React from 'react';
import './ChoosePicture.css';

import img1 from '../assets/images/img1.jpg';
import img2 from '../assets/images/img2.jpg';
import img3 from '../assets/images/img3.jpg';
import img4 from '../assets/images/img4.jpg';
import img5 from '../assets/images/img5.jpg';
import img6 from '../assets/images/img6.jpg';
import img7 from '../assets/images/img7.jpg';
import img8 from '../assets/images/img8.jpg';


function ChoosePicture() {

  return (
    <div>
      <h3>Choose A Color Scheme by Picture</h3>
      <div className='pictures'>
        <div>
          <img src={img1} alt='img1' />
        </div>
        <div>
          <img src={img2} alt='img2' />
        </div>
        <div>
          <img src={img3} alt='img3' />
        </div>
        <div>
          <img src={img4} alt='img4' />
        </div>
        <div>
          <img src={img5} alt='img5' />
        </div>
        <div>
          <img src={img6} alt='img6' />
        </div>
        <div>
          <img src={img7} alt='img7' />
        </div>
        <div>
          <img src={img8} alt='img8' />
        </div>

      </div>
    </div>
  )

}

export default ChoosePicture;