import React, { useState } from 'react'
import SearchBox from './SearchBox'
import InfoBox from './Infobox'

function WeatherApp() {
    const [weatherInfo,setWeatherInfo]=useState({
    city: "Delhi",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "Haze",

    })
    let updateInfo=(result)=>{
        setWeatherInfo(result);
    }
  return (
    <div>
        <h2>Weather App</h2>
        <SearchBox updateinfo={updateInfo}/>
        <InfoBox info={weatherInfo}/>
      
    </div>
  )
}

export default WeatherApp
