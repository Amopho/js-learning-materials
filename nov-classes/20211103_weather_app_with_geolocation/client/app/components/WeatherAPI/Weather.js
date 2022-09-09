import React from "react";
import { View, Text, Image } from "react-native";
import imageDictionary from "./imageDictionary";
import { isSameDay, format } from "date-fns";

const Weather = ({ forecast: { name, list, timezone } }) => {
  const currentWeather = list.filter((day) => {
    const now = new Date().getTime() + Math.abs(timezone * 1000);
    const currentDate = new Date(day.dt * 1000);
    return isSameDay(now, currentDate);
  });

  const daysByHour = list.map((day) => {
    const dt = new Date(day.dt * 1000);
    return {
      date: dt,
      hour: dt.getHours(),
      name: format(dt, "EEEE"),
      temp: Math.round(day.main.temp),
      icon: imageDictionary[day.weather[0].icon] || imageDictionary["02d"],
    };
  });
  return (
    <View>
      <Text>{name}</Text>
      <Text>Today</Text>
      <Image
        source={
          imageDictionary[currentWeather[0].weather[0].icon] ||
          imageDictionary["02d"]
        }
      />
      <Text>{Math.round(currentWeather[0].main.temp)}°C</Text>
      <Text>{currentWeather[0].weather[0].description}</Text>
    </View>
  );
};

export default Weather;
