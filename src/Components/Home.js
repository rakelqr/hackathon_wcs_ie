import React, { Component } from 'react';
import HeaderWithLogo from './HeaderWithLogo';
import Scroll from './Scroll';

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <HeaderWithLogo/>
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
