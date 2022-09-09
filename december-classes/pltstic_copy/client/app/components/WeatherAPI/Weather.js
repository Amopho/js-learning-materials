import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import imageDictionary from "./imageDictionary";
import { isSameDay, format } from "date-fns";
import TodaysDate from "../Calendar/TodaysDate";
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

  // console.log("Look here -------------->");
  // console.log(currentWeather.length);

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
    <View style={styles.wrapper}>
      <Text style={styles.location}>{name || "Berlin"}</Text>

      <View style={styles.date}>
        <NumberToMonth />
      </View>

      <Text style={styles.description}>
        Wetter: {currentWeather[0].weather[0].description || "bewölkt"}
      </Text>

      <View style={styles.rowTempIcon}>
        <Text style={styles.temp}>
          {Math.round(currentWeather[0].main.temp) || 2}°C
        </Text>

        <Image
          style={styles.image}
          source={
            imageDictionary[currentWeather[0].weather[0].icon] ||
            imageDictionary["02d"]
          }
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapper: {
    // borderColor: "pink",
    // borderWidth: 2,
    // borderStyle: "solid",
    // width: "50%",
    textAlign: "right",
    // marginLeft: "50%",
    // backgroundColor: "pink",
    display: "flex",
    marginRight: 15,
    alignItems: "center",
    // justifyContent: "center",
  },
  location: {
    textAlign: "right",
    fontSize: 30,
    // paddingTop: 10,
    // marginRight: 13,
    // backgroundColor: "yellow",
  },
  date: {
    alignSelf: "flex-end",
    // marginRight: 13,
    // backgroundColor: "beige",
  },
  rowTempIcon: {
    // margin: 5,
    // marginRight: 13,
    flexDirection: "row",
    alignContent: "flex-end",
    justifyContent: "flex-end",
    // backgroundColor: "tomato",
  },
  temp: {
    fontSize: 30,
    alignSelf: "center",
    // backgroundColor: "white",
  },
  image: {
    width: 70,
    height: 70,
    marginLeft: 10,
    // backgroundColor: "purple",
    alignSelf: "center",
  },

  description: {
    alignSelf: "center",
    // marginRight: 13,
    // backgroundColor: "grey",
  },
});
export default Weather;
