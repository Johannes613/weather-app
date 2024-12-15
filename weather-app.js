const inputBar = document.querySelector('input');
const tempDisp = document.querySelector('.temp');
const humidityDisp = document.querySelector('.humidity-value')
const windSpeedDisp = document.querySelector('.wind-speed-value')
const cityDisp = document.querySelector('.city-name');
const findBtn = document.querySelector('#find');
const weatherIcon = document.querySelector('.weather-img');

findBtn.addEventListener('click',findWeather)
document.addEventListener('keydown',(event)=>{
    if(event.key == 'Enter' || event.key == 'Tab'){
        findWeather();
    }
})
document.addEventListener("DOMContentLoaded",()=>{
    inputBar.value = 'Abu Dhabi' // default city
    findWeather();

})

function findWeather(){
    let cityName = inputBar.value;
    let url = 'https://api.openweathermap.org/data/2.5/weather?appid=46225d49c10015c4331eea4a3fb35580&units=metric'

    fetch(url + `&q=${cityName}`)
    .then((response)=>{
        if(!response.ok){
            cityDisp.style.fontSize = '20px'
            cityDisp.innerHTML = 'City not found';
            return;
        }
        else{
            cityDisp.style.fontSize = '40px'
        }
        return response.json();

    })
    .then((data)=>{
        let tempValue = data.main.temp;
        tempDisp.innerHTML = `${tempValue.toFixed(0)}°C`;

        cityDisp.innerHTML = data.name;
        console.log(data.weather[0].main)

        switch(data.weather[0].main){
            case 'Clouds':
                weatherIcon.src = "weather-img/clouds.png";
                break;
            case 'Clear':
                weatherIcon.src = "weather-img/clear.png";  
                break;  
            case 'Snow':
                weatherIcon.src = "weather-img/rain.png";  
                break;   
            case 'Rain':
                weatherIcon.src = "weather-img/rain.png";  
                break;
            case 'Drizzle':
                weatherIcon.src = "weather-img/drizzle.png"; 
                break;
            case 'Mist':
                weatherIcon.src = "weather-img/mist.png";     
                break;
            case 'Fog':
                weatherIcon.src = "weather-img/mist.png";     
                break;    
            default:
                weatherIcon.src = "weather-img/clouds.png";
        }

        let humidityValue = data.main.humidity;
        humidityDisp.innerHTML = `${humidityValue.toFixed(0)}%`;

        let windSpeedValue = data.wind.speed;
        windSpeedDisp.innerHTML = `${windSpeedValue.toFixed(2)}` + ' km/hr';
    })
    .catch((response)=>{
        console.error(response)
    })
} 