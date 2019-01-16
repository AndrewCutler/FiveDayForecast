import React, { Component } from 'react';
import './card.css';

class DayCard extends Component {
  constructor(props){
    super(props)
  }
  state = {  }
  render() { 
    const dayOfWeek = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    const month = ["January","February","March","April","May","June","July","August","Septemer","October","November","December"]
    const day = new Date();
    const iconUrl = "http://openweathermap.org/img/w/"
    return ( 
      <div>
        <div className="card">
          <div className="day">{dayOfWeek[day.getDay()]}, {month[day.getMonth()]} {day.getDay()}</div>
          <div className="icon">
            <img src={[iconUrl] + this.props.weather.list[0].weather[0].icon + ".png"}/>
          </div>
          <div className="bottom">
            <div className="temp">{this.props.weather.list[0].main.temp}</div>
            <div className="hiLo">{this.props.weather.list[0].main.temp_max}{this.props.weather.list[0].main.temp_min}</div>
            <div className="wind">{this.props.weather.list[0].wind.speed}</div>
          </div>
        </div>
      </div>
     );
  }
}
 
export default DayCard;

//Day of Week
//use Date.getDay() for days on cards, 1 = Monday

//Current temp
//list[x].main.temp
//Hi and lo
//list[x].main.temp_min
//list[x].main.temp_max

//sky conditions
//list[x].weather[0].description
//list[x].weather[0].icon
//icons: https://openweathermap.org/weather-conditions

//wind
//list[x].wind.speed

//increment index by 8 to go to same time next day -- each entry is ever 3 hrs