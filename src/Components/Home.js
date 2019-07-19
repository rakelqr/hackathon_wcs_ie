import React, { Component } from 'react';
import HeaderWithLogo from './HeaderWithLogo';
import Scroll from './Scroll';

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            menus: []
        }
    }

    componentDidMount = () => {
        fetch('api/menus')
        .then(res => res.json())
        .then(data => {
            this.setState({
                menus: data
            })
        })
    }


    render() {
        const recomendados = this.state.menus.filter(restaurant => restaurant.categoria === 'recomendados');
        const novedades = this.state.menus.filter(restaurant => restaurant.categoria === 'novedades');
        const populares = this.state.menus.filter(restaurant => restaurant.categoria === 'populares');
        return (
            <React.Fragment>
                <HeaderWithLogo/>
                <header className='headerHome'>Recomendados</header>
                    <Scroll menus={recomendados}/>
                <header className='headerHome'>Novedades</header>
                    <Scroll menus={novedades}/>
                <header className='headerHome'>Populares</header>
                    <Scroll menus={populares}/>
            </React.Fragment>
        )
    }
}
