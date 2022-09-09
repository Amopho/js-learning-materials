import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import StyleMain from "../styles/StyleMain";

const NumberToMonth = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    let year = new Date().getFullYear(); //Current Year
    let d = new Date().getMonth(); // current Month ! starting index 0 !
    let day = new Date().getDay();

    let monthNames = [
      "Januar",
      "Februar",
      "März",
      "April",
      "Mai",
      "Juni",
      "Juli",
      "August",
      "September",
      "Oktober",
      "November",
      "Dezember",
    ];

    const monthName = monthNames[d];

    setCurrentDate(
      day + " " + monthName + " " + year
      //+ " " + hours + ":" + min + ":" + sec
    );
  }, []);

  return (
    <View>
      <Text>{currentDate}</Text>
    </View>
  );
};

export default NumberToMonth;
