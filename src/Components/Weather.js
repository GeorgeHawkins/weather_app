import React, { Component } from 'react';
import RightArrow from "./../icons/right-arrow.png";
import WeatherIcon from "./../icons/cloudy.png";
import SettingsIcon from "./../icons/gear.png";


// Component for displaying the weather widget
export default class Weather extends Component {
  render() {
    return (
      <div className='WeatherSection'>
        <img src={RightArrow}
        alt="Minimize Weather Bar"
        className="Minimize"/>

        <div className="MainWeatherInfo">
          <div className="MainWeatherFlex">
            <div className="LightText">Melbourne</div> 
            <div className="TemperatureText">32°</div>
            <div className="LightText" style={{fontSize: "12px"}}>Tue 16th 3:46 PM</div>
          </div>
          
          <img src={WeatherIcon}
          alt="Weather"
          className="WeatherIcon"/>
        </div>

        {/* Secondary weather info displayed with flex wrap */}
        <div className="SecondaryWeatherInfo">
            <div className="SecondaryInfoRows LightText">Humidity</div>
            <div className="BoldText">78%</div>
            <div className="SecondaryInfoRows LightText">Chance of Rain</div>
            <div className="BoldText">34%</div>
            <div className="SecondaryInfoRows LightText">Wind</div>
            <div><span className="BoldText">21</span>
            <span className="LightText"> kmh</span></div>
            <div className="SecondaryInfoRows LightText">Tomorrow</div>
            <div className="BoldText">30° 
            <img src={SettingsIcon}
            alt="Settings"
            className="SettingsIcon"/>
        </div>
        </div>

      </div>
    )
  }
}
