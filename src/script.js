function search(event) {
  event.preventDefault();
  let searchCityInput = document.querySelector("#city-input");
  let newCity = document.querySelector("#current-city");
  newCity.innerHTML = searchCityInput.value;
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

function dateFormat(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

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

let currentDateFormat = document.querySelector("#current-date");
let currentDate = new Date();
currentDateFormat.innerHTML = dateFormat(currentDate);
