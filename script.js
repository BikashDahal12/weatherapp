
const apikey = "1243d27d65b3a297b75d5ac83530c89c";
const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(`${apiurl}${city}&units=metric&appid=${apikey}`);
  
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  }
  
  else {
    const data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
    document.querySelector(".city").innerHTML = data.name;
    
    // Update the weather icon based on the condition
    const weatherCondition = data.weather[0].main.toLowerCase();
    if (weatherCondition.includes("cloud")) {
      weatherIcon.src = "images/cloud.png";
    } else if (weatherCondition.includes("clear")) {
      weatherIcon.src = "images/clear.png";
    } else if (weatherCondition.includes("rain")) {
      weatherIcon.src = "images/rain.png";
    } else if (weatherCondition.includes("drizzle")) {
      weatherIcon.src = "images/drizzle.png";
    } else if (weatherCondition.includes("mist")) {
      weatherIcon.src = "images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

// Add event listener to the search button
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
