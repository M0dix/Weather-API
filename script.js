function getWeather(){
    let city;
    let APIkey = "09a0e4cda3a57a2711f58769cfd506a3";
    let cityarrs = ["524894", "536203" ,"498677", "509850", "554234", "511565"]
    let e = document.getElementById("selector_city");
    let cityvalue = e.options[e.selectedIndex].value;
    let container = document.getElementById("card_container");

    let appid = "09a0e4cda3a57a2711f58769cfd506a3";
    fetch(`http://api.openweathermap.org/data/2.5/weather?id=${cityarrs[cityvalue]}&appid=${APIkey}`)
    .then(function(resp){ return resp.json();})
    .then(function(data){ 
        console.log(data);
        console.log(Math.round(data.main.temp - 273));
        container.innerHTML = `
        <div class=weather_element>
            <span class="weather_element_name"><p>${data.name.toUpperCase()}</p></span>
            <span class="weather_element_temp"><p>${Math.round(data.main.temp - 273)}&deg</p></span>
            <span class="weather_element_disclaimer"><p>${data.weather[0]['description']}</p></span>
            <p class="weather_element_img"><img src="http://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">
        </div>
        `
    })

}