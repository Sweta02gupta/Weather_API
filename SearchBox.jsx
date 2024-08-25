/*import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';
export default function SearchBox({ updateInfo }) {

    let[city, setCity] = useState("");
    let[error, setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "1e06a05343ea0c1f3eec85d8f33b0535";
    let getWeatherInfo = async() =>{
       try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric` );
               let jsonResponse = await response.json();
               let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
               };
               console.log(result);
               return result;
        }catch(err){
        throw err;
        
        }
    };
    
    let handleChange = (event)=>{
   setCity(event.target.value)
        };
        let handleSubmit =async (event) =>{
            try{
                event.preventDefault();
                console.log(city);
                setCity("");
               let newInfo =  await getWeatherInfo();
               updateInfo(newInfo);
            }catch(error){
                setError(true);
            }

           
        };
    return(
        <div className='SearchBox'>
            <form onSubmit={handleSubmit}>
             <TextField
              onChange={handleChange}
              value={city} 
              label="City Name" 
              id='city'
               variant='outlined'
                required />
             <br /><br />
             <Button variant="contained" type='submit'>Search</Button>
            {error && <p style={{color:"red"}}>No such place exists!</p>}
             </form>
        </div>
    )
};*/
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import "./SearchBox.css";
import { useState } from 'react';

export default function SearchBox({updateInfo}) {  // Correctly destructuring updateInfo
  let [city, setCity] = useState("");
  let [error, setError] = useState(false);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "1e06a05343ea0c1f3eec85d8f33b0535";

  let getWeatherInfo = async () => {
    try {
      let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
      if (!response.ok) {
        throw new Error("City not found");
      }
      let jsonResponse = await response.json();
      let result = {
        city: city,
        temp: jsonResponse.main.temp,
        tempMin: jsonResponse.main.temp_min,
        tempMax: jsonResponse.main.temp_max,
        humidity: jsonResponse.main.humidity,
        feelsLike: jsonResponse.main.feels_like,  // Correct property name
        weather: jsonResponse.weather[0].description,
      };
      console.log(result);
      return result;
    } catch (err) {
      console.error("Error fetching weather data:", err);
      throw err;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className='SearchBox'>
      <form onSubmit={handleSubmit}>
        <TextField
          onChange={handleChange}
          value={city}
          label="City Name"
          id='city'
          variant='outlined'
          required />
        <br /><br />
        <Button variant="contained" type='submit'>Search</Button>
        {error && <p style={{ color: "red" }}>No such place exists!</p>}
      </form>
    </div>
  );
}
