let searchBox = document.getElementById('searchBox');
let searchButton = document.querySelector('.button');
let weathercontent = document.getElementById("weathercontent");

let city = '';

//let data = fetch("http://api.openweathermap.org/data/2.5/weather?q=Brisbane&units=metric&appid=6adf14186495bc9a9014337d3a070921")
//    .then(response => response.json())
//    .then(data => console.log(data));
// cleaned it up instead of using default fetch, used async await

async function GetWeather()
{
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=6adf14186495bc9a9014337d3a070921`);
    let data = await response.json();
    console.log(data);

    let template = `
        <h1 class="temp"> ${data.main.temp} &#8451;<h1>
        <h2 class="city"> ${data.name} <h2>
        <h2 class="desc"> ${data.weather[0].description} <h2>

        <div class="extras">
            <p>Feels like: ${data.main.feels_like} <p>
            <p>Humidity: ${data.main.humidity} <p>
            <p>Pressure: ${data.main.pressure} <p>
            <p>Temp Min: ${data.main.temp_min} <p>
            <p>Temp Max: ${data.main.temp_max} <p>
            <p>Wind Speed: ${data.wind.speed} <p>
        </div>
    `;

    weathercontent.innerHTML = template;  //putting city's weather data on page
    city = '';                            //clears city after input
    searchBox.value = '';                //clears searchbox afer input
    searchBox = document.getElementById('searchBox'); //resync's input if you want to search for another location after first city input
}

function btnClick(){
    city = searchBox.value;
    GetWeather();
}


//6adf14186495bc9a9014337d3a070921