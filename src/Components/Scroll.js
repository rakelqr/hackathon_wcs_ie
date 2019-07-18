import React, { Component } from 'react';
import Logo from './Images/NewLogoSquare.png';

export default class Scroll extends Component {
    render() {
        return (
            <div className="scroll-horiz">
                <div className="scroll-box">
                    <h4> Rest name </h4>
                    <img src={Logo} alt='logo' height='20' />
                    <p> Coste </p>
                </div>
                <div className="scroll-box">
                    <h4> Rest name </h4>
                    <img src={Logo} alt='logo' height='20' />
                    <p> Coste </p>
                </div>
                <div className="scroll-box">
                    <h4> Rest name </h4>
                    <img src={Logo} alt='logo' height='20' />
                    <p> Coste </p>
                </div>
                <div className="scroll-box">
                    <h4> Rest name </h4>
                    <img src={Logo} alt='logo' height='20' />
                    <p> Coste </p>
                </div>
                <div className="scroll-box">
                    <h4> Rest name </h4>
                    <img src={Logo} alt='logo' height='20' />
                    <p> Coste </p>
                </div>
                <div className="scroll-box">
                    <h4> Rest name </h4>
                    <img src={Logo} alt='logo' height='20' />
                    <p> Coste </p>
                </div>
            </div>
        )
    }
}
