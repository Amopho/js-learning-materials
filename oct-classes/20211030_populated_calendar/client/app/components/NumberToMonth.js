import { View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import StyleMain from "../styles/StyleMain";

const NumberToMonth = () => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    let year = new Date().getFullYear(); //Current Year
    let d = new Date();
    let monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const monthName = d.toLocaleString("default", { month: "long" });

    setCurrentDate(
      monthName + " " + year //+ " " + hours + ":" + min + ":" + sec
    );
  }, []);

  return (
    <View>
      <Text>{currentDate}</Text>
    </View>
  );
};

export default NumberToMonth;
