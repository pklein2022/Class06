// Practice 1: HTML list with 3-Hour Forecast for next 24 Hours. Display Date/Time and Forecasted Temperature in Fahrenheit
// Tip: If your temperature does not make sense, review API docs and make sure you are requesting Temperature in Fahrenheit units!

// Function 1: Download JSON forecast data from OpenWeatherMap API endpoint
// DOCS: https://openweathermap.org/forecast5
// API: https://api.openweathermap.org/data/2.5/forecast?q=Nixa,MO,USA&appid=4d8fb5b93d4af21d66a2948710284366
function fetchWeather(city,state) {
  if (city === ""){
    alert("Enter a city");
    return
  }
  if (state === "" || state.length !== 2){
    alert("Enter the State abbrevation");
    return
  }
  fetch(
    // "https://api.openweathermap.org/data/2.5/forecast?q=Nixa,MO,USA&appid=4d8fb5b93d4af21d66a2948710284366&units=imperial"
    "https://api.openweathermap.org/data/2.5/forecast?q="+city+","+state+",USA&appid=4d8fb5b93d4af21d66a2948710284366&units=imperial"
  )
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then((data) => {
      //console.log(data)
      let forecasts = parseWeather(data);
      forecasts.forEach(addForecast);
    })
    .catch((error) => console.error("FETCH ERROR:", error));
}

// Function 2: Convert JSON forecast data to array. Each array item should contain two items: forecast time, forecast temperature
function parseWeather(data) {
  //console.log(data.list)
  //console.log(data.city.name)
  let myResult = [];
  for (let i = 0; i < data.list.length; i++) {
    //console.log(data.list[i]);
    //console.log(data.list[i].dt_txt);
    //console.log(data.list[i].main.temp);
    myResult.push({city:data.city.name, time:data.list[i].dt_txt, temp:data.list[i].main.temp});
  }
  console.log (myResult);
  return myResult;
}

// Function 3: Add a string to an HTML list
function addStringToHtmlList(myString) {
  var li = document.createElement("li");
  li.innerHTML = myString;
  document.getElementById("weatherForecast").appendChild(li);

}

// Function 4: Add each forecast array item to the HTML list
function addForecast(item){
 //console.log(item.city + " " + item.time + " " + item.temp + "F");
  addStringToHtmlList(item.city + " " + item.time + " " + item.temp + "F");

}
function searchWeather(){
  document.getElementById('weatherForecast').innerHTML = '';
  let city = document.getElementById('weatherCity').value;
  let state = document.getElementById('weatherState').value;
  fetchWeather(city,state);
}
