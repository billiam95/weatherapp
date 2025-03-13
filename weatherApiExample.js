//Weather_API

//README
//API_Key: 8c1dd98738c94a3ebc6c821421c0365c

//Endpoint_for_data_retrieval:
//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//Endpoint_with_Dallas_coords_and_api_key:
//https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}

//direct_geoconversion_for_longitute_and_lattitude: http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}

//allowing prompt to run in the shell
const prompt = require("prompt-sync")();

const apiKey = prompt("please input your API key from the openweathermap api service: ");
console.log(apiKey)
//const city = prompt("please input your city with an uppercase: ");
//const stateCode = prompt("please input your state in the TWO-LETTER UPPERCASE state code format, i.e. Texas = TX: ");
//const countryCode = "US";
//const exclude = prompt('Would you like to exclude any parameters? (current, minutely, hourly,alerts): ')

const getData = async (url) => {
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

// Usage example:
const apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${33.1983}&lon=${96.6389}&exclude=${''}&appid=${apiKey}`;

getData(apiUrl)
  .then(result => {
    console.log('Data fetched successfully:', result);
  })
  .catch(error => {
    console.error('Error processing data:', error);
  });
