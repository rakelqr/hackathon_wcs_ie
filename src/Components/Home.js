import React, { Component } from 'react';
import NewLogoSquare from './Images/NewLogoSquare.png';
import Scroll from './Scroll';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div className='logoTop'>
                    <img src={NewLogoSquare} alt='logo menu-finder red square' height='100'/>
                </div>
                <header className='headerHome'>Recomendados</header>
                    <Scroll/>
                <header className='headerHome'>Novedades</header>
                    <Scroll/>
                <header className='headerHome'>Populares</header>
                    <Scroll/>
            </React.Fragment>
        )
    }
}
