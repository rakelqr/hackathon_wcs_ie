import React, {Component} from 'react';
import { Map, Marker, Popup, TileLayer} from 'react-leaflet';
import '../App.css';


export default class MapRestaurants extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lat: 40.4893538,
            lng: -3.6827461,
            zoom: 12,
        }
    }
    

    render() {
    const position = [this.state.lat, this.state.lng];

        return (
            <div className='mapContainer'>
                <Map
                    center={position}
                    zoom={this.state.zoom} >
                    <TileLayer
                    attribution = '&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    < Marker position = {position} >
                        <Popup > Our first Popup<br/>Easily customizable.</Popup>  
                    </Marker>
                </Map>
                
            </div>
        )
    }
}


