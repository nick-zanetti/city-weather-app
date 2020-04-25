const cityInput = document.querySelector('#city-field')
const button = document.querySelector('#submit-button')
const form = document.querySelector('#submit-form')
const cityOutput = document.querySelector('#city-output')
const temp = document.querySelector('#temp')
const weatherDescription = document.querySelector('#description')
const weatherIcon = document.querySelector('#weather-icon')

const kelvinToFarenheit = (temp) => {
  return 9/5 * (temp - 273) +32
}

form.addEventListener('submit', ((e) => {
  e.preventDefault()
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.elements.cityName.value}&appid=868f0a5a4fc143a87198d4b2b0a7cdf1`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    
    cityOutput.textContent = data.name;
    temp.textContent = Math.round(kelvinToFarenheit(data.main.temp))  + '°';
    weatherDescription.textContent = data.weather[0].description;
    weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    
  })
  .catch(err => alert('Invalid city name'));
  
}))


