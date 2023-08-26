import { useState } from "react";

const api = {
    key:"6c5fdeb05e6d92026803f766e3095cc9",
    base: "https://api.openweathermap.org/data/2.5/",

}
const WeatherExp = () => {
    const [search, setSearch] = useState("");
    const [weather ,setWeather] = useState({})

    const [isPending , setIsPending] = useState(false);

    const searchPressed = () => 
    {
        
        setTimeout(() => {
            fetch(`${api.base}weather?q=${search}&units=metric&APPID=${api.key}`)
                .then((res) => res.json())
                .then((result) => {
                    setIsPending(false);
                    setWeather(result);
                });
        } , 2000)
        setIsPending(true);
    };

    return ( 
        <header >
            
            
            <div className="form-container">
                <h1>Weather API</h1>
                <input 
                    className="fancy-input"
                    type="text"
                    placeholder="Enter city/town..."
                    onChange={(e) => setSearch(e.target.value)}
                />
                <button className="submit-button" onClick={searchPressed } >Search</button>
                {isPending && <div className="loading_text">Loading...</div>}
            </div>

        {/* If weather is not undefined display results from API */}
        {typeof weather.main !== "undefined" ? (
          <div>
            {/* Location  */}
            <p className="weather_area">{weather.name}</p>

            {/* Temperature Celsius  */}
            <p className="temperature-details">{weather.main.temp}°C</p>

            {/* Condition (Sunny ) */}
            <p className="weather-condition">{weather.weather[0].main}</p>
            <p className="weather-description">({weather.weather[0].description})</p>
          </div>
        ) : (
          ""
        )}
      </header>
    );
}
 
export default WeatherExp;