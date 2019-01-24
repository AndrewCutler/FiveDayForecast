// url with API key for weather data: http://api.openweathermap.org/data/2.5/forecast?q=10309,us&units=imperial&APPID=f9c997b1dda662b8a55159163b5a1342
//url for map: https://tile.openweathermap.org/map/precipitation_new/{z}/{x}/{y}.png?appid=f9c997b1dda662b8a55159163b5a1342
//this map is for precipitation only; consult docs for other info: https://openweathermap.org/api/weathermaps
import React, { Component } from 'react';
import './App.css';
import DayCard from './DayCard';
import Map from './Map';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      weather: [],
      index: 0,
      isLoaded: false
    }
  }
  
  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=10309,us&units=imperial&APPID=f9c997b1dda662b8a55159163b5a1342')
      .then(res => res.json())
      .then(data => this.setState({
        weather: data.list,
        isLoaded: true
      }))
  }

  render() {
    console.log(this.state.weather)

    let weatherDisplay = []
    for (var i = 0; i < 5; i++) {
      weatherDisplay.push(<DayCard weather={this.state.weather} index={i*8} key={i}/>)
    }

    //conditional rendering
    const display = this.state.isLoaded ? weatherDisplay : "Loading..."
    return (
      <div className="App">
        <div className="container">
            <div className="weather">
              {display}
            </div>
            <div className="cloudmap">
              <Map/>
            </div>
          </div>
      </div>
    );
  }
}

export default App;


//TODO: 
// - allow user to enter zip code or city
// - change map to weather map and move into cards
// - add wind direction (N, NE, E, SE, S, SW, W, NW based on angle)