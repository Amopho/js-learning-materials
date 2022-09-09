const axios = require("axios");
const url = require("url");

// constructor -place to initialize all the variables
class OpenWeatherClient {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "http://api.openweathermap.org/data/2.5/";
  }
  get(endpoint) {
    const URL =
      url.resolve(this.baseUrl, endpoint) +
      `&units=metric&appid=${this.apiKey}`;
    return axios
      .get(URL)
      .then((res) => res.data)
      .catch((err) => Promise.reject(err.response.data.message));
  }
  async getWeather(city, country) {
    let endpoint = `weather?q=${city}`;
    if (country) {
      endpoint += `,${country}`;
    }
    return await this.get(endpoint);
  }
}
// get function, needs endpoint- fetch call function, I combine both - base and endpoint(city, country) into URL
// res response
// handle error - rejection message creating
// getWeather will be calling get and will be sending it to endpoint?

// To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9).
// Example: (50°F - 32) x .5556 = 10°C
// To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.
// Example: (30°C x 1.8) + 32 = 86°F
module.exports = OpenWeatherClient;
