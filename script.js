let API_KEY = "ece4aee09117a33fe875e7ced805829e";

getWeatherData = (city) => {
    const URL = "http://api.openweathermap.org/data/2.5/weather";
    const FULL_URL = `${URL}?q=${city}&appid=${API_KEY}&units=metric`

    const weatherPromise = fetch( FULL_URL);
    return weatherPromise.then( (response) =>{
        return response.json();
    })
}


searchCity = () => {
    const city = document.getElementById("city-input").value;
    getWeatherData (city).then((response) => {
        console.log(response);
        searchWeatherData(response);
        
    }).catch((error) => {
        console.log(error)
    })
}

searchWeatherData = (weatherData) => {
    document.getElementById("city-name").innerText = weatherData.name;
    document.getElementById("weather-type").innerText = weatherData.weather[0].main;
    document.getElementById("temp").innerText = weatherData.main.temp;
    document.getElementById("min-temp").innerText = weatherData.main.temp_min;
    document.getElementById("max-temp").innerText = weatherData.main.temp_max;



}