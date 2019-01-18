import React, { Component } from 'react';
import './card.css';

class DayCard extends Component {
  constructor(props){
    super(props)
  }
  state = {  }
  render() { 
    // const dayOfWeek = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
    // const month = ["January","February","March","April","May","June","July","August","Septemer","October","November","December"]
    // const day = new Date();
    const iconUrl = "http://openweathermap.org/img/w/"
    return ( 
      <div>
        <div className="card">
          <div className="day">
            <p>{this.props.weather[this.props.index].dt_txt}</p>
            <p></p>
          </div>

          <div className="icon">
            <img src={[iconUrl] + this.props.weather[this.props.index].weather[0].icon + ".png"}/>
          </div>

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