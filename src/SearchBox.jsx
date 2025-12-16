import React, { useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css"
function SearchBox({updateinfo}) {
    let [city,setCity]=useState("");
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "19090151c938404469cd4d5dd5570c27";
   let getWeatherInfo = async () => {
        try {
            const response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            if (!response.ok) {
                // invalid city or API error
                const err = await response.json().catch(() => ({}));
                console.error('API error', err);
                return null;
            }
            const jsonResponse = await response.json();
            const result = {
                city: jsonResponse.name || city,
                temp: jsonResponse.main?.temp,
                tempMin: jsonResponse.main?.temp_min,
                tempMax: jsonResponse.main?.temp_max,
                humidity: jsonResponse.main?.humidity,
                feelsLike: jsonResponse.main?.feels_like,
                weather: jsonResponse.weather?.[0]?.description,
            };
            console.log(result);
            return result;
        } catch (error) {
            console.error('Fetch error', error);
            return null;
        }
};

   

   
    let handlechange=(event)=>{
        setCity(event.target.value);

    }
    let handleSubmit= async (event)=>{
        event.preventDefault();
        console.log(city);
        let info = await getWeatherInfo();
        if (!info) {
            alert('Could not find weather for "' + city + '". Please check the city name and try again.');
            return;
        }
        updateinfo(info);
    }

  return (
    <div>
        <h3>Search For The Weather</h3>
        <form onSubmit={handleSubmit}>
             <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handlechange}/>
             <br></br><br></br>
               <Button variant="contained" type='submit' >Search</Button>

        </form>
      
    </div>
  )
}

export default SearchBox
