const axios = require("axios");
const myKey = require("./config");

// INDEX.JS
const args = process.argv.slice(2);
const city = args;

// Weather-CLIENT.JS constructor -place to initialize all the variables
// const units = "metric";
// const endpoint = "weather";

async function weather() {
  const API_KEY = myKey.apiKey;
  const headers = {
    app_key: API_KEY,
  };
  try {
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${args}&units=metric&APPID=${API_KEY}`
      // { headers }
    );
    console.log(city);
    console.log(data.sys.country[0]);
    console.log(
      // data.results[0].lexicalEntries[0].entries[0].senses[0].definitions[0]
      data
    );
  } catch (error) {
    console.log("Enter a validate city name, please!");
  }
}
// dictionary(word_id);
weather(args);
