//Weather_API

//README

//Endpoint_for_data_retrieval:
//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//direct_geoconversion_for_longitute_and_lattitude: http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

//allowing prompt to run in the shell
const prompt = require("prompt-sync")();

const apiKey = prompt("please input your API key from the openweathermap api service: ");
const city = prompt("please input your city with an uppercase: ");
const stateCode = prompt("please input your state in the TWO-LETTER UPPERCASE state code format, i.e. Texas = TX: ");
const countryCode = "US";

//Geo location api get request
const getLocData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetching data failed:", error);
    throw error;
  }
};

//weather data api get request
const getWeatherData = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Fetching data failed:", error);
    throw error;
  }
};



// geolocation data endpoint
const apiUrlLoc = `http://api.openweathermap.org/geo/1.0/direct?q=${city},${stateCode},${countryCode}&appid=${apiKey}`;

//functions
getLocData(apiUrlLoc)
.then(result => {
    const lat = result[0].lat
    const lon = result[0].lon
    // weather data endpoint:
    const apiUrlWeather = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${apiKey}`;
    getWeatherData(apiUrlWeather)
      .then(result => {
        console.log('Data fetched successfully:',result.current.weather[0])
      })
      .catch(error => {
        console.error('Error processing data:', error)
      });
  })
  .catch(error => {
    console.log('Error processing data of geolocation:', error)
  });
