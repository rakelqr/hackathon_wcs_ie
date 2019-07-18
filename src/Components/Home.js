import React, { Component } from 'react'
import Scroll from './Scroll'

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <header>Recomentados</header>
                    <Scroll/>
                <header>Novedades</header>
                    <Scroll/>
                <header>Populares</header>
                    <Scroll/>
            </React.Fragment>
        )
    }
}
