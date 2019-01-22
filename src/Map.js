import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// var map = L.map('map').setView([30.491663, -88.514167], 6);

class Map extends Component {
  state = {  }

  componentDidMount(){
    this.map = L.map('map',{
      center: [30.49,-88.514],
      zoom: 6
    });

    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 15,
      maxNativeZoom: 17
    }).addTo(this.map);
  }

  render() { 
    return ( 
      <div id="map" height="400px">
      etstse
      </div>
    );
  }
}
 
export default Map;