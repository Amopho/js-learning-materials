import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import imageDictionary from "./imageDictionary";
import { isSameDay, format } from "date-fns";
import NumberToMonth from "../NumberToMonth";

const Weather = ({ forecast: { name, list, timezone } }) => {
  // const [currentDate, setCurrentDate] = useState("");

  // useEffect(() => {
  //   var date = new Date().getDate(); //Current Date
  //   var month = new Date().getMonth() + 1; //Current Month
  //   var year = new Date().getFullYear(); //Current Year
  //   // var hours = new Date().getHours(); //Current Hours
  //   // var min = new Date().getMinutes(); //Current Minutes
  //   // var sec = new Date().getSeconds(); //Current Seconds
  //   setCurrentDate(
  //     date + "/" + month + "/" + year //+ " " + hours + ":" + min + ":" + sec
  //   );
  // }, []);
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
      <Text>
        Today is {"\n"}
        <View>
          <NumberToMonth />
        </View>
      </Text>
      <Image
        source={
          imageDictionary[currentWeather[0].weather[0].icon] ||
          imageDictionary["02d"]
        }
        style={{ height: 30, width: 30 }}
      />
      <Text>{Math.round(currentWeather[0].main.temp)}°C</Text>
      <Text>{currentWeather[0].weather[0].description}</Text>
    </View>
  );
};

export default Weather;
