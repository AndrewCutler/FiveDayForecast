// url with API key: http://api.openweathermap.org/data/2.5/forecast?q=10309,us&units=imperial&APPID=f9c997b1dda662b8a55159163b5a1342
import React, { Component } from 'react';
import './App.css';
import DayCard from './DayCard';

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      weather: [],
      isLoaded: false
    }
  }
  
  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=10309,us&units=imperial&APPID=f9c997b1dda662b8a55159163b5a1342')
      .then(res => res.json())
      .then(data => this.setState({
        weather: data,
        isLoaded: true
      }))
  }

  render() {
    const display = this.state.isLoaded ? <DayCard weather={this.state.weather}/> : "Loading..."
    return (
      <div className="App">
        {display}
      </div>
    );
  }
}

export default App;


//TODO: use map to populate 5 next days, and pass index (incremented by 8) as a prop