function displayCurrentTemperature(response) {
  let temperatureElement = document.querySelector("#current-temperature-text");
  let temperature = Math.round(response.data.temperature.current);
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = response.data.city;
  temperatureElement.innerHTML = temperature;
}

function search(event) {
  event.preventDefault();
  let searchCityInput = document.querySelector("#city-input");
  let newCity = searchCityInput.value;

  let apiKey = "895d42a7dtfe24oe1bb63cf400f9b244";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${newCity}&key=${apiKey}`;

  axios.get(apiUrl).then(displayCurrentTemperature);
}
function dateFormat(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let dayFormat = days[day];
  return `${dayFormat} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
let currentDateFormat = document.querySelector("#current-date");
let currentDate = new Date();
currentDateFormat.innerHTML = dateFormat(currentDate);
