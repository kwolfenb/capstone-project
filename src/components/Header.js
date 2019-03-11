import React, { Component } from 'react';
import './styles/Header.css';
import { randomColors, fetchColorRgb, fontColor, chooseColor } from './../actions';
import { connect } from 'react-redux';
import {   BrowserRouter as Router, Route,  Link } from 'react-router-dom';


const mapStateToProps = state => {
    return {
        state: state
    };
};


function Header(props) {

    let randomColorsArr = randomColors();

    function handleRandomColor() {
        const { dispatch } = props;
        let colors = [randomColorsArr[0], randomColorsArr[1]];
        let promises1 = [];
        for (let c of colors) {
            let promise = new Promise(
                (resolve, reject) => {
                    let result = fetchColorRgb(c)
                    resolve(result);
                });
            promises1.push(promise);
        }

        Promise.all(promises1).then((color) => {
            if (color[0] && color[1]) {
                console.log(color[0], color[1])
                let primaryTextColor = fontColor(color[0]);
                let secondaryTextColor = fontColor(color[1]);
                dispatch(chooseColor(
                    color[0].hex.clean,
                    color[1].hex.clean,
                    color[0].name.value,
                    color[1].name.value,
                    [color[0].rgb.r, color[0].rgb.g, color[0].rgb.b],
                    [color[1].rgb.r, color[1].rgb.g, color[1].rgb.b],
                    primaryTextColor,
                    secondaryTextColor))
            }
        })
    }

    function handleRandomClick() {
        handleRandomColor();
    }

    return (
        <div className='header'>
            <h1>Colors Web App</h1>
            <div className='headerButtons'>
                <div>
                    <Link to='/'><h6>Home</h6></Link>
                </div>
                <div>
                    <h6 onClick={handleRandomClick}>Generate Random Colors</h6>
                </div>
                <div>
                    <h6 onClick={()=>alert('under construction')}>About</h6>
                </div>
            </div>
        </div>

    );

}

export default connect(mapStateToProps)(Header);