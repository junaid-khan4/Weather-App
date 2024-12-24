const userLocation  = document.querySelector("#location");
const weatherBtn = document.querySelector("#getWeatherBtn");
const myResults = document.querySelector(".results");

weatherBtn.addEventListener("click", function() {
    const location = userLocation.value;

    if (location === "") {
        myResults.innerHTML = "<p>Please enter a location!</p>";
        return;
    }

    const apiKey = "f1ad6fcefe2bd94f7a635700504df506";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=${apiKey}&units=metric`;


    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;

            myResults.innerHTML = `
                <p>Location: ${location}</p>
                <p>Temperature: ${temperature}°C</p>
                <p>Description: ${description}</p>
                <p>Humidity: ${humidity}%</p>
            `;
        })
        .catch(error => {
            myResults.innerHTML = "<p>Sorry, we couldn't fetch the weather data. Please try again later.</p>";
        });
});
