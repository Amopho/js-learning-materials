const OpenWeatherClient = require("./weather-client");
const myKey = require("../../config");

// const API_KEY = myKey.apiKey;
const API_KEY = myKey;

function formatData(data) {
  const result = `It's now ${data.main.temp}\u0000C in ${data.name}, ${
    data.sys.country
  }
    Today's weather ${data.weather
      .map((condition) => condition.description)
      .join(", ")}`;
  return result;
}

module.exports = async function weather(city, country) {
  const client = new OpenWeatherClient(API_KEY);
  const currentData = await client.getWeather(city, country);
  console.log(currentData);
  return formatData(currentData);
};

// client - object that has a functionality to fetch
// current Data will hold on data that I grabbed
