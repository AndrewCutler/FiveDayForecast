import React, { Component } from 'react';
import './card.css';

class DayCard extends Component {
  constructor(props){
    super(props)
  }
  state = {  }
  render() { 
    //calculate day of week, month name, and year from API data
    const dayData = new Date(this.props.weather[this.props.index].dt_txt)

    const dayOfWeek = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    const day = dayOfWeek[dayData.getDay()]

    const monthOfYear = ["January","February","March","April","May","June","July","August","Septemer","October","November","December"]
    const month = monthOfYear[dayData.getMonth()]

    const year = dayData.getFullYear()

    //source for weather icons
    const iconUrl = "http://openweathermap.org/img/w/"

    return ( 
      <div>
        <div className="card">
          {/* SHOW DATE INFO */}
          <div className="day">
            <p>{day},</p>
            <p>{month} {year}</p>
          </div>

          {/* SHOW WEATHER ICON */}
          <div className="icon">
            <img src={[iconUrl] + this.props.weather[this.props.index].weather[0].icon + ".png"}/>
          </div>

          {/* SHOW WEATHER DATA */}
          <div className="bottom">
            <div className="temp">
              <p>Temperature:</p>
              {this.props.weather[this.props.index].main.temp}
            </div>

            <div className="hiLo">
              <p>Today's high:</p>{this.props.weather[this.props.index].main.temp_max}
              <p>Today's low:</p>{this.props.weather[0].main.temp_min}
            </div>

            <div className="wind">
              <p>Wind speed (mph):</p>{this.props.weather[this.props.index].wind.speed}
            </div>

          </div>
        </div>
      </div>
     );
  }
}
 
export default DayCard;