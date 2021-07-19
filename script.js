var apiKey = "6b9eed9e412c80237ea4bc6106f3c8e3";
var myCity = "apex";
var myCityButton = document.getElementById("citySearchButton");
var weatherNow = "https://api.openweathermap.org/data/2.5/weather?q="+myCity+"&Appid="+ apiKey+"&units=imperial";
var weatherFive = "https://api.openweathermap.org/data/2.5/forecast?q="+ myCity+"&Appid="+ apiKey+"&units=imperial";

//current doms
var currLocation = document.getElementById("locale");
var currTemp = document.getElementById("localTemp");
var currWind = document.getElementById("localWind");
var currHumid = document.getElementById("localHumid");
var curUV = document.getElementById("localUV");
//5day doms
var tempday1 = document.getElementById("tempDay1");
var windday1 = document.getElementById("windDay1");
var humidday1 = document.getElementById("humidDay1");
var tempday2 = document.getElementById("tempDay2");
var windday2 = document.getElementById("windDay2");
var humidday2 = document.getElementById("humidDay2");
var tempday3 = document.getElementById("tempDay3");
var windday3 = document.getElementById("windDay3");
var humidday3 = document.getElementById("humidDay3");
var tempday4 = document.getElementById("tempDay4");
var windday4 = document.getElementById("windDay4");
var humidday4 = document.getElementById("humidDay4");
var tempday5 = document.getElementById("tempDay5");
var windday5 = document.getElementById("windDay5");
var humidday5 = document.getElementById("humidDay5");
//current city name
fetch(weatherNow)
  .then(response => response.json())  
  .then(data => currLocation.innerText = data.name)

// current temp
fetch(weatherNow)
  .then(response => response.json())  
  .then(data => currTemp.innerText = data.main.temp)

// current wind
fetch(weatherNow)
  .then(response => response.json())  
  .then(data => currWind.innerText = data.wind.speed)

// current humidity
fetch(weatherNow)
  .then(response => response.json())  
  .then(data => currHumid.innerText = data.main.humidity)

// current uv
fetch(weatherNow)
  .then(response => response.json())  
  .then(data => currHumid.innerText = data.main.humidity)

//tester
fetch(weatherNow)
  .then(response => response.json())  
  .then(data => console.log(data))

//5dayforecast

//temp 1
fetch(weatherFive)
  .then(response => response.json())  
  .then(data => tempday1.innerText = data.list[0].main.temp)

//wind 1
fetch(weatherFive)
  .then(response => response.json())  
  .then(data => windday1.innerText = data.list[0].wind.speed)

//wind 1
fetch(weatherFive)
  .then(response => response.json())  
  .then(data => humidday1.innerText = data.list[0].main.humidity)

//temp 2
fetch(weatherFive)
  .then(response => response.json())  
  .then(data => tempday2.innerText = data.list[1].main.temp)

//wind 2
fetch(weatherFive)
  .then(response => response.json())  
  .then(data => windday2.innerText = data.list[1].wind.speed)

//wind 2
fetch(weatherFive)
  .then(response => response.json())  
  .then(data => humidday2.innerText = data.list[1].main.humidity)

//temp 3
fetch(weatherFive)
  .then(response => response.json())  
  .then(data => tempday3.innerText = data.list[2].main.temp)

//wind 3
fetch(weatherFive)
  .then(response => response.json())  
  .then(data => windday3.innerText = data.list[2].wind.speed)

//wind 3
fetch(weatherFive)
  .then(response => response.json())  
  .then(data => humidday3.innerText = data.list[2].main.humidity)

//temp 4
fetch(weatherFive)
  .then(response => response.json())  
  .then(data => tempday4.innerText = data.list[3].main.temp)

//wind 4
fetch(weatherFive)
  .then(response => response.json())  
  .then(data => windday4.innerText = data.list[3].wind.speed)

//wind 4
fetch(weatherFive)
  .then(response => response.json())  
  .then(data => humidday4.innerText = data.list[3].main.humidity)

  //temp 5
fetch(weatherFive)
.then(response => response.json())  
.then(data => tempday5.innerText = data.list[4].main.temp)

//wind 5
fetch(weatherFive)
.then(response => response.json())  
.then(data => windday5.innerText = data.list[4].wind.speed)

//wind 5
fetch(weatherFive)
.then(response => response.json())  
.then(data => humidday5.innerText = data.list[4].main.humidity)

//tester
fetch(weatherFive)
  .then(response => response.json())  
  .then(data => console.log(data))