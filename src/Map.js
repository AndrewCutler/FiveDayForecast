import React, { Component } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

class Map extends Component {

  componentDidMount(){
    this.map = L.map('map',{
      center: [40.58,-74.18],
      zoom: 11
    });
    
    L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    // L.tileLayer('http://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?APPID={app_id}', {
      maxZoom: 15,
      maxNativeZoom: 17
    }).addTo(this.map);
  }

  render() { 
    return ( 
      <div id="map">
      </div>
    );
  }
}
 
export default Map;