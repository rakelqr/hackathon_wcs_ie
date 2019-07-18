import React, { Component } from 'react';
import Logo from './Images/NewLogoCorporate.png';

export default class HeaderWithLogo extends Component {
    render() {
        return (
            <div className='logoTop'>
                <img src={Logo} alt='logo menu-finder red square' height='80'/>
            </div>
        )
    }
}
