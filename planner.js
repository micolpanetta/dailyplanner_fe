window.onload = onStart;


function onStart(event) {

    const data = getDailyData(Date.now());
    updateWeather(data.weather);

}

function updateWeather(weather) {

    let weather_icons = document.getElementById('weather');

    [...weather_icons.children].forEach(weather_icon => {
        weather_icon.classList.remove('circled');
    });

    if(weather != null) {
        document.getElementById(weather).classList.add('circled');
    }

}