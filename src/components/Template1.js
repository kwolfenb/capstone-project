import React from 'react';
import { connect } from 'react-redux';
import {   BrowserRouter as Router, Route,  Link } from 'react-router-dom';
import './styles/Template.css';
import { fontColor } from './../actions';

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
  let lighterColor2 = `rgba(${props.state.colorScheme[1][0]}, ${props.state.colorScheme[1][1]}, ${props.state.colorScheme[1][2]}, 0.25)`;

  // function determineFontColor(color) {
  //   return fontColor(color)
  // }

  return (
    <div className='template'>
      <style>{`

      body { 
        background-color: ${lighterColor2};
      }
      .templateHeader {
        background-color: ${color1};
      }

      a:visited {
        color: ${fontColor1};
      }

      .templateHeader a {
        color: ${fontColor1};
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


      .sidenav {
        background-image: linear-gradient(${color4}, ${color3});
      }

      .sidenav a {
        color: ${fontColor1};
      }
      .sidenav a:hover {
        color: ${fontColor2};
        font-weight: bold;
        background-color: ${color5};
      }

      #back {
        text-align: center;
        background-color: ${color3};
        border: solid ${color1};
        text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;
        letter-spacing: 1px;
      }

      #back:hover {
        background-color: ${color4};
      }

      .grid {
        color: ${fontColor2};
      }

      .gridContent {
        background-color: ${color2};
      }
    `}
      </style>
      <div className="templateHeader">
        <a href="#" className="logo">Webpage Header</a>
        <div className="header-right">
          <Link to='/'>Home</Link>
          <a className='active' href="#">Contact</a>
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
        <div className='bodyContent'>
        <Link to='/'><h3 id='back'>Click to Go Back</h3></Link>
          <div className='grid'>
            <div className='gridContent'>
              <h4>Page Content</h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            </div>
            <div className='gridContent'>
              <h4>Page Content</h4>
              <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.</p>
            </div>
          </div>

        </div>
    </div>
  )

}

export default connect(mapStateToProps)(Template1);