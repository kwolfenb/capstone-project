import React from 'react';

function Template1() {
  let color1 = 'slateblue';
  let color2 = 'white';
  let color3 = 'skyblue';
  let color4= 'gray';
  let color5 = 'darkblue';

  return(
    <div className='template'>
    <style jsx>{`
      .templateHeader {
        width: 100%;
        color: ${color1};
        background-color: ${color3};
        border: solid ${color5};
        text-align: center;
      }

      .template {
        margin-top: 10%;
      }

      .sidenav {
        height: 100%;
        width: 160px;
        position: fixed;
        z-index: 1;
        top: 0;
        left: 0;
        background-color: ${color5};
        overflow-x: hidden;
        padding-top: 20px;
      }
      .sidenav a {
        padding: 6px 8px 6px 16px;
        text-decoration: none;
        font-size: 25px;
        color: ${color3};
        display: block;
      }
      .sidenav a:hover {
        color: ${color2};
      }
    `}
    </style>
      <div className='templateHeader'>
        <h4>Template 1 Header</h4>
        </div>
        <div className='templateRow'>
          <div className='templateCol'>
          </div>
          <div className='templateCol'>
          </div>
        </div>
        <div className='sidenav'> 
          <a href='#'>About</a>
          <a href='#'>Contact</a>
          <a href='#'>Links</a>
          <a href='#'>Other</a>
        </div>
    </div>
  )

}

export default Template1;