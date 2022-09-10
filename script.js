
const cityName=document.getElementById('city-name');
const WeatherType=document.getElementById('weather-type');
const temp=document.getElementById('temp');
const minTemp=document.getElementById('min-temp');
const maxTemp=document.getElementById('max-temp');
const humidity=document.getElementById('humidity');
const wind=document.getElementById('wind'); 
getWeatherData = (city) => {
  const URL = 'https://api.openweathermap.org/data/2.5/weather'
  const apiKey='a8e71c9932b20c4ceb0aed183e6a83bb'
  const fullUrl=`${URL}?q=${city}&appid=${apiKey}&units=imperial`
  return fetch(fullUrl)
    .then(response => response.json())
    .then(data => data)
    .catch(err => console.error(err));
}


const searchCity = async () => {
  const city = document.getElementById('city-input').value;
  const data = await getWeatherData(city)
  showWeatherData(data)
}

const showWeatherData = (weatherData) => {
  console.log(weatherData)
  cityName.innerHTML=weatherData.name;
  WeatherType.innerHTML=weatherData.weather[0].main;
  temp.innerHTML=weatherData.main.temp
  minTemp.innerHTML=weatherData.main.temp_min;
  maxTemp.innerHTML=weatherData.main.temp_max;
  humidity.innerHTML=weatherData.main.humidity;
  wind.innerHTML=weatherData.wind.speed;
}

