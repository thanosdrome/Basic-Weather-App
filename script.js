let valueSearch = document.getElementById('value');
let city = document.getElementById('city');
let temperature = document.getElementById('temperature');
let description = document.querySelector('description');
let humidity = document.getElementById('humidity');
let pressure = document.getElementById('pressure');
let form = document.querySelector('form');
let main = document.querySelector('main')
form.addEventListener('submit',(event) =>{
    event.preventDefault();
    if(valueSearch.value != ''){
        searchWeather();
    }
});

let id = '9797720454b8be7b67d3f61fd6503bac';
let url = 'https://api.openweathermap.org/data/2.5/';

const searchWeather = () =>{
    fetch(`${url}weather?q=${valueSearch.value}&units=metric&APPID=${id}`)
    .then(response  => response.json())
    .then(data => {
        if(data.cod == 200){
            city.querySelector('figcaption').innerHTML = data.name;
            city.querySelector('img').src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
            temperature.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
            temperature.querySelector('span').innerText = data.main.temp;
            description.innerText = data.weather[0].description;

            clouds.innerText = data.clouds.all;
            humidity.innerText = data.main.humidity;
            pressure.innerText = data.main.pressure;
            
        }else{
            main.classList.add('error');
            setTimeout(() => {
                main.classList.remove('error');
            }, 1000);
        }
        valueSearch.value = '';
    })
}
const initApp = () =>{
    valueSearch.value = 'Delhi';
    searchWeather();
}
initApp();