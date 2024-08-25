import SearchBox from "./SearchBox"
import InfoBox from "./InfoBox"
import { useState } from "react"
export default function WeatherApp(){
    const [weatherInfo, setWeatherInfo] = useState({
        city:"Wonderland",
        feelslike:24.84,
        humidity:47,
        temp:25.05,
        tempMax:25.05,
        tempMin:25.05,
        weather:"haze"
    });
    let updateWeatherInfo = (newInfo) => {
    setWeatherInfo(newInfo);
    }
    return(
    <div style={{textAlign:"center"}}>
        <h2>Weather App</h2>
        <SearchBox updateInfo={updateWeatherInfo}/>
        <InfoBox info={weatherInfo}/>
    </div>
    )
    }